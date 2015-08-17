/**
 * Created by TV on 4/15/2015.
 */
if (!RedactorPlugins) var RedactorPlugins = {};

(function ($)
{
    RedactorPlugins.fontBgColor = function ()
    {
        return {
            background     : null,
            init           : function ()
            {
                var $toolbar = $('ul#redactor-toolbar-0');
                var $el = $('<div id="fontBGColor" wix-ctrl="ColorPicker" wix-model="bgColor" wix-options="{startWithColor:\'#ffffff\'}"></div>');
                $toolbar.append('<span class="colorLabel">Background Color</span>', $el);

                Wix.UI.initializePlugin($el);
                Wix.UI.onChange('bgColor', this.fontBgColor.set);
                this.fontBgColor.background = this.$toolbar.find('#fontBGColor .color-box-inner');
            },
            set            : function (value, key)
            {
                this.selection.restore();
                this.inline.removeStyleRule('background-color');
                this.inline.format('span', 'style', 'background-color: ' + value.cssColor + ';');
                removeMarkers();
            },
            updateFontColor: function (value)
            {
                if (value != "rgba(0, 0, 0, 0)")
                    this.fontBgColor.background.css('background', value)

            },
            remove         : function (rule)
            {
                this.inline.removeStyleRule(rule);
            }
        };
    };
})(jQuery);