/**
 * Created by TV on 4/15/2015.
 */
var upload = {
    fontContainer : null,
    oldAllFonts   : null,
    emptyFontList : null,
    dropdown      : null,
    divider       : null,
    noFont        : null,
    listOffont    : [],
    allFontsLength: null,
    input         : null,

    bindFileInput: function ()
    {
        var ul = $('#upload ul');
        var q = this;
        var name = null;
        var time = null;
        var uploadedItems = {};
        this.input = $('#upload input');
        var self = this;
        var bindAs = function ($elem)
        {

            $('.drop a, .noFontLabel a').click(function (e)
            {
                // Simulate a click on the file input button
                // to show the file browser dialog
                $elem.click();
            });
        };
        bindAs(self.input);
        // Initialize the jQuery File Upload plugin
        var initUpload = function ()
        {

            $('#upload').fileupload({

                // This element will accept file drag/drop uploading
                dropZone: $('.drop'),

                // This function is called when a file is added to the queue;
                // either via the browse button, or via drag/drop:
                add: function (e, data)
                {

                    var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"' +
                        ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><P></P><span></span></li>');

                    // Append the file name and file size
                    name = data.files[0].name;
                    var ext = extenstion(name);
                    tpl.find('p').text(data.files[0].name)
                        .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

                    // Add the HTML to the UL element
                    data.context = tpl.appendTo(ul);

                    // Listen for clicks on the cancel icon
                    tpl.find('span').click(function ()
                    {

                        if (tpl.hasClass('working'))
                        {
                            jqXHR.abort();
                        }

                        tpl.fadeOut(function ()
                        {
                            tpl.remove();
                        });

                    });

                    // Automatically upload the file once it is added to the queue
                    if (wasUploaded(name))
                    {
                        //console.log('was already uploaded');
                        //alert(name + 'was uploaded');
                        Wix.UI.create({ctrl: 'Popup',
                            options: {
                                modal:false,
                                content : name + ' was uploaded',
                                buttonSet: 'ok',
                                fixed:true,
                                title:'Font Uploaded'
                            }});
                        restInput();
                        return;
                    }
                    if (supportedFont.indexOf(ext) == -1)
                    {
                        alert(name + 'is not supported');
                        restInput();
                    }
                    else
                    {
                        uploadedItems[name] = q.addUploadedItem(q.allFontsLength++, {
                            fileName: name,
                            family  : name.replace('.' + extenstion(name), '')
                        }, q, 0);
                        uploadedItems[name].time = new Date().getTime();
                        if (q.noFont)
                        {
                            q.noFont.hide();
                            q.createUploadDivider();
                        }
                        uploadedItems[name].el.slideDown();
                        var jqXHR = data.submit().done(function (e, data)
                        {
                            //alert('upload ok');
                            var popup = Wix.UI.create({ctrl: 'Popup',
                                options: {
                                    modal:false,
                                    content : name + ' was uploaded',
                                    buttonSet: 'ok',
                                    fixed:true,
                                    title:'Font Uploaded'
                                }});
                            popup.getCtrl().open();

                            q.sendParse(e.data, e.name, function ()
                            {
                                q.loadAndUpdateDropdown(uploadedItems[e.origfile].index, {
                                    fileName: e.name,
                                    family  : e.name.replace('.' + extenstion(e.name), ''),
                                    url     : e.data.Location
                                }, q, function ()
                                {
                                    uploadProgress.inc(uploadedItems[e.origfile].el, 1.3333);
                                    uploadedItems[e.origfile].el.find('.loading').fadeIn();
                                    //uploadedItems[e.origi]
                                    //$('.fontdiv[data-allfontsidx="' + uploadedItems[name].index + '"] .textPreview .text').fadeIn();
                                    restInput();
                                });

                            });

                            console.log(e, data);


                        }).fail(function (e, data)
                        {
                            console.log(e, data);
                            uploadedItems[name].el.slideUp(function ()
                            {
                                q.noFont.show();
                                uploadedItems[name].el.remove();
                                delete uploadedItems[name];
                            });
                        });
                    }
                },

                progress: function (e, data)
                {

                    // Calculate the completion percentage of the upload
                    //var progress = parseInt(data.loaded / data.total * 100, 10);
                    $.each(data.files, function (i, file)
                    {
                        uploadedItems[file.name].newTime = new Date().getTime();
                        uploadedItems[file.name].delay = uploadedItems[file.name].newTime - uploadedItems[file.name].time;
                        uploadedItems[file.name].time = uploadedItems[file.name].newTime;
                        uploadProgress.inc(uploadedItems[file.name].el, data.loaded / data.total, uploadedItems[file.name].delay);
                        //uploadedItems[file.name].el.css("opacity", data.loaded / data.total);
                    });
                },

                fail: function (e, data)
                {
                    // Something has gone wrong!
                    data.context.addClass('error');
                }

            });
        };
        initUpload();
        var restInput = function ()
        {
            self.input.replaceWith(self.input.val('').clone(true));
            $('.drop a, .noFontLabel a').unbind('click');
            bindAs($('#upload input'));
            //initUpload();
        };

        // Prevent the default action when a file is dropped on the window
        $(document).on('drop dragover', function (e)
        {
            e.preventDefault();
        });

        // Helper function that formats the file sizes
        function formatFileSize(bytes)
        {
            if (typeof bytes !== 'number')
            {
                return '';
            }

            if (bytes >= 1000000000)
            {
                return (bytes / 1000000000).toFixed(2) + ' GB';
            }

            if (bytes >= 1000000)
            {
                return (bytes / 1000000).toFixed(2) + ' MB';
            }

            return (bytes / 1000).toFixed(2) + ' KB';
        }

    },

    sendParse: function (data, name, callback)
    {
        $.ajax({
            type   : 'POST',
            url    : SERVER_URL + '/upload/db',
            data   : {
                fileName  : name,
                urlData   : data,
                instanceId: instanceId
            },
            success: function (response)
            {
                console.log(response);
                if (callback)
                    callback();
            }
        });

    },

    init: function ()
    {
        $('#upload').attr('action', SERVER_URL + '/upload');
        var q = this;
        //q.customFontUL = $('#custom-font-list');
        q.fontContainer = $('[data-tab="upload"] .fontContainer');
        q.allFontsLength = q.oldAllFonts = allFonts.length;
    },

    initList: function (list)
    {
        var q = this;
        q.dropdown = $redactor.fontfacedropdown;
        q.divider = $('#fontfamilydropdown .menu .divider[data-index="0"]');
        q.listOffont = list;
        q.createUploadDivider();
        q.bindFileInput();
        widgetSettings.uploadedFonts = [];

        $.each(list, function (i, font)
        {
            font.family = font.fileName.replace('.' + extenstion(font.fileName), '');
            q.loadAndUpdateDropdown(q.allFontsLength + i, font, q, function ()
            {
                $('.fontdiv[data-allfontsidx="' + (q.oldAllFonts + i) + '"] .textPreview .text').show();
            });
            q.addUploadedItem(q.allFontsLength + i, font, q, 1);

            if (i + 1 == list.length)
                q.allFontsLength = allFonts.length;
        })
    },

    loadAndUpdateDropdown: function (i, font, q, callback)
    {
        widgetSettings.uploadedFonts.push(font);
        q.loadUploadedFont(font.url, font.family, i, callback);
        q.divider.after(q.dropdown.createDropdownItem(i, font.family).addClass('uploaded'));
    },

    addUploadedItem: function (i, font, q, opacity)
    {
        var text = stripHtml(widgetSettings.code).substring(0, 50);
        allFonts.push({family: font.family, variants: ['400'], italic: false, str: 'Uploaded'});
        var item = q.createUploadedItem(i, font.family, text, opacity);
        if (opacity == 0)
            item.hide();
        q.fontContainer.prepend(item);
        return {el: item, index: i};
    },

    onClickUploadedItem: function (e)
    {
        upload.removeAllSelction();
        upload.selectedItem(this);
        var index = $(this).attr('data-allfontsidx');
        var $selectedDropdownItem = $(upload.divider.parent().children('[data-value="' + index + '"]')[0]);
        $redactor.fontfacedropdown.onDropdownClick(index, $selectedDropdownItem.html(), $selectedDropdownItem);
        $.proxy(onFontSelected, this)({target:this})
    },

    createUploadedItem: function (i, fontFamily, text, opacity)
    {
        opacity = (typeof opacity == 'undefined') ? 1 : opacity;
        text = (typeof text == 'undefined') ? '' : text;
        var q = this;
        return createView({
            tag  : 'div',
            cls  : 'fontdiv noselect',
            atr  : [
                {'data-family': fontFamily},
                {'data-allfontsidx': i},
                {style: 'font-family:' + fontFamily + '; opacity:' + opacity + ';'}
            ],
            bind : [{click: q.onClickUploadedItem}],
            items: [
                {
                    tag : 'a',
                    cls : 'ui ribbon label',
                    html: fontFamily
                },
                {
                    tag  : 'div',
                    cls  : 'textPreview font-unselected',
                    items: [
                        {
                            tag : 'div',
                            cls : 'text loading',
                            atr : [{style: 'display:none;'}],
                            html: text
                        }
                    ]
                },
                {
                    tag  : 'div',
                    cls  : 'fontSelectButton lowerButtons',
                    atr  : [{'data-allfontsidx': i}],
                    bind : [{click: q.onClickUploadedItem}],
                    html : 'Select This Font',
                    items: [
                        {
                            tag: 'i',
                            cls: 'arrow right icon'
                        }
                    ]
                }
            ]
        }).build().element;
    },

    createNoUpladedFonts: function ()
    {
        this.noFont = createView({
            tag : 'div',
            cls : 'noFontsLabel',
            html: 'Drag &amp; Drop files here <br /> or <a><b> Click Here </b></a> to browse'
        }).build().element;
        this.fontContainer.append(this.noFont);
        this.divider = $('#fontfamilydropdown .menu .divider[data-index="1"]');
        this.dropdown = $redactor.fontfacedropdown;
        this.bindFileInput();
        return this.noFont;
    },

    createUploadDivider: function ()
    {
        var d = this.dropdown.createDivder();
        this.divider.before(d);
        this.divider = d;
    },

    loadUploadedFont: function (url, font, idx, callback)
    {
        WebFont.load({
            custom: {
                families: [font],
                urls    : [url]
            },
            active: function ()
            {
                if (idx) fontsCompletelyLoadedIdx.push(idx);
                if (callback) callback(this.custom.families[0])
            }
        });
    },

    removeAllSelction: function ()
    {
        upload.fontContainer.find('.font-selected')
            .removeClass('font-selected');
        var but = upload.fontContainer.find('.active')
            .removeClass('active');
        but.html('Select This Font ')
            .append($('<i>').addClass('arrow right icon'));
    },

    selectedItem: function (q)
    {
        var mainDiv = ($(q).hasClass('fontdiv')) ? $(q) : $(q).parents('.fontdiv');
        mainDiv.find('.textPreview')
            .addClass('font-selected');
        mainDiv.find('.lowerButtons')
            .addClass('active')
            .html('Selected ')
            .append($('<i>').addClass('check icon'));

    }

};

var uploadProgress = {
    running: null,
    queue  : [],
    min    : 200,

    inc: function (el, value, time)
    {
        this.queue.push({
            el   : el,
            value: value * 0.75,
            time : (time < this.min) ? this.min : time
        });
        if (!this.running)
            this.run(0);
    },

    run: function (i)
    {
        if (typeof this.queue[i] == 'undefined')
        {
            this.running = false;
            this.queue = [];
        }
        else
        {
            this.queue[i].el.animate({
                opacity: this.queue[i].value

            }, this.queue[i].time, this.run(++i));

        }
    }
};
function wasUploaded(name)
{
    var toreturn = $.grep(widgetSettings.uploadedFonts, function (obj)
    {
        return obj.family == name.replace('.' + extenstion(name), '')
    });
    return toreturn.length

}