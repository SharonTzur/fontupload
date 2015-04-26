(function($)
{
    RedactorPlugins.increasefontsize = function()
    {
        return {
            init: function()
            {
                //var fonts = [10, 11, 12, 14, 16, 18, 20, 24, 28, 30, 40, 50, 60 ,70, 120];
                var that = this;
                //var dropdown = {};

                //$.each(fonts, function(i, s)
                //{
                //	dropdown['s' + i] = { title: s + 'px', func: function() { that.fontsize.set(s); } };
                //});
                //
                //dropdown.remove = { title: 'Remove Font Size', func: that.fontsize.reset };

                var button = this.button.add('increasefontsize', 'Increase Font Size');
                this.button.addCallback(button, that.increasefontsize.set);
            },
            set: function()
            {
                var size = Number($(this.selection.getNodes()[0]).css('font-size').split('px')[0] ) + 1;
                this.inline.format('span', 'style', 'font-size: ' + size + 'px;');
            },
            reset: function()
            {
                this.inline.removeStyleRule('font-size');
            }
        };
    };
})(jQuery);