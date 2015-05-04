/**
 * Created by admin on 4/26/2015.
 */
var func = {

    widgetSettingsModel: null,
    uploadedFontsModel : null,
    defaultCode        : '<p style="font-family:Exo">Double-Click me to edit this text &amp; set font styling</p>',

    init: function (mongoose) {
        var Schema = mongoose.Schema;
        var widgetSettingsSchema = new Schema({
            code                   : {type: String, default: this.defaultCode},
            compId                 : String,
            instanceId             : String,
            categoryDisplaySettings: String,
            uploadedFonts          : [String]
        });
        this.widgetSettingsModel = mongoose.model('widgetsetting', widgetSettingsSchema);

        var uploadedFontsSchema = new Schema({
            instanceId   : String,
            url          : String,
            fileName     : String,
            uploadedFonts: String
        });
        this.uploadedFontsModel = mongoose.model('uploadedfont', uploadedFontsSchema);

        console.log('initialized');
    }
};

module.exports = func;