function refreshFontList()
{
    currentViewFonts = [];
    lastDisplayedIndex = 0;
    lastLoadedIndex = 0;
    currentViewDisplayed = 0;
    currentViewLoaded = 0;

    //region Filters
    Filters.filterOptions.isVariantMode = !(!Filters.filterOptions.slant.enabled
    && !Filters.filterOptions.width.enabled
    && !Filters.filterOptions.thickness.enabled);

    if (
        !Filters.filterOptions.isVariantMode
    )
    {
        if (widgetSettings.categoryDisplaySettings.All == "true")
        {
            currentViewFonts = allFonts;
        }
        else
        {
            for (var op in widgetSettings.categoryDisplaySettings)
            {
                if (widgetSettings.categoryDisplaySettings[op] == "true")
                    if (widgetSettings.categoryDisplaySettings[op] == "true")
                    {
                        if (window[op])
                            currentViewFonts = currentViewFonts.concat(window[op]);
                    }
            }
        }
    }
    else
    {
        if (Filters.filterOptions.isVariantMode)
        {
            for (var j = 0; j < currentViewVariantIndexes.length; j++)
            {
                currentViewFonts.push(allVariants[currentViewVariantIndexes[j]])
            }

        }
        else
        {
            for (var i = 0; i < currentViewVariantIndexes.length; i++)
            {
                currentViewFonts.push(allFonts[currentViewVariantIndexes[i]])
            }
        }
    }
    if (currentViewFonts.length > 0)
    {
        currentViewFonts.sort(function (a, b)
        {
            return a.family > b.family ? 1 : -1
        });
    }
    //endregion

    $(fontContainer).empty();
    if (currentViewFonts.length === 0)
    {
        $(fontContainer).html('<div class="noFontsFilteredLabel">Sorry, no fonts were found with the current filter. <a id="clearFiltersLink"> <br /><b> Click Here </b></a> to clear all search filters</div>');
        $('#clearFiltersLink').on('click', $.proxy(Filters.clearFilters, Filters));
    }
    else
    {
        displayFontsInBrowser();
        loadFonts()
    }
}

function displayFontsInBrowser(callback)
{
    var
        fonts                  = [],
        remainingFonts         = currentViewFonts.length - currentViewDisplayed,
        numberOfFontsToDisplay = Math.min(remainingFonts, fontsToAddOnScroll),
        text,
        variant,
        family,
        style,
        str,
        allFontsIdx,
        loadingClass;

    for (var i = lastDisplayedIndex; i < lastDisplayedIndex + numberOfFontsToDisplay; i++)
    {
        family = replaceAll(currentViewFonts[i].str.split(':')[0], '+', ' ');
        allFontsIdx = getAllFontsIdxByFamily(family);

        style = 'font-family:' + family + ';';
        if (Filters.filterOptions.isVariantMode)
        {
            variant = currentViewFonts[i].str.split(':')[1];
        }
        else
        {
            variant = '400';
        }

        str = replaceAll((currentViewFonts[i].family || currentViewFonts[i].name), ' ', '+') + ':' + variant;
        if (loadedFontStrings.indexOf(str) === -1)
        {
            loadingClass = 'loading';
            //text = '';
            text = (stripHtml(widgetSettings.code).substring(0, 50) || "Your Text Goes Here");
        }
        else
        {
            loadingClass = '';
            text = stripHtml(widgetSettings.code).substring(0, 50);
        }
        if (Filters.filterOptions.isVariantMode && currentViewFonts[i].str[currentViewFonts[i].str.length - 1] === 'i') style += 'font-style:italic;';
        var $fontDiv = $('<div class="fontdiv noselect " data-family="' + family + '" data-allfontsidx="' + allFontsIdx + '" style="' + style + '">' +
            '</div>');
        var label = $('<a class="ui ribbon label" data-variant="' + variant + '">' + (currentViewFonts[i].name || family) + '</a>');
        $fontDiv.append(label);
        var $textPreview = $('' +
            '<div class="textPreview font-unselected" data-variant="' + variant + '" data-allfontsidx="' + allFontsIdx + '" data-family="' + family + '"></div>');
        var $text = $('<div class="text ' + loadingClass + '" data-variant="' + variant + '">' + text + '</div>');
        $textPreview.append($text);


        var toggleFontVariantPreview = function (e)
        {
            var me = $(this);
            if (me.hasClass('open'))
            {
                if (me.find('.variantContainer').hasClass('font-variant-selected'))
                {
                    me.addClass('font-selected');
                }

                $(this).removeClass('open');
                me.find('.variantPreview').hide();
                me.find('.text').show();
            }
            else
            {
                me.addClass('open');
                var idx        = me.data('allfontsidx'),
                    allVars    = allFonts[idx].variants,
                    fontFamily = me.data('family'),
                    $loader    = $('<div class="ui active loader fontVariantLoader" style="height:100px"></div>'),
                    line,
                    $variantContainer,
                    $variantSelectButton,
                    title,
                    fontStyle,
                    fontWeight;
                if (!me.children('.variantPreview').length)
                {
                    me.append($loader);
                }
                me.children('.text').hide();

                if (allFonts[idx].italic)
                {
                    var italicVars = [];
                    for (var k = 0; k < allVars.length; k++)
                    {
                        italicVars.push(allVars[k] + 'i')
                    }
                    allVars = allVars.concat(italicVars);
                }

                if (!me.children('.variantPreview').length)
                {
                    var $variantPreview = $('<div class="variantPreview"></div>');
                    loadAllFontVariants(allFonts[me.data('allfontsidx')], null, null, function ()
                    {
                        for (var j = 0; j < allVars.length; j++)
                        {
                            fontStyle = (allVars[j].indexOf('i') == -1 ? 'normal' : 'italic');
                            var fontStyleDisplayName = (fontStyle == 'italic' ? 'italic' : '');
                            fontWeight = allVars[j].split('i')[0];
                            $variantContainer = $('<div class="variantSelectArea variantContainer"></div>').attr('data-family', fontFamily).attr('data-weight', fontWeight).attr('data-style', fontStyle)
                                .click(onFontVariantSelected);
                            title = $('<div class="variantSelectArea variantPreviewTitle">' + ' ' + getFontVariantDisplayName(fontWeight) + ' ' + fontStyleDisplayName + '</div>');
                            $variantSelectButton = $('<div class="variantSelectArea fontSelectButton variantSelectButton">select</div>');
                            line = $('<div class="variantSelectArea variantPreviewLine">' + text + '</div>')
                                .attr('style', 'font-family: \'' + fontFamily + '\' !important')
                                .css('font-style', fontStyle)
                                .css('font-weight', fontWeight);
                            $variantPreview.append($variantContainer.append(title, line, $variantSelectButton));
                            if (me.hasClass('font-selected') && fontWeight == '400' && fontStyle == "normal")
                            {
                                me.removeClass('font-selected');
                                $.proxy(onFontVariantSelected, $variantContainer)()
                            }

                        }
                        $loader.remove();
                        me.prepend($variantPreview);
                    }, this, idx);

                }
                else
                {
                    me.children('.variantPreview').show();
                }
            }
        };

        var $browseVariants = $('<div class="magnify browseVariants" style="" data-allfontsidx="' + allFontsIdx + '" id="browseVariants-' + family + '"></div>')
            .click($.proxy(toggleFontVariantPreview, $textPreview));
        //.mouseover($.proxy(toggleFontVariantPreview, $textPreview));

        $textPreview.append($browseVariants)
            .click(onFontSelected);

        var $lowerButtons = $('<div class="fontSelectButton lowerButtons" data-variant="' + variant + '" data-fontIndex = "' + i + '" data-family="' + family + '">Select This Font<i class="arrow right icon"></i></div>')
            .click($.proxy(onFontSelected, $textPreview));

        $fontDiv.append($textPreview, $lowerButtons);
        var container = $(fontContainer);
        container.append($fontDiv);
        fonts.push(family);
    }
    lastDisplayedIndex += numberOfFontsToDisplay;
    currentViewDisplayed += numberOfFontsToDisplay;

    if (lastDisplayedIndex < currentViewFonts.length)
    {
        var $loadMoreButton = $('<div class="ui primary button fontdiv textPreview loadMoreButton"><i class="refresh icon"></i>Load more fonts...</div>')
            .click(onLoadMoreClicked);
        container.append($loadMoreButton);
    }

    if (callback)
        callback();
}

function onLoadMoreClicked()
{
    $(this).addClass('ui loading');
    setTimeout((function ()
    {
        loadFonts(function ()
        {
            $(this).remove();
            displayFontsInBrowser();
        }, this);

    }.bind(this)), 10);
}

function loadFonts(callback, scope)
{
    function progressInc(loaded, max)
    {
        var progressBar = $('#progress-bar');
        progressBar.progress({percent: (loaded / max) * 100});
        $('#number-of-fonts-loaded').html(loaded);

        if (loaded >= max)
        {
            setTimeout(function ()
            {
                progressBar.parent().fadeOut('slow');
                $('.showme').fadeIn('slow');
                $('#top-header').fadeIn('slow').removeClass('loading');
            }, 200)
        }
    }

    var strings             = [],
        remainingFonts      = currentViewFonts.length - currentViewLoaded,
        numberOfFontsToLoad = Math.min(remainingFonts, fontsToAddOnScroll);

    for (var i = lastLoadedIndex; i < lastLoadedIndex + numberOfFontsToLoad; i++)
    {
        if (loadedFontStrings.indexOf(currentViewFonts[i].str) === -1)
        {
            if (Filters.filterOptions.isVariantMode)
            {
                strings.push((currentViewFonts[i].str));
                loadedFontStrings.push(currentViewFonts[i].str);
            }
            else
            {
                var str = replaceAll(currentViewFonts[i].family, ' ', '+') + ':' + '400';
                strings.push(str);
                loadedFontStrings.push(str);
            }
        }
    }
    lastLoadedIndex += numberOfFontsToLoad;
    currentViewLoaded += numberOfFontsToLoad;
    if (strings.length)
    {
        loadFontArray(strings,
            function (family, fvd)                 //active
            {
                if (callback)
                    callback.call(scope);
            },
            function (family, fvd)                 //fontactive
            {
                if (fontsLoaded < numberOfFontsToLoad)
                    progressInc(++fontsLoaded, numberOfFontsToLoad);
            },
            function (family, fvd)                 //fontinactive
            {
                if (fontsLoaded < numberOfFontsToLoad)
                    progressInc(++fontsLoaded, numberOfFontsToLoad);

            },
            function (family, fvd)                 //fontloading
            {
            }
        )
    }
}

function loadFontArray(strings, activeCallback, fontactiveCallback, fontinactiveCallback, fontloadingCallback)
{
    WebFont.load({
        google      : {
            families: strings
            //text    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdedfghijklnmopqrstuvwxyz!?!@#$%^&*()_-=~"][{}":>?;,.//\\\''
            //text    :stripHtml(widgetSettings.code).substring(0,50),
            //testStrings: {
            //    'My Font': 'abc'
            //}

        },
        active      : function ()
        {
            $("html").removeClass();
            if (activeCallback)
                activeCallback();
        },
        fontactive  : function (family, fvd)
        {
            loadedFamilies.addToSet(family);
            if (fontactiveCallback)
                fontactiveCallback();
        },
        fontinactive: function (family, fvd)
        {
            console.warn('Font not loaded : ' + family);

            if (fontinactiveCallback)
                fontinactiveCallback();
        },
        fontloading : function (family, fvd)
        {
            if (fontloadingCallback)
                fontloadingCallback();
        }
    });
}

function onFontVariantSelected()
{
    upload.removeAllSelction();
    var me     = $(this),
        family = me.data('family'),
        weight = me.data('weight'),
        style  = me.data('style');

    widgetSettings.font = $.grep(allFonts, function (obj)
    {
        return obj.family == widgetSettings.family;
    })[0];

    $('.variantSelectButton').text('select');
    $('.variantContainer').removeClass('font-variant-selected');
    $('.textPreview').removeClass('font-selected');

    $('.lowerButtons.fontSelectButton')
        .removeClass('active')
        .html('Select This Font<i class="arrow circle right icon"></i>');

    var fontdiv = me.parents('.fontdiv');
    fontdiv.children('.lowerButtons.fontSelectButton').addClass('active');
    fontdiv.children('.lowerButtons.fontSelectButton')
        .html('Selected  <i class="check icon"></i>');

    me.addClass('font-variant-selected').find('.variantSelectButton').text('selected');
    $redactor.selection.selectAll();
    $redactor.fontfacedropdown.reset();


    var elems = [];
    if ($redactor.selection.getInlines())
    {
        elems = $redactor.selection.getInlines().concat($redactor.selection.getBlocks());
    }

    for (var i = 0; i < elems.length; i++)
    {
        var $el = $(elems[i]);
        $redactor.selection.selectElement($el);
        $redactor.inline.removeStyleRule('font-family');
        $redactor.inline.removeStyleRule('font-weight');
        $redactor.inline.removeStyleRule('font-style');

        if ($el.prop("tagName") == 'p')
        {
            $el.css('font-family', '');
        }
    }

    $redactor.fontfacedropdown.reset();
    $redactor.$editor.children().css('font-family', '"' + widgetSettings.font.family + '"').css('font-weight', '"' + $(this).data('weight') + '"').css('font-style', '"' + style + '"');
    //$redactor.inline.format('span', 'style', 'font-family:\'' + family + '\';' + 'font-weight:' + weight + ';' + 'font-style:' + style + ';');
    $redactor.observe.checkWidgets($redactor.$editor.children());
    refreshWidget();
}

function onFontSelected(e)
{
    upload.removeAllSelction();
    var style = 'normal',
        me    = $(this),
        idx   = $(this).data('allfontsidx');
    if ($(e.target).hasClass('browseVariants') || $(e.target).hasClass('variantSelectArea'))
        return;
    $('.textPreview').removeClass('font-selected');
    $('.variantContainer').removeClass('font-variant-selected').find('.variantSelectButton').text('select');
    if (me.hasClass('open'))
    {
        $('.variantSelectButton').text('select');
        me.find('.variantContainer[data-weight="400"][data-style="normal"]')
            .addClass('font-variant-selected').find('.variantSelectButton').text('selected');
    }
    else
    {
        me.addClass('font-selected');
    }
    $('.lowerButtons.fontSelectButton').removeClass('active').html('Select This Font<i class="arrow right icon"></i>');

    me.siblings('.lowerButtons.fontSelectButton')
        .addClass('active')
        .html('Selected <i class="check icon"></i>');
    widgetSettings.family = $(this).parent().attr('data-family') || $(this).attr('data-family');
    widgetSettings.font = $.grep(allFonts, function (obj)
    {
        return obj.family == widgetSettings.family;
    })[0];

    if ($(this).data('variant'))
    {
        widgetSettings.variant = $(this).data('variant').toString();
    }
    else if (widgetSettings.font && Array.isArray(widgetSettings.font.variants))
    {
        widgetSettings.variant = widgetSettings.font.variants[0];

    }

    loadAllFontVariants(widgetSettings.font, null, null, null, null, idx);

    if (Filters.filterOptions.isVariantMode)
    {
        widgetSettings.weight = $(this).data('variant');
        if ($(this).data('variant').indexOf('i') != -1)
            style = 'italic'
    }
    else
    {
        if (widgetSettings.font.variants.indexOf(widgetSettings.weight) == -1)
            widgetSettings.weight = '400';
    }

    $redactor.selection.selectAll();
    $redactor.inline.removeStyleRule('font-family');

    var elems = [];
    if ($redactor.selection.getInlines())
    {
        elems = $redactor.selection.getInlines().concat($redactor.selection.getBlocks());
    }

    for (var i = 0; i < elems.length; i++)
    {
        var $el = $(elems[i]);
        $redactor.selection.selectElement($el);
        $redactor.inline.removeStyleRule('font-family');
        if ($el.prop("tagName") == 'p')
        {
            $el.css('font-family', '');
        }
    }

    $redactor.fontfacedropdown.reset();
    $redactor.$editor.children().css('font-family', '"' + widgetSettings.font.family + '"');
    $redactor.$editor.children().css('font-weight', '"' + widgetSettings.font.weight + '"');
    $redactor.$editor.children().css('font-style', '"' + style + '"');

    $redactor.observe.checkWidgets($redactor.$editor.children());
    refreshWidget();

}

function loadAllFontVariants(fontObj, callback, scope, activeCallback, activeScope, idx)
{
    if (fontObj.str == 'Uploaded')
    {
        upload.fontContainer.children('[data-allfontsidx="' + idx + '"]');
        //upload

        return;
    }
    if (fontsCompletelyLoadedIdx.indexOf(idx) === -1)
    {
        WebFont.load({
            google      : {
                families: [fontObj.str]
            },
            active      : function ()
            {
                if (activeCallback && activeScope)
                    activeCallback.call(activeScope);
                if (activeCallback && !activeScope)
                    activeCallback(this.google.families[0].split(":")[0]);
                fontsCompletelyLoadedIdx.push(idx);

            },
            fontactive  : function (familyName, fvd)
            {
                //console.log('Font completely loaded : '  + familyName + ':' + fvd);
                if (callback && scope)
                    callback.call(scope);
            },
            fontinactive: function (familyName, fvd)
            {
                if (callback && scope)
                    callback.call(scope);

            }
        });
    }
    else
    {
        if (activeCallback && activeScope)
            activeCallback.call(activeScope);
    }


}

function buildAllFontsArray()
{
    categories = Object.keys(completeFontCatJSON);
    categories.push("All");

    for (var i = 0; i < categories.length; i++)
    {
        if (completeFontCatJSON[categories[i]])
        {
            allFonts = allFonts.concat(completeFontCatJSON[categories[i]].fonts);
            window[categories[i]] = completeFontCatJSON[categories[i]].fonts;
        }
    }
    allFonts.sort(function (a, b)
    {
        return a.family > b.family ? 1 : -1
    });
    loadFonts();
}

function checkCodeForFonts($codeRecieved, loadedFonts)
{
    if (typeof loadedFonts == 'undefined')
        loadedFonts = [];
    var myPush = function (arr, font)
    {
        if (font && loadedFonts.indexOf(font) == -1)
            arr.push(replaceAll(font, "'", ""));
    };
    var fonts           = [],
        indexes         = [],
        fontObjs        = [],
        otherFontsSpans = $codeRecieved.find('span');

    myPush(fonts, $codeRecieved.css('font-family'));

    for (var i = 0; i < otherFontsSpans.length; i++)
    {
        myPush(fonts, $(otherFontsSpans[i]).css('font-family'));
    }
    //console.log(fonts);
    for (i = 0; i < fonts.length; i++)
    {
        fontObjs.push($.grep(allFonts, function (obj)
        {
            return obj.family == fonts[i];
        })[0]);
    }
    for (i = 0; i < fonts.length; i++)
    {
        var tmpIndex = getAllFontsIdxByFamily(fonts[i]);
        //if (tmpIndex > initiallyLoadedFonts)
        indexes.push(tmpIndex);
    }
    //indexes = (!indexes[0]) ? false : indexes;

    var dropdownMenu = $('#fontfamilydropdown .menu'),
        q            = $redactor.fontfacedropdown,
        recentFontsHeader;

    if (!dropdownMenu.find('.recent-fonts-header').length)
    {
        recentFontsHeader = q.createHeader('Recent Fonts:', 'recent-fonts-header');
        dropdownMenu.append(recentFontsHeader);
    }
    else
    {
        recentFontsHeader = dropdownMenu.find('.recent-fonts-header');
    }
    dropdownMenu.prepend(q.createDivder());

    if (indexes && dropdownMenu[0])
    {
        var q = $redactor.fontfacedropdown;
        for (i = 0; i < indexes.length; i++)
        {
            dropdownMenu.prepend(q.createDropdownItem(indexes[i], allFonts[indexes[i]].family).addClass('recent'));
        }
        dropdownMenu.prepend(recentFontsHeader);
    }

    return {idx: indexes, fontsObj: fontObjs, fontsName: fonts};
    //return (!fontObjs[0]) ? false : fontObjs
}
