var Filters =
    {
        filterOptions: {
            width        : {value: 0, enabled: false},
            slant        : {value: 0, enabled: false},
            thickness    : {value: 0, enabled: false},
            isVariantMode: false
        },
        sliders      : [],
        checkboxes   : [],

        init: function ()
        {
            this.sliders = [$("#thicknessSlider"), $("#slantSlider"), $("#widthSlider")];
            this.checkboxes = [$('#thicknessSliderCheckbox'), $('#slantSliderCheckbox'), $('#widthSliderCheckbox')];
            this.generateSliders();
            this.generateCheckboxes();
        },

        generateSliders: function ()
        {
            var me = this;
            this.sliders.forEach(function ($slider)
            {
                $slider.noUiSlider({
                    start      : [0],
                    step       : 1,
                    snap       : true,
                    range      : {
                        'min'    : 1,
                        '11.111%': 2,
                        '22.222%': 3,
                        '33.333%': 4,
                        '44.444%': 5,
                        '55.555%': 6,
                        '66.666%': 7,
                        '77.777%': 8,
                        '88.888%': 9,
                        'max'    : 10
                    },
                    orientation: 'horizontal'

                }).noUiSlider_pips({
                    mode   : 'values',
                    values : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    density: 10
                }).on('change', function ()
                {
                    var id = $(this).attr('id');
                    var $checkbox = $('#' + id + 'Checkbox');

                    var sliderName = $(this).attr('id').substring(0, $(this).attr('id').length - 6);
                    me.filterOptions[sliderName].value = Number(arguments[1]) - 1;

                    if (!$checkbox.checkbox('is checked'))
                    {
                        $checkbox.checkbox('check');
                    }
                    else
                    {
                        if (widgetSettings)
                        {
                            me.onFiltersChanged()
                        }
                    }
                });
            });
        },

        generateCheckboxes: function ()
        {
            var me = this;

            this.checkboxes.forEach(function (checkbox)
            {
                var id = $(checkbox).attr('id'),
                    name = id.substring(0, id.length - 8),
                    $label = $('#' + name + 'Label');

                var sliderName = id.substring(0, id.length - 8);
                var filerOptionName = sliderName.substring(0, sliderName.length - 6);
                $(checkbox).checkbox({
                    onChecked  : function ()
                    {
                        Filters.filterOptions[filerOptionName].enabled = true;
                        $label.css('color', '#ef6b6b').html('filter enabled');
                        if (widgetSettings)
                        {
                            me.onFiltersChanged()
                        }
                    },
                    onUnchecked: function ()
                    {
                        var filerOptionName = sliderName.substring(0, sliderName.length - 6);
                        Filters.filterOptions[filerOptionName].enabled = false;
                        $label.css('color', '#999999').html('filter disabled');
                        if (widgetSettings)
                        {
                            me.onFiltersChanged()
                        }

                    }
                })
            });
        },

        onFiltersChanged: function ()
        {
            function resetCategories()
            {
                var allButton = $('.catButton[data-cat="All"]'),
                    otherButtons = $('.catButton').not('.catButton[data-cat="All"]');
                for (var op in widgetSettings.categoryDisplaySettings)
                {
                    widgetSettings.categoryDisplaySettings[op] = "false"
                }
                widgetSettings.categoryDisplaySettings.All = "true";
                allButton.addClass('active');
                otherButtons.removeClass('active');
            }

            currentViewVariantIndexes = [];
            var filterOptions = Filters.filterOptions;
            for (var i = 0; i < allVariants.length; i++)
            {
                var fontObj = allVariants[i];
                if (
                    ((fontObj.thickness == filterOptions.thickness.value && filterOptions.thickness.enabled) || !filterOptions.thickness.enabled) &&
                    ((fontObj.slant == filterOptions.slant.value && filterOptions.slant.enabled) || !filterOptions.slant.enabled) &&
                    ((fontObj.width == filterOptions.width.value && filterOptions.width.enabled) || !filterOptions.width.enabled)
                )
                {
                    currentViewVariantIndexes.push(i)
                }
            }
            if (currentViewVariantIndexes.length > 0 && currentViewVariantIndexes.length < allVariants.length )
            {
                Filters.filterOptions.isVariantMode = true;
            }
            else
            {
                Filters.filterOptions.isVariantMode = false;
            }
            resetCategories();
            refreshFontList();
        },

        clearFilters: function ()
        {
            $(this.checkboxes).each(function ()
            {
                if ($(this).checkbox('is checked')) $(this).checkbox('uncheck');

            });
        }
    };