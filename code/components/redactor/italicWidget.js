(function ($)
{
    RedactorPlugins.fontItalic = function ()
    {
        return {

            updateItalic : function (value) {

                var toolbarIcon = $('.redactor-toolbar li a[rel="italic"]');
                if (value == 'normal') return;
                if (toolbarIcon.hasClass('redactor-act'))
                    toolbarIcon.removeClass('redactor-act');
                else
                    toolbarIcon.addClass('redactor-act');

            }

        };
    };
})(jQuery);