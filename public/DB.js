
function refreshWidget()
{
    //console.log("Settings : refreshing widget with settings : ");
    //console.log(JSON.stringify(widgetSettings));
    saveSettings({data: {published: false}});
    Wix.Settings.triggerSettingsUpdatedEvent({settings: widgetSettings}, Wix.Utils.getOrigCompId());
}

function saveSettings(eventData)
{
    //console.log('SETTINGS : saving settings :' + JSON.stringify(widgetSettings));
    //encodeTextForURL( stripHtml(windgetSettings.code.get()));
    $.ajax({
        type   : "POST",
        url    : SERVER_URL + "/save",
        data   : {settings: widgetSettings},
        success: function (data, status, jqXHR)
        {
            {
                //console.log('save status: ' + status);
            }
        }
    })
}

function loadSettings(callbacks)
{
    $.ajax({
        type   : "POST",
        url    : SERVER_URL + "/load/",
        data   : {
            instanceId: instanceId,
            compId    : compId
        },
        success: function (data, status, jqXHR)
        {
            {
                widgetSettings = (data.p[0] || data.p);
                widgetSettings.categoryDisplaySettings = {
                    All        : "true",
                    Serif      : "false",
                    SansSerif  : "false",
                    Monospace  : "false",
                    Handwriting: "false",
                    Display    : "false"
                };
                //console.log('Settings : load status: ' + status + '. Data :' + JSON.stringify(widgetSettings));
                bindEvents();
                refreshUI();
                refreshFontList();
                console.log('the list is: ' + data.list);
                if (data.list) {
                    if (data.list[0])
                        upload.initList(data.list);
                    else
                        upload.createNoUpladedFonts();
                }
                else
                    upload.createNoUpladedFonts();
                var fontObjArray = checkCodeForFonts ($(data.p.code));
                for (var i = 0; i < fontObjArray.fontsObj.length; i++) {
                        loadAllFontVariants(fontObjArray.fontsObj[i],null,null,null,null, fontObjArray.idx[i]);
                }
/*
                if (fontObjArray)
                    $.each(fontObjArray.fontObj, function (i, fontObj) {
                        loadAllFontVariants(fontObj)
                    });
*/
            }
        }
    })
}