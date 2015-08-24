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
    instanceId = 'wixdemo8';
    compId = 14;
}

var fontsToAddOnScroll        = 10,
    initiallyLoadedFonts      = 10;
