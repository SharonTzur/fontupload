/**
 * Created by TV on 4/15/2015.
 */
if (!RedactorPlugins) var RedactorPlugins = {};

(function($)
{
    RedactorPlugins.fontBgColor = function()
    {
        return {
            background : null,
            init: function()
            {
                var $toolbar = $('ul#redactor-toolbar-0');
                var $el = $('<div id="fontBGColor" wix-ctrl="ColorPicker" wix-model="bgColor" wix-options="{startWithColor:\'#ffffff\'}"></div>');
                $toolbar.append('<span class="colorLabel">Background Color</span>',$el);

                Wix.UI.initializePlugin($el);
                Wix.UI.onChange('bgColor', this.fontBgColor.set);
                this.fontBgColor.background = this.$toolbar.find('#bg .color-box-inner');
            },
            set: function(value, key)
            {
                this.selection.restore();
                if (this.selection.getHtml())
                    this.inline.format('span', 'style', 'background-color: ' + value.cssColor + ';');
                else
                    this.inline.format('span', 'style', 'background-color: ' + value.cssColor + ';display:inline-block;');
            },
            updateFontColor: function (value) {
                this.fontBgColor.background.css('background', value)

            },
            remove: function(rule)
            {
                this.inline.removeStyleRule(rule);
            }
        };
    };
})(jQuery);

/*
 var colors = [
 '#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
 '#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
 '#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694',
 '#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#b7dde8', '#fac08f', '#f2c314',
 '#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100',
 '#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b',  '#974806', '#7f6000'
 ];

 var buttons = ['fontcolor', 'backcolor'];

 for (var i = 0; i < 2; i++)
 {
 var name = buttons[i];

 var button = this.button.add(name, this.lang.get(name));
 var $dropdown = this.button.addDropdown(button);

 $dropdown.width(242);
 this.fontcolor.buildPicker($dropdown, name, colors);

 }
 */
