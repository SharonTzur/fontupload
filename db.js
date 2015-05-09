/**
 * Created by admin on 4/26/2015.
 */
var func = {

    widgetSettingsModel: null,
    instance           : null,
    uploadedFontsModel : null,
    paidModel          : null,
    defaultCode        : '<p style="font-family:Exo">Double-Click me to edit this text &amp; set font styling</p>',

    init: function (mongoose) {
        var Schema = mongoose.Schema;
        var widgetSettingsSchema = new Schema({
            code                   : {type: String, default: this.defaultCode},
            compId                 : String,
            instanceId             : String,
            categoryDisplaySettings: String,
            uploadedFonts          : [String],
            paid                   : {type: Schema.Types.ObjectId, ref: 'payment'}
        });
        this.widgetSettingsModel = mongoose.model('widgetsetting', widgetSettingsSchema);

        var instanceSchema = new Schema({
            _id          : String,
            comp         : [{
                _id                    : String,
                code                   : {type: String, default: this.defaultCode},
                categoryDisplaySettings: String
            }],
            uploadedFonts: [{
                url     : String,
                fileName: String
            }],
            paid         : {type: Boolean, default: false}
        });
        this.instance = mongoose.model('instance', instanceSchema);

        var uploadedFontsSchema = new Schema({
            instanceId   : String,
            url          : String,
            fileName     : String,
            uploadedFonts: String
        });
        this.uploadedFontsModel = mongoose.model('uploadedfont', uploadedFontsSchema);

        var paidSchema = new Schema({
            instanceId: String,
            paid      : {type: Boolean, default: false}
        });
        this.paidModel = mongoose.model('payment', paidSchema);

        console.log('initialized');
    }
};

module.exports = func;