    //load JQUERY

    (function() {
        // Load the script
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(script);

        // Poll for jQuery to come into existance
        var checkReady = function(callback) {
            if (window.jQuery) {
                callback(jQuery);
            }
            else {
                window.setTimeout(function() { checkReady(callback); }, 100);
            }
        };

        // Start polling...
        checkReady(function($) {
            // Use $ here...
        });
    })();

function getFonts() {
    fonts = [];
    for (var i=0; i<$('.fontcard').length;i++) {

        function escapeRegExp (string)
        {
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
        function replaceAll (string, find, replace)
        {
            return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }

        var fontName = replaceAll($($('.fontcard .fontname strong span:first-child')[i]).html(), ' ', '+');

        var textArray = $('.fontcard .fontitem .identifier')[i].innerHTML.split(' ');

        var weight = textArray[1];

        var variantName = fontName + ':' + weight;

        if (textArray.length>2 && textArray[2] == 'Italic')
        variantName += 'i'


        fonts.push(variantName) }
    return '\n' + JSON.stringify(fonts) + ';\n';
}




