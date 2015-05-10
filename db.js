/**
 * Created by admin on 4/26/2015.
 */
var func = {

    instance           : null,
    defaultCode        : '<p style="font-family:Exo">Double-Click me to edit this text &amp; set font styling</p>',

    init: function (mongoose) {
        var Schema = mongoose.Schema;

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

        console.log('initialized');
    }
};

module.exports = func;