var $redactor,
    Toolbar = {
    init: function ()
    {
        function initRedactor()
        {
            $('#redactor').redactor(
                {
                    plugins       : ['fullscreen', 'advanced', 'textdirection', 'undo',
                        'fontsize',
                        //'fontsizewidget',
                        'letterspacingwidget', 'fontfacedropdown', 'fontWeightDropdown', 'fontItalic','fontBold' ,'fontColor', 'fontBgColor'],

                    changeCallback: function ()
                    {

                        var font = $('.redactor-toolbar #fontfamilydropdown .text').text();
                        var size = $redactor.fontsize.size;
                        var letterSpacing = $redactor.letterspacingwidget.input.val();

                        if (!$redactor.$editor.text())
                        {

                            if (!$redactor.$editor.children().is('p'))
                                $redactor.$editor.children().wrap('<p>');

                            $redactor.$editor.children().css('font-family', (font == 'Select Font') ? '' : font)
                                .css('font-size', size + 'px')
                                //.css('line-height', size + 'px')
                                .css('letter-spacing:', letterSpacing + 'px');
                        }

                        widgetSettings.code = this.code.get();
                        saveSettings();
                        //refreshFontList();
                        $('.fontdiv .text, .variantPreviewLine').html(stripHtml(this.code.get()));
                        refreshWidget();
                    },

                    initCallback  : function ()
                    {
                        this.$editor.children().css('font-family', 'Exo');
                        this.code.set(decodeTextForURL(widgetSettings.code));
                        var self = this;

                        setTimeout(function () {
                            self.$editor.focus();
                            self.$editor.focus();
                            self.$editor.blur();

                            self.$editor.blur(function ()
                            {
                                //$redactor.buffer.set();
                                $redactor.selection.save();
                            });


                            $('.redactor-editor').css('max-height', '480px');
                            $('ul#redactor-toolbar-0 .re-fullscreen').click(function () {

                                if ( $(this).hasClass('re-normalscreen') )
                                    $('.redactor-editor').css('max-height', '673px');
                                else
                                    $('.redactor-editor').css('max-height', '480px');

                            })
                        }, 500);

                        var fontString =  this.$editor.children().css('font-family');
                        this.fontfacedropdown.changeDropdownFont(fontString);
                        $redactor = this;
                        var l = new ScriptLoader();

                    }

                }
            );
        }
        initRedactor();
    }

};