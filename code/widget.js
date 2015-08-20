/**
 * Created by TV on 5/6/2015.
 */
var ribbon = null;
var ribbonContainer = null;
var textBox = null;
function showRibbon()
{
    ribbon.show();
    ribbonContainer.addClass('textRibbon');
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

function loadUploadedFont(url, font, idx, callback)
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

function load(data)
{
    var successFunc = function (data, status, jqXHR)
    {
        {
            ribbonContainer = $('#ribbon-container');
            ribbon = $('#ribbon');
            textBox = $('#textBox');
            if (!data.paid && !data.isTrial)
                showRibbon();
            if (data.uploadedFonts)
            {
                $.each(data.uploadedFonts, function (i, font)
                {
                    var fontFamily = font.family = font.fileName.split('.')[0];
                    loadUploadedFont(font.url, fontFamily, null, function ()
                    {
                        loadedFonts.push(fontFamily);
                    });
                })
            }
            gotCode(data.code, data.uploadedFonts);
        }
    };
    if (ejs)
        successFunc(data);
    else
        $.ajax({
            type   : "POST",
            url    : SERVER_URL + "/load/",
            data   : {
                instanceId: instanceId || Wix.Utils.getIntanceId(),
                compId    : compId || Wix.Utils.getCompId()
            },
            success: function (response)
            {
                $('#textBox').html(response.code);
                successFunc(response)
            }

        });
}
function killDups(obj)
{
    if (Array.isArray(obj))
        obj = obj.filter(function (elem, pos)
        {
            return obj.indexOf(elem) == pos;
        });
    else
        for (var prop in obj)
        {
            obj[prop] = obj[prop].filter(function (elem, pos)
            {
                return obj[prop].indexOf(elem) == pos;
            });
        }
}

function gotCode(code, uploadedFonts)
{

    textBox.html(code);
    var fontObjArray = checkCodeForFonts($(code));
    killDups(fontObjArray);
    killDups(loadedFonts);
//
    if (!arraysEqual(loadedFonts, fontObjArray.fontsName))
    {

//                loadedFonts = loadedFonts.concat(fontObjArray.fontsName);
        for (var i = 0; i < fontObjArray.fontsObj.length; i++)
        {
            if (fontObjArray.fontsObj[i])
                loadAllFontVariants(fontObjArray.fontsObj[i], null, null, function (family)
                {
                    loadedFonts.push(family)
                }, null, fontObjArray.idx[i]);
            else
            {
                var font = getObj(uploadedFonts, fontObjArray.fontsName[i])[0];
                loadUploadedFont(font.url, font.family, null, function (family)
                {
                    loadedFonts.push(family);
                });
            }
        }
    }
}

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function (newSettings)
{
    console.log('Widget: New settings received: ' + JSON.stringify(newSettings));
    gotCode(newSettings.settings.code, newSettings.settings.uploadedFonts);
});


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

    return {idx: indexes, fontsObj: fontObjs, fontsName: fonts};
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
