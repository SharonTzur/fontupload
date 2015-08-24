var $redactor,
    Toolbar = {
        init: function ()
        {
            function initRedactor()
            {
                $('#redactor').redactor(
                    {
                        plugins: [
                            'fullscreen',
                            'advanced',
                            'textdirection',
                            'undo',
                            //'fontsizewidget',
                            //'letterspacingwidget',
                            'fontfacedropdown',
                            'fontWeightDropdown',
                            'fontItalic',
                            'fontBold',
                            'fontsize',
                            'fontspacing',
                            'fontColor',
                            'fontBgColor'],

                        changeCallback: function ()
                        {

                            var font = $('.redactor-toolbar #fontfamilydropdown .text').text();
                            var size = $redactor.fontsize.size;
                            var letterSpacing = $redactor.fontspacing.size;

                            if (!$redactor.$editor.text())
                            {

                                /*
                                 if (!$redactor.$editor.children().is('SPAN'))
                                 $redactor.$editor.children().wrap('<SPAN>');
                                 */

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

                        initCallback: function ()
                        {
                            this.$editor.children().css('font-family', 'Exo');
                            this.code.set(decodeTextForURL(widgetSettings.code));
                            var self = this;

                            setTimeout(function ()
                            {
                                self.$editor.focus();
                                self.$editor.focus();
                                self.$editor.blur();

                                self.$editor.blur(function ()
                                {
                                    //$redactor.buffer.set();
                                    $redactor.selection.save();
                                    $redactor.$editor.attr('contenteditable', 'false').addClass('unselectable');
                                });

                                $redactor.$toolbar.children().click(function ()
                                {
                                    $redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                                });

/*
                                $redactor.$toolbar.children().click(function ()
                                {
                                    debugger;
                                    $redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                                });
*/

                                $redactor.$toolbar.find('.re-icon, .anyfontdropdown').click(function ()
                                {
                                    $redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                                });


                                self.$editor.focus(function ()
                                {
                                    $redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                                });

                                self.$editor.click(function ()
                                {
                                    $redactor.$editor.attr('contenteditable', 'true').removeClass('unselectable');
                                    self.$editor.focus();
                                });


                                $('.redactor-editor').css('max-height', '480px');
                                $('ul#redactor-toolbar-0 .re-fullscreen').click(function ()
                                {

                                    if ($(this).hasClass('re-normalscreen'))
                                        $('.redactor-editor').css('max-height', '673px');
                                    else
                                        $('.redactor-editor').css('max-height', '480px');

                                })
                            }, 500);

                            var fontString = this.$editor.children().css('font-family');
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