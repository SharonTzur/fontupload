(function ($)
{
    RedactorPlugins.fontBold = function ()
    {
        return {

            updateBold : function (value) {

                var toolbarIcon = $('.redactor-toolbar li a[rel="bold"]');
                if (value.toLowerCase() != 'bold') return;
                if (toolbarIcon.hasClass('redactor-act'))
                    toolbarIcon.removeClass('redactor-act');
                else
                    toolbarIcon.addClass('redactor-act');
            }
        };
    };
})(jQuery);