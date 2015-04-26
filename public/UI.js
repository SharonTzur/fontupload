function initSemanticUI()
{
    $('#progress-bar').progress({
        percent: 0
    });
    $('.ui.accordion').accordion();
}

function onCatButtonPressed()
{
    Filters.clearFilters();
    function toggleButton()
    {

        if ($(this).hasClass('active'))
            $(this).removeClass('active');
        else
            $(this).addClass('active');
        if (widgetSettings.categoryDisplaySettings[$(this).data('cat')] === "true")
            widgetSettings.categoryDisplaySettings[$(this).data('cat')] = "false";
        else
            widgetSettings.categoryDisplaySettings[$(this).data('cat')] = "true";
    }

    $('#searchFont').val('');

    var pressedCat = $(this).data('cat'),
        allButton = $('.catButton[data-cat="All"]'),
        otherButtons = $('.catButton').not('.catButton[data-cat="All"]');

    if (widgetSettings.categoryDisplaySettings.All === "true" && pressedCat !== "All")
    {
        toggleButton.call(allButton[0]);
    }

    toggleButton.call(this);
    if (pressedCat == "All")
    {
        otherButtons.removeClass('active');
        for (var i = 0; i < categories.length; i++)
        {
            if (categories[i] != 'All')
                widgetSettings.categoryDisplaySettings[categories[i]] = "false";
        }
    }
    refreshFontList();
    saveSettings({data: {published: false}});
}

function refreshUI()
{
    function refreshCatToggleButtons()
    {
        $('.catButton').removeClass('active');
        for (var cat in widgetSettings.categoryDisplaySettings)
        {
            if (widgetSettings.categoryDisplaySettings[cat] == "true")
                $('.catButton[data-cat=' + cat + ']').addClass('active');
        }
    }

    Wix.UI.onChange('fontWeight', function (value, key)
    {
        widgetSettings['weight'] = value.value;
        refreshWidget();
    });

    $('.font-selected').removeClass('font-selected');
    var fontElement = document.getElementById('font-' + widgetSettings.family);
    $(fontElement).addClass('font-selected');
    refreshCatToggleButtons();
}

function onSearchKeyUp()
{
    currentViewFonts = [];
    var searchTerm = arguments[0].target.value;
    Filters.clearFilters();

    lastDisplayedIndex = 0;
    lastLoadedIndex = 0;
    currentViewDisplayed = 0;
    currentViewLoaded = 0;

    if (searchTerm.length>0)
    {
        for (var i = 0; i < allFonts.length; i++)
        {
            if (allFonts[i].family.substring(0, searchTerm.length).toLowerCase() == searchTerm.toLowerCase())
            {
                currentViewFonts.push(allFonts[i]);
            }
        }
    }
    else
    {
        currentViewFonts = [].concat(allFonts);
    }

    if (currentViewFonts.length)
    {
        currentViewFonts.sort(function (a, b)
        {
            return a.family > b.family ? 1 : -1
        });
    }
    console.info('Found ' + currentViewFonts.length + ' fonts. is variants ? ' + Filters.filterOptions.isVariantMode);

    $(fontContainer).empty();
    if (!currentViewFonts.length)
    {
        $(fontContainer).html('<div class="noFontsLabel">Sorry, no fonts were found! <a id="clearFiltersLink"> <br /><b> Click Here </b></a> to clear all search filters</div>');
        $('#clearFiltersLink').on('click', $.proxy(Filters.clearFilters, Filters));
    }
    else
    {
        $.proxy(displayFontsInBrowser, this)();
        loadFonts();
    }
}

function bindEvents()
{
    $('.catButton').click(onCatButtonPressed);
    $('#searchFont').keyup(onSearchKeyUp);

    var $fontContainer = $(fontContainer);
    //$fontContainer.scroll(onFontListScroll);
    Toolbar.init();
}