(function ($)
{
    RedactorPlugins.fontWeightDropdown = function ()
    {
        return {
            input: null,
            text: null,
            init : function ()
            {
                var dropdown = $(
                        '<div id = "fontweightdropdown" class="anyfontdropdown ui floating dropdown labeled icon button">' +
                            '<div class="default text">' +
                                    'Select Weight' +
                                '</div>' +
                                '<input name="hidden-field" type="hidden">' +
                                '<div class="menu" style="font-family: exo">' +
                                '</div>' +
                                '<i class="fonticon width icon"></i>' +
                        '</div>'

                )
                    .dropdown('setting', 'transition', 'slide down')
                    .dropdown({
                        onChange: function(value, text, $selectedItem) {
                            $redactor.selection.restore();
                            $redactor.inline.format('span', 'style', 'font-weight:' + fontVarientObjTextToNum[text] + ';');
                            $redactor.selection.removeMarkers();
                            $redactor.fontWeightDropdown.setActive(text);
                        }
                    })
                    .popup('setting', 'content', 'Select Weight');

                    var items = [];
                    for (var fontWieghtDisplayName in fontVarientObjTextToNum)
                        items.push(this.fontWeightDropdown
                            .createDropdownFirstItem(fontVarientObjTextToNum[fontWieghtDisplayName],fontWieghtDisplayName));

                this.fontWeightDropdown.list = $(dropdown).children('.menu');
                    this.fontWeightDropdown.text = $(dropdown).children('.text');
                    this.fontWeightDropdown.list.append(items);

                this.fontWeightDropdown.setActive(fontVarientNumToText[400]);

                var $toolbar = $('ul#redactor-toolbar-0');
                $toolbar.append(dropdown);

            },


            createDropdownFirstItem : function (index, fontWieghtDisplayName) {
                var toDisplay = (index == 400) ? 'block;' : 'none;' ;
                return $('<div class="item" data-value="' + index + '" style="font-weight:'+  index +'; display:' + toDisplay + '">' +
                fontWieghtDisplayName +
                '</div>');

            },

            setActive: function (value) {
                this.fontWeightDropdown.list.children().removeClass('selected');
                this.fontWeightDropdown.list.children().removeClass('active');
                this.fontWeightDropdown.list.children('[data-value="' + fontVarientObjTextToNum[value] + '"]').addClass('active selected');
                this.fontWeightDropdown.text.text(value);
            },

            updateWeight: function (value) {
                value = (value == 'bold') ? '700' : value ;
                this.fontWeightDropdown.setActive(fontVarientNumToText[value]);
            },

            populateList : function (indexinAllFonts) {
                this.fontWeightDropdown.list.children().hide();
                var q = this.fontWeightDropdown;

                if (indexinAllFonts != -1)
                {
                    $.each(allFonts[indexinAllFonts].variants, function (index, fontWeight)
                    {
                        q.list.children('[data-value="' + fontWeight + '"]').show();
                    });

                    if (allFonts[indexinAllFonts].variants.length == 1) {
                        if ($redactor)
                            $redactor.$editor.children().css('font-weight', '');
                        q.setActive('Normal');
                        q.list.parent().addClass('disabled');
                    }
                    else
                        q.list.parent().removeClass('disabled')
                }

            },

            removedWeight: false,

            list : null

        };
    };
})(jQuery);