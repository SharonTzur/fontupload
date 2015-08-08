(function ($)
{
    RedactorPlugins.letterspacingwidget = function ()
    {
        return {
            input: null,
            init : function ()
            {

                var comp = $('<li class="toolbarComp noselect" id="letterSpacingComp"></li>');
                var icon = $('<div class="toolBarIcon icon-text-width" id="letterSpacingIcon"></div>');
                var spinnerBox = $('<div class="spinnerBox"> </div>');
                this.letterspacingwidget.input = $('<input class="toolBarButton toolBarSpinner" id="letterSpacingInput" value="1">');
                var inputHolder = $('<div class="inputHolder"></div>');
                inputHolder.append(this.letterspacingwidget.input);
                var arrows = $('<div class="toolBarArrows"></div>');

                var increase = $('<a href="#" class="re-icon re-increaseletterspacing redactor-btn-image toolbarArrow upArrow" rel="increaseletterspacing"></a>');
                var decrease = $('<a href="#" class="re-icon re-decreaseletterspacing redactor-btn-image toolbarArrow downArrow" rel="decreaseletterspacing"></a>');

                arrows.append(increase, decrease);
                spinnerBox.append(inputHolder, arrows);
                comp.append(icon, spinnerBox);
                var that = this;

                increase.click({isIncrement: true}, that.letterspacingwidget.incrementFontSize);
                decrease.click({isIncrement: false}, that.letterspacingwidget.incrementFontSize);

                this.letterspacingwidget.input.change(that.letterspacingwidget.changeFontSizeCSS);
                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(comp);
            },

            changeFontSizeCSS: function (ev)
            {
                var size = ev.currentTarget.value;
                this.selection.restore();
                this.inline.format('span', 'style', 'letter-spacing:' + size + 'px;');
            },

            incrementFontSize: function (ev)
            {
                var size;
                if (ev.data.isIncrement)
                    size = (Number(this.letterspacingwidget.input.val()) + 0.2).toFixed(1);
                else
                    size = (Number(this.letterspacingwidget.input.val()) - 0.2).toFixed(1);

                this.letterspacingwidget.input.val(size);
                this.inline.format('span', 'style', 'letter-spacing:' + size + 'px;');
            },

            updateSpacing : function (value) {
                this.letterspacingwidget.input.val(+value.replace("px",""));

            },

            reset: function ()
            {
                this.inline.removeStyleRule('font-size');
            }
        };
    };
})(jQuery);