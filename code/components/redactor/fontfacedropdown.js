(function ($)
{
    RedactorPlugins.fontfacedropdown = function ()
    {
        return {
            input  : null,
            current: null,
            menu   : null,

            init: function ()
            {
                var searchDivStr =
                        '<div id="dropdownSearchFontsInput" class="ui icon search input">' +
                        '<i class="search icon"></i>' +
                        '<input name="search" placeholder="Search fonts..." type="text">' +
                        '</div>';

                var dropdown = $(
                    '<div id = "fontfamilydropdown" class="ui anyfontdropdown floating dropdown labeled icon button">' +
                    '<div class="default text">' +
                    'Select font' +
                    '</div>' +
                        //'<input name="hidden-field" type="hidden">' +
                    '<div class="menu">' +
                    //searchDivStr +
                    '</div>' +
                    '<i class="fonticon icon"></i>' +
                    '</div>'
                )
                    .dropdown('setting', 'transition', 'slide down')
                    .dropdown({
                        onChange: this.fontfacedropdown.onDropdownClick,
                        onHide  : this.fontfacedropdown.resetSearch
                    }
                )
                    //.popup('setting', 'content', 'Search and select fonts')
                ;
                var q     = this.fontfacedropdown,
                    items = [];
                q.menu = $(dropdown).children('.menu');

                //items.push(q.createDivder());
                items.push(q.createHeader('Uploaded Fonts:'));
                items.push(q.createDivder());
                items.push(q.createHeader('All Fonts:'));
                items.push(q.createDivder());
                for (var i = 0; i < initiallyLoadedFonts; i++)
                    items.push(q.createDropdownItem(i, allFonts[i].family));
                items.push(q.createLoadMoreButton()
                    .attr('data-value', i)
                    .addClass('loadmore')
                    .click(q.loadMore));

                for (; i < allFonts.length; i++)
                    items.push(q.createDropdownItem(i, allFonts[i].family)
                        .removeClass('original')
                        .addClass('my-hidden')
                        .hide());

                q.menu.append(items);
                //$(dropdown).find('input').bind('keyup', $.proxy(q.search, this));
                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(dropdown);
                dropdown.click(function (e)
                {
                    if ($(e.target).parents('.loadmore').length || $(e.target).hasClass('loadmore')) return;
                    q.menu.scrollTop(0)
                });

            },

            search: function (e)
            {
                if (e.target.value.length > 0)
                {
                    var menu = $redactor.fontfacedropdown.menu;
                    menu.children('.header').hide();
                    menu.children('.divider').hide();
                    menu.children('.uploaded').hide();
                    menu.children('.recent').hide();
                    setTimeout(function ()
                    {
                        var families = [];
                        var hiddens = menu.children('.item.my-hidden').not('.filtered');
                        menu.children('.filtered').css('display', '');
                        hiddens.each(function (i, el)
                        {
                            // only push fonts that werent loaded
                            if (fontsCompletelyLoadedIdx.indexOf(Number($(el).attr('data-value'))) == -1 &&
                                loadedFamilies.indexOf($(el).children().text()) == -1)
                                families.push($(el).children().text());
                            $(el).removeClass('my-hidden')
                                .show();
                        });
                        if (families.length)
                            loadFontArray(families);
                    }, 100); // hate to use timeout but couldnt figure a better way
                }
                else
                    this.fontfacedropdown.resetSearch();
            },

            resetSearch: function (e)
            {
                var menu = $redactor.fontfacedropdown.menu;
                menu.children('.filtered').removeClass('filtered');
                menu.children('.original').css('display', '');
                menu.children('.item').not('.original').hide().removeClass('my-hidden').addClass('my-hidden');
                $('#fontfamilydropdown input').val('');
                $('#fontfamilydropdown .header').show();
                $('#fontfamilydropdown .divider').show();

            },

            loadMore: function (e)
            {
                {
                    var fontsToLoad   = 30,
                        fontFamilyArr = [],
                        $selectedItem = $(e.toElement),
                        menu          = $selectedItem.parents('.menu'),
                        q             = $redactor.fontfacedropdown;

                    if ($selectedItem.hasClass('button')) $selectedItem = $selectedItem.parent();
                    $selectedItem.remove();
                    var start = parseInt($selectedItem.attr('data-value'));
                    var endIndex = Math.min((fontsToLoad + start), allFonts.length);
                    for (var i = start; i < ( endIndex); i++)
                    {
                        fontFamilyArr.push(allFonts[i].family)
                    }
                    $.each(fontFamilyArr, function (i, family)
                    {
                        menu.append(q.createDropdownItem(i + start, family));
                        if (i + 1 == fontsToLoad)
                        {
                            menu.append($selectedItem.attr('data-value', start + i).click(q.loadMore));
                            //menu[0].scrollTop += menu.height();
                        }
                    });
                    q.changeDropdownFont(q.current);
                    loadFontArray(fontFamilyArr);
                }
            },

            onDropdownClick: function (index, text, $selectedItem)
            {
                text = $(text).text();
                upload.removeAllSelction();
                var q = $redactor.fontfacedropdown;
                var fontObj = $.grep(allFonts, function (obj)
                {
                    return obj.family == text;
                })[0];
                if (text.indexOf('\'') == -1 || text.indexOf('\"') == -1)
                {
                    text = "'" + text + "'";
                }
                loadAllFontVariants(fontObj, null, null, null, index);

                //$redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');

                //this.inline.removeStyleRule('font-family');
                $redactor.inline.format('span', 'style', 'font-family:' + text + ';');

                q.changeDropdownFont(text, index, $selectedItem);
            },

            changeDropdownFont: function (font, index, $selectedItem)
            {
                if (font)
                {
                    font = replaceAll(font, "'", "");
                }
                var q = this.fontfacedropdown;
                q.current = font;
                upload.removeAllSelction();
                var menu = $('#fontfamilydropdown .menu');
                var indexinAllFonts = (index) ? index : getAllFontsIdxByFamily(font);
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
                    var $recentFontsHeader = $(menu.find('.recent-fonts-header')[0]);
                    var selectedDivs = menu.find('.recent');

                    if (selectedDivs.map(function (i, el)
                        {
                            return $(el).attr('data-value')
                        }).get().indexOf(index + '') == -1)
                    {
                        if (selectedDivs.length == 5)
                        {    // if already exists
                            selectedDivs[selectedDivs.length - 1].remove();
                        }
                        if ($recentFontsHeader.length)
                            $recentFontsHeader.after($selectedItem.addClass('recent original'));
                        else
                        {
                            $recentFontsHeader = q.createHeader('Recent Fonts:', 'recent-fonts-header');
                            menu.append($recentFontsHeader);
                            $recentFontsHeader.after($selectedItem.addClass('recent original'));
                        }
                        $selectedItem.addClass('active selected selected-fonts');
                    }
                    else
                    {
                        var selectedTomove = $('#fontfamilydropdown .menu div[data-value="' + index + '"].selected-fonts');
                        $recentFontsHeader.after(selectedTomove);
                        selectedTomove.addClass('active selected');
                    }
                    $recentFontsHeader.after(q.createDivder());
                }
                else
                {
                    $('#fontfamilydropdown .menu div[data-value="' + indexinAllFonts + '"].selected-fonts').addClass('active selected');
                }
                this.fontWeightDropdown.populateList(indexinAllFonts);
                $('.redactor-toolbar #fontfamilydropdown .text').text(font);
            },

            createDropdownItem: function (index, fontFamily)
            {
                var fontFamilyLabel = $('<div class="fontfamilydropdownlabel">' + fontFamily + '</div>');
                return $('<div class="item original" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                    fontFamily +
                    '</div>').prepend(fontFamilyLabel);

            },

            createSelectedDropdownItem: function (index, fontFamily)
            {
                return $('<div class="item selected-fonts" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                    fontFamily +
                    '</div>');
            },

            createHeader: function (text, className)
            {

                var $header = $('<div class="header" data-value="header" style="font-family:"exo">' +
                    text + '</div>');
                if (className) $header.addClass(className);
                return $header;
            },

            dividers: 0,

            createLoadMoreButton: function ()
            {
                return $(
                    '<div class="header" data-value="header" style="font-family:"exo">' +
                    '<div class="ui primary button">' +
                    '<i class="refresh icon"></i> Load More Fonts' +
                    '</div>' +
                    '</div>');
            },

            createDivder: function ()
            {
                return $('<div>').addClass('divider').attr('data-index', this.fontfacedropdown.dividers++);
            },

            createCustomDropdownItem: function (index, fontFamily, text)
            {
                return $('<div class="item" data-value="' + index + '" style="font-family:' + fontFamily + ' ">' +
                    text +
                    '</div>');
            },
            reset         : function ()
            {
                this.inline.removeStyleRule('font-family');
            }

        };
    };
})(jQuery);