(function ($)
{
    RedactorPlugins.fontsizewidget = function ()
    {
        return {
            input: null,
            init : function ()
            {

                var comp = $('<li class="toolbarComp noselect" id="fontSizeComp"></li>');
                var icon = $('<div class="toolBarIcon icon-text-height" id="fontSizeIcon"></div>');
                var spinnerBox = $('<div class="spinnerBox"> </div>');
                this.fontsizewidget.input = $('<input class="toolBarButton toolBarSpinner" id="fontSizeInput" value="1">');
                var inputHolder = $('<div class="inputHolder"></div>');
                inputHolder.append(this.fontsizewidget.input);
                var arrows = $('<div class="toolBarArrows"></div>');

                var increase = $('<a href="#" class="re-icon re-increasefontsize redactor-btn-image toolbarArrow upArrow" rel="increasefontsize"></a>');
                var decrease = $('<a href="#" class="re-icon re-decreasefontsize redactor-btn-image toolbarArrow downArrow" rel="decreasefontsize"></a>');

                arrows.append(increase, decrease);
                spinnerBox.append(inputHolder, arrows);
                comp.append(icon, spinnerBox);
                var that = this;

                increase.click({isIncrement: true}, that.fontsizewidget.incrementFontSize);
                decrease.click({isIncrement: false}, that.fontsizewidget.incrementFontSize);

                this.fontsizewidget.input.change(that.fontsizewidget.changeFontSizeCSS);
                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(comp);

            },

            changeFontSizeCSS: function (ev)
            {
                var size = ev.currentTarget.value;
                this.buffer.set();
                this.selection.restore();
                //this.inline.removeStyleRule('font-size');
                this.inline.format('span', 'style', 'font-size: ' + size + 'px;');
                this.buffer.set();

                removeMarkers();
            },

            incrementFontSize: function (ev)
            {
                var size;
                if (ev.data.isIncrement)
                {
                    size = Number(this.fontsizewidget.input.val()) + 1;
                }
                else
                {
                    size = Math.max(Number(this.fontsizewidget.input.val()) - 1, 0);
                }
                console.log('this.fontsizewidget.input.val()');
                console.log(this.fontsizewidget.input.val());

                this.fontsizewidget.input.val(size);
                ev.currentTarget = {};
                ev.currentTarget.value = size;
                this.fontsizewidget.changeFontSizeCSS(ev);

            },

            updateInput: function (value)
            {
                this.fontsizewidget.input.val(parseInt(value));
            },

            reset: function ()
            {
                this.inline.removeStyleRule('font-size');
            }
        };
    };
})(jQuery);