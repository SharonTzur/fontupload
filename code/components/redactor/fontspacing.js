if (!RedactorPlugins) var RedactorPlugins = {};

(function ($)
{
    RedactorPlugins.fontspacing = function ()
    {
        return {
            $fontSpacingLabel: null,
            size          : null,
            init          : function ()
            {
                var spaces = [-8, -4, -2,-1,-0.5,-0.2, 0, 0.1, 0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.5,4,5, 6, 8, 10, 13];
                var that = this;
                var dropdown = {};

                $.each(spaces, function (i, s)
                {
                    dropdown['s' + i] = {
                        title: s + 'px', func: function ()
                        {
                            that.fontspacing.set(s);
                        }
                    };
                });

                dropdown.remove = {title: 'Remove Font Spacing Setting', func: that.fontspacing.reset};
                var button = this.button.add('fontspacing', 'Change Font Spacing');

                this.$fontSpacingLabel = $('<div id="font-spacing-label">14</div>');

                var arrowContainer = $('<div class="toolBarArrows toolbarComp"></div>'),
                    upArrow        = $('<a href="#" class="re-icon re-increasefontsize redactor-btn-image toolbarArrow upArrow" rel="increasefontspacing"></a>'),
                    downArrow      = $('<a href="#" class="re-icon re-decreasefontsize redactor-btn-image toolbarArrow downArrow" rel="decreasefontspacing"></a>');

                upArrow.click({isUp: true}, this.fontspacing.incSize);
                downArrow.click({isUp: false}, this.fontspacing.incSize);

                arrowContainer.append(upArrow, downArrow);

                var wrapper = $('<div class="button-wrapper font-spacing"></div>');
                button.addClass('font-spacing-button icon-text-width');

                this.button.addDropdown(button, dropdown);
                var buttonEl = $('.re-icon.font-spacing-button');
                buttonEl.wrap(wrapper);
                var $buttonWrapper = $('.button-wrapper.font-spacing');
                button.append(this.$fontSpacingLabel);
                $buttonWrapper.append(arrowContainer);

            },
            set           : function (size)
            {

                //$redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');

                this.fontspacing.size = size;
                this.inline.format('span', 'style', 'letter-spacing: ' + size + 'px;');
            },
            reset         : function ()
            {
                this.inline.removeStyleRule('letter-spacing');
            },

            updateFontSpacingLabel: function (value)
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
                this.fontspacing.size = (+size).toFixed(1);
                this.$fontSpacingLabel.empty().text(this.fontspacing.size);
            },

            incSize: function (e)
            {
                var size = +this.fontspacing.size;
                if (e.data.isUp)
                {
                    size += 0.2;
                    this.fontspacing.set(size);
                    this.fontspacing.updateFontSpacingLabel(size)
                }
                else
                {
                    size -= 0.2;
                    this.fontspacing.set(size);
                    this.fontspacing.updateFontSpacingLabel(size)
                }

            }


        };
    };
})(jQuery);
