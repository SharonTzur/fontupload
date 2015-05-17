(function ($)
{
    RedactorPlugins.fontfacedropdown = function ()
    {
        return {
            input  : null,
            current: null,
            menu   : null,

            init   : function ()
            {
                var searchDivStr =
                        '<div id="dropdownSearchFontsInput" class="ui icon search input">' +
                        '<i class="search icon"></i>' +
                        '<input name="search" placeholder="Search fonts..." type="text">' +
                        '</div>';

                var dropdown = $(
                    '<div id = "fontfamilydropdown" class="ui anyfontdropdown floating dropdown labeled search icon button">' +
                    '<div class="default text">' +
                    'Select or search font' +
                    '</div>' +
                        //'<input name="hidden-field" type="hidden">' +
                    '<div class="menu">' +
                    searchDivStr +
                    '</div>' +
                    '<i class="fonticon icon"></i>' +
                    '</div>'
                )
                    .dropdown('setting', 'transition', 'slide down')
                    .dropdown({
                        onChange: this.fontfacedropdown.onDropdownClick,
                        onHide :function (e) {
                            var menu = $redactor.fontfacedropdown.menu;
                            menu.children('.filtered').removeClass('filtered');
                            menu.children().not('.search').hide();
                            menu.children('.original').show();

                            $(this).find('input').val('');
                            $(this).find('input').trigger('keyup');
                        }
                    }
                )
                    .popup('setting', 'content', 'Search and select fonts')
                    .on('click', function ()
                    {
                        $(this).children('.menu')[0].scrollTop = 0;
                    });


                var item,
                    q     = this.fontfacedropdown,
                    items = [];


                //items.push(search);
                items.push(q.createDivder());
                items.push(q.createHeader('Uploaded Fonts:'));
                items.push(q.createDivder());
                items.push(q.createHeader('All Fonts:'));
                items.push(q.createDivder());
                for (var i = 0; i < initiallyLoadedFonts; i++)
                    items.push(q.createDropdownItem(i, allFonts[i].family).addClass('original'));
                items.push(q.createHeader('Load More ...')
                    .attr('data-value', i)
                    .addClass('loadmore')
                    .click(q.loadMore));
                for (; i < allFonts.length; i++)
                    items.push(q.createDropdownItem(i, allFonts[i].family)
                        .addClass('my-hidden')
                        .hide());

                //var $dropdownHeaders = $('#fontfamilydropdown .header');
                //var $dropdownDividers = $('#fontfamilydropdown .divider');

                $(dropdown).children('.menu').append(items);
/*
                $(dropdown).find('input').blur(function (e) {
                    $(this).val('');
                    $(this).trigger('keyup');

                });
*/
                $(dropdown).find('input').bind('keyup', $.proxy(function (e)
                    {
                        if (e.target.value.length > 0)
                        {
                            $('#fontfamilydropdown .header').hide();
                            $('#fontfamilydropdown .divider').hide();
                            setTimeout(function ()
                            {

                                if (true || !menu.children('.item').not('.my-hidden,.filtered')[0])
                                {
                                    var families = [];
                                    var hiddens = menu.children('.item.my-hidden').not('.filtered');
                                    hiddens.each(function (i, el)
                                    {
                                        //if ( $(el).text() == 'EaterEater')
                                        //    debugger;
                                        if (fontsCompletelyLoadedIdx.indexOf( Number($(el).attr('data-value'))) == -1  &&
                                            loadedFamilies.indexOf($(el).children().text()) == -1)
                                        families.push($(el).children().text());
                                        $(el).removeClass('my-hidden')
                                            .show();
                                        //if (i > 10) return false;
                                    });
                                    if (families.length)
                                        loadFontArray(families)
                                }
                            }, 100); // hate to use timoue but couldnt figure a better way
                        }
                        else
                        {
                            $('#fontfamilydropdown .header').show();
                            $('#fontfamilydropdown .divider').show();
                        }
                        var menu = $redactor.fontfacedropdown.menu;
                    }, this
                ))

                ;
                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(dropdown);
                this.fontfacedropdown.menu = $(dropdown).children('.menu');
                //<div wix-param="bgColor" wix-ctrl="ColorPicker" wix-options="{startWithColor: 'color-3'}"></div>

            },

            loadMore: function (e)
            {
                {
                    var fontsToLoad   = 10,
                        fontFamilyArr = [],
                        $selectedItem = $(e.toElement),
                        menu          = $selectedItem.parent(),
                        q             = $redactor.fontfacedropdown;

                    $selectedItem.remove();
                    console.log('load More');
                    var start = parseInt($selectedItem.attr('data-value'));
                    for (var i = start; i < (fontsToLoad + start); i++)
                    {
                        fontFamilyArr.push(allFonts[i].family)
                    }
                    $.each(fontFamilyArr, function (i, family)
                    {
                        menu.append(q.createDropdownItem(i + start, family));
                        if (i + 1 == fontsToLoad)
                        {
                            menu.append($selectedItem.attr('data-value', start + i).click(q.loadMore));
                            menu[0].scrollTop += menu.height();
                        }
                    });
                    q.changeDropdownFont(q.current);
                    loadFontArray(fontFamilyArr);
                }

            },

            onDropdownClick: function (value, text, $selectedItem)
            {
                text = $(text).text();
                upload.removeAllSelction();
                var q = $redactor.fontfacedropdown;
                var fontObj = $.grep(allFonts, function (obj)
                {
                    return obj.family == text;
                })[0];
                loadAllFontVariants(fontObj, null, null, null, value);
                $redactor.selection.restore();
                $redactor.inline.format('span', 'style', 'font-family:' + text + ';');
                $redactor.selection.removeMarkers();
                q.changeDropdownFont(text, value, $selectedItem);

            },

            changeDropdownFont: function (font, value, $selectedItem)
            {
                font = replaceAll(font, "'", "");
                var q = this.fontfacedropdown;
                q.current = font;
                upload.removeAllSelction();
                var menu = $('#fontfamilydropdown .menu');
                var indexinAllFonts = (value) ? value : getAllFontsIdxByFamily(font);
                if (indexinAllFonts >= upload.oldAllFonts)
                    upload.selectedItem(upload.fontContainer.children('[data-allfontsidx="' + indexinAllFonts + '"]'));
                menu.find('.selected').removeClass('selected');
                menu.find('.active').removeClass('active');
                if ($selectedItem)
                {
                    //$selectedItem.remove();
                    //var old$selectedItem = $selectedItem;
                    $($('.divider')[0]).remove();
                    $selectedItem = $selectedItem.clone();
                    var header = menu.find('.header')[0];
                    var selectedDivs = menu.find('.selected-fonts');

                    if (selectedDivs.map(function (i, el)
                        {
                            return $(el).attr('data-value')
                        }).get().indexOf(value + '') == -1)
                    {
                        if (selectedDivs.length == 5)
                        {    // if allready exits
                            selectedDivs[selectedDivs.length - 1].remove();
                        }
                        if ($(header).text() == 'Recent Fonts:')
                            $(header).after($selectedItem);

                        else
                        {
                            menu.prepend(q.createHeader('Recent Fonts:'));
                            $(header).after($selectedItem);
                        }
                        //debugger;
                        $selectedItem.addClass('active selected selected-fonts');
                    }
                    else
                    {
                        var selectedTomove = $('#fontfamilydropdown .menu div[data-value="' + value + '"].selected-fonts');
                        $(header).after(selectedTomove);
                        selectedTomove.addClass('active selected');
                    }
                    $(header).after(q.createDivder());
                }
                else
                {
                    //var fontFamilyLabel = $('<div class="fontfamilydropdownlabel">' + font + '</div>');

                    $('#fontfamilydropdown .menu div[data-value="' + indexinAllFonts + '"].selected-fonts').addClass('active selected');//.prepend(fontFamilyLabel);

                }
                this.fontWeightDropdown.populateList(indexinAllFonts);
                $('.redactor-toolbar #fontfamilydropdown .text').text(font);
            },

            createDropdownItem: function (index, fontFamily)
            {
                var fontFamilyLabel = $('<div class="fontfamilydropdownlabel">' + fontFamily + '</div>');

                return $('<div class="item" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                fontFamily +
                '</div>').prepend(fontFamilyLabel);

            },


            createSelectedDropdownItem: function (index, fontFamily)
            {
                return $('<div class="item selected-fonts" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                fontFamily +
                '</div>');
            },

            createHeader: function (text)
            {
                return $('<div class="header" data-value="header" style="font-family:"exo">' +
                text + '</div>');
            },

            dividers: 0,

            createDivder: function ()
            {
                return $('<div>').addClass('divider').attr('data-index', this.fontfacedropdown.dividers++);
            },

            createCustomDropdownItem: function (index, fontFamily, text)
            {
                return $('<div class="item" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                text +
                '</div>');
            }

        };
    };
})(jQuery);