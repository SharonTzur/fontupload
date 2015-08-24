/**
 * Created by admin on 4/26/2015.
 */
var func = {

    instance           : null,
    defaultCode        : '<SPAN style="font-family:Exo">Double-Click me to edit this text &amp; set font styling</SPAN>',

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
            isPaid         : {type: Boolean, default: false},
            created : Date,
            subscriptions: [{
                start: Date,
                end: Date
            }]
        });
        this.instance = mongoose.model('instance', instanceSchema);

        console.log('initialized');
    }
};

module.exports = func;