function initSemanticUI()
{
    $('#progress-bar').progress({
        percent: 0
    });
    $('.ui.accordion').accordion();
}

function onCatButtonPressed(e)
{
    Filters.clearFilters();

    if (e != 'keyUp')
        $('#searchFont').find('input').val('');

    var $catButtons = $('.catButton');
    $catButtons.removeClass('active');
    $(this).addClass('active');
    for (var cat in widgetSettings.categoryDisplaySettings)
    {
        widgetSettings.categoryDisplaySettings[cat] = "false";
    }

    widgetSettings.categoryDisplaySettings[$(this).data('cat')] = "true";

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


    if (!widgetSettings.paid)
    {

        if (widgetSettings.isTrial)
        {
            var daysLeft = Math.ceil(trialTime / (24 * 60 * 60 * 1000));
            $('#last-item').show().html('Trial ends in ' + daysLeft + ' days. <a id="upgrade-link">Upgrade now</a>');
        }
        else
        {
            $('#last-item').show().html('Trial ends in ' + daysLeft + ' days. <a id="upgrade-link">Upgrade now</a>');
        }
    }
    else
    {
        $('#last-item').show().addClass('paid').html('Premium Features Enabled.');
    }

    function bindUpgradeButtons()
    {
        $('#upgrade-button, #upgrade-link').click(function (e)
        {
            console.log('upgrade');
            $.ajax({
                url    : SERVER_URL + '/test/subscribe',
                data   : {instanceId: instanceId},
                success: function (response)
                {
                    console.log(response);
                }
            });
            //console.log('upgrade');
            Wix.Settings.openBillingPage();
        });
        $($('button.btn-upgrade')[1]).click(function (e)
        {
            console.log('downgrade');
            $.ajax({
                url    : SERVER_URL + '/test/unsubscribe',
                data   : {instanceId: instanceId},
                success: function (response)
                {
                    console.log(response);
                }
            });
            //console.log('upgrade');
            Wix.Settings.openBillingPage();
        });
    }

    bindUpgradeButtons();
    $('.font-selected').removeClass('font-selected');
    var fontElement = document.getElementById('font-' + widgetSettings.family);
    $(fontElement).addClass('font-selected');
    refreshCatToggleButtons();

}

function onSearchKeyUp()
{
    $.proxy(onCatButtonPressed, $('.catButton[data-cat="All"]')[0], 'keyUp')();

    currentViewFonts = [];
    var searchTerm = arguments[0].target.value;
    Filters.clearFilters();

    lastDisplayedIndex = 0;
    lastLoadedIndex = 0;
    currentViewDisplayed = 0;
    currentViewLoaded = 0;

    if (searchTerm.length > 0)
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
    //console.info('Found ' + currentViewFonts.length + ' fonts. is variants ? ' + Filters.filterOptions.isVariantMode);

    $(fontContainer).empty();
    if (!currentViewFonts.length)
    {
        $(fontContainer).html('<div class="noFontsFilteredLabel">Sorry, no fonts were found! <a id="clearFiltersLink"> <br /><b> Click Here </b></a> to clear all search filters</div>');
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