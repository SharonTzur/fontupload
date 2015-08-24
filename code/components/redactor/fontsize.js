if (!RedactorPlugins) var RedactorPlugins = {};

(function ($)
{
    RedactorPlugins.fontsize = function ()
    {
        return {
            $label: null,
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

                this.$label = $('<div id="font-size-label">14</div>');

                var arrowContainer = $('<div class="toolBarArrows toolbarComp"></div>'),
                    upArrow        = $('<a href="#" class="re-icon re-increasefontsize redactor-btn-image toolbarArrow upArrow" rel="increasefontsize"></a>'),
                    downArrow      = $('<a href="#" class="re-icon re-decreasefontsize redactor-btn-image toolbarArrow downArrow" rel="decreasefontsize"></a>');

                upArrow.click({isUp: true}, this.fontsize.incSize);
                downArrow.click({isUp: false}, this.fontsize.incSize);

                arrowContainer.append(upArrow, downArrow);

                var wrapper = $('<div class="button-wrapper font-size"></div>');
                button.addClass('font-size-button');

                this.button.addDropdown(button, dropdown);
                var buttonEl = $('.re-icon.font-size-button');
                buttonEl.wrap(wrapper);
                var $buttonWrapper = $('.button-wrapper.font-size');
                button.append(this.$label);
                $buttonWrapper.append(arrowContainer);

            },
            set           : function (size)
            {
                //$redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                this.fontsize.size = size;
                this.inline.format('span', 'style', 'font-size: ' + size + 'px;');
            },
            reset         : function ()
            {
                this.inline.removeStyleRule('font-size');
                //this.inline.removeStyleRule('line-height');
            },

            updateFontSizeLabel: function (value)
            {

                var size;
                if (value.split)
                {
                    size = value.split('px')[0];
                }
                else
                {
                    size = value;
                }
                this.fontsize.size = size;
                this.$label.empty().text(size);
            },

            incSize: function (e)
            {

                var size = +this.fontsize.size;
                if (e.data.isUp)
                {
                    this.fontsize.set(++size);
                    this.fontsize.updateFontSizeLabel(size)
                }
                else
                {
                    this.fontsize.set(--size);
                    this.fontsize.updateFontSizeLabel(size)
                }

            }


        };
    };
})(jQuery);
