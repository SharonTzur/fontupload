/**
 * Created by TV on 5/6/2015.
 */
function load(data) {

    var successFunc = function (data, status, jqXHR) {
        {
            console.log('WIDGET: Loaded Data: ' + JSON.stringify(data));
//					refreshLocalWidget(data, $('#textBox'));
//					refreshLocalWidget(data, $('.redactor-editor'));
            gotCode(data.p.code);
            if (data.list)
                $.each(data.list, function (i, font) {
                    var fontFamily = font.fileName.split('.')[0];
                    upload.loadUploadedFont(font.url, fontFamily, null, function () {
                        loadedFonts.push(fontFamily);
                    });
                })
        }
    };
    if (ejs)
        successFunc(data);
    else
        $.ajax({
            type   : "POST",
            url    : SERVER_URL + "/load/",
            data   : {
                instanceId: instanceId,
                compId    : compId
            },
            success: successFunc
        });
}
function killDups(obj) {
    if (Array.isArray(obj))
        obj = obj.filter(function (elem, pos) {
            return obj.indexOf(elem) == pos;
        });
    else
        for (var prop in obj) {
            obj[prop] = obj[prop].filter(function (elem, pos) {
                return obj[prop].indexOf(elem) == pos;
            });
        }
}

function gotCode(code, uploadedFonts) {

    $('#textBox').html(code);
    var fontObjArray = checkCodeForFonts($(code));
    killDups(fontObjArray);
    killDups(loadedFonts);
//
    if (!arraysEqual(loadedFonts, fontObjArray.fontsName)) {

//                loadedFonts = loadedFonts.concat(fontObjArray.fontsName);
        for (var i = 0; i < fontObjArray.fontsObj.length; i++) {
            if (fontObjArray.fontsObj[i])
                loadAllFontVariants(fontObjArray.fontsObj[i], null, null, function (family) {
                    loadedFonts.push(family)
                }, null, fontObjArray.idx[i]);
            else {
                var font = getObj(uploadedFonts, fontObjArray.fontsName[i])[0];
                upload.loadUploadedFont(font.url, font.family, null, function (family) {
                    loadedFonts.push(family);
                });
            }
        }
    }

}

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function (newSettings) {
    console.log('Widget: New settings received: ' + JSON.stringify(newSettings));
    gotCode(newSettings.settings.code, newSettings.settings.uploadedFonts);
});
