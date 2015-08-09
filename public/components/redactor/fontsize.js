if (!RedactorPlugins) var RedactorPlugins = {};

(function ($)
{
    RedactorPlugins.fontsize = function ()
    {
        return {
            $fontSizeLabel: null,
            size          : null,
            init          : function ()
            {
                var fonts = [8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 130, 150, 175, 200];
                var that = this;
                var dropdown = {};

                $.each(fonts, function (i, s)
                {
                    dropdown['s' + i] = {
                        title: s + 'px', func: function ()
                        {
                            that.fontsize.set(s);
                        }
                    };
                });

                dropdown.remove = {title: 'Remove Font Size', func: that.fontsize.reset};
                var button = this.button.add('fontsize', 'Change Font Size');

                this.$fontSizeLabel = $('<div id="font-size-label">14</div>');
                button.addClass('font-size-button');
                button.prepend(this.$fontSizeLabel);
                this.button.addDropdown(button, dropdown);

            },
            set           : function (size)
            {
                removeMarkers();
                this.size = size;
                this.inline.format('span', 'style', 'font-size: ' + size + 'px;');
            },
            reset         : function ()
            {
                this.inline.removeStyleRule('font-size');
                //this.inline.removeStyleRule('line-height');
            },

            updateFontSizeLabel: function (value)
            {
                this.$fontSizeLabel.empty().text(value.split('px')[0]);
            }

        };
    };
})(jQuery);
