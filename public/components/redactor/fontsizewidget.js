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

                this.fontsizewidget.input.change(that.fontsizewidget.changeFontSizeInput);
                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(comp);

            },

            changeFontSizeInput: function (ev)
            {
                var size = ev.currentTarget.value;
                this.selection.restore();
                this.buffer.set();
                //+ 'line-height: ' + size + 'px;');
                //this.inline.format('span', 'style', 'font-size: ' + size + 'px;' + 'line-height: ' + size + 'px;');
                var block = this.selection.getBlock();
                //block.style.lineHeight = (+size + 1) + 'px';

                if (this.selection.getText() == block.innerText)
                {
                    $(block).css('font-size', size + 'px');
                    $(block).find('[rel^="font-size"]').css('font-size','');
                    $(block).find('[data-redactor-style^="font-size"]:last').css('font-size','');
                }

                //$(block).find("[data-redactor-style^='font-size']").css('font-size','');
                this.inline.format('span', 'style', 'font-size: ' + size + 'px;');


            },

            incrementFontSize: function (ev)
            {
                var size;
                if (ev.data.isIncrement)
                {
                    size = Number(this.fontsizewidget.input.val()) + 1;
                } else
                {
                    size = Math.max(Number(this.fontsizewidget.input.val()) - 1, 0);
                }

                this.fontsizewidget.input.val(size);

                var blocks = this.selection.getBlocks();

                for (var i = 0; i < blocks.length; i++)
                {
                    var block = blocks[i];
                    if (block)
                    {
                        block.style.fontSize = '';
                        block.style.lineHeight = '';
                    }
                }

                this.inline.format('span', 'style', 'font-size: ' + size + 'px;' + 'line-height: ' + size + 'px;');
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