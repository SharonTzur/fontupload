/**
 * Created by rotemx on 8/20/2015.
 */

try
{
    instanceId = Wix.Utils.getInstanceId();
    compId = Wix.Utils.getOrigCompId();
}
catch (e)
{
    instanceId = 'wixdemo5';
    compId = 10;
}

var fontsToAddOnScroll        = 30,
    initiallyLoadedFonts      = 30;
