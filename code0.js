gdjs.mainMenuCode = {};
gdjs.mainMenuCode.GDplayButtonObjects1= [];
gdjs.mainMenuCode.GDplayButtonObjects2= [];
gdjs.mainMenuCode.GDtitleObjects1= [];
gdjs.mainMenuCode.GDtitleObjects2= [];
gdjs.mainMenuCode.GDplaytextObjects1= [];
gdjs.mainMenuCode.GDplaytextObjects2= [];
gdjs.mainMenuCode.GDcheattextObjects1= [];
gdjs.mainMenuCode.GDcheattextObjects2= [];
gdjs.mainMenuCode.GDenableCheatBoxObjects1= [];
gdjs.mainMenuCode.GDenableCheatBoxObjects2= [];
gdjs.mainMenuCode.GDdisableCheatsBoxObjects1= [];
gdjs.mainMenuCode.GDdisableCheatsBoxObjects2= [];
gdjs.mainMenuCode.GDcheatStatusObjects1= [];
gdjs.mainMenuCode.GDcheatStatusObjects2= [];

gdjs.mainMenuCode.conditionTrue_0 = {val:false};
gdjs.mainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.mainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.mainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDplayButtonObjects1Objects = Hashtable.newFrom({"playButton": gdjs.mainMenuCode.GDplayButtonObjects1});gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDdisableCheatsBoxObjects1Objects = Hashtable.newFrom({"disableCheatsBox": gdjs.mainMenuCode.GDdisableCheatsBoxObjects1});gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDenableCheatBoxObjects1Objects = Hashtable.newFrom({"enableCheatBox": gdjs.mainMenuCode.GDenableCheatBoxObjects1});gdjs.mainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.mainMenuCode.GDplayButtonObjects1);

gdjs.mainMenuCode.condition0IsTrue_0.val = false;
gdjs.mainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDplayButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.mainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("disableCheatsBox"), gdjs.mainMenuCode.GDdisableCheatsBoxObjects1);

gdjs.mainMenuCode.condition0IsTrue_0.val = false;
gdjs.mainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDdisableCheatsBoxObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.mainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatStatus"), gdjs.mainMenuCode.GDcheatStatusObjects1);
{runtimeScene.getGame().getVariables().get("cheats").setNumber(0);
}{for(var i = 0, len = gdjs.mainMenuCode.GDcheatStatusObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDcheatStatusObjects1[i].setString("Cheats: Disabled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enableCheatBox"), gdjs.mainMenuCode.GDenableCheatBoxObjects1);

gdjs.mainMenuCode.condition0IsTrue_0.val = false;
gdjs.mainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuCode.mapOfGDgdjs_46mainMenuCode_46GDenableCheatBoxObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.mainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatStatus"), gdjs.mainMenuCode.GDcheatStatusObjects1);
{runtimeScene.getGame().getVariables().get("cheats").setNumber(1);
}{for(var i = 0, len = gdjs.mainMenuCode.GDcheatStatusObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDcheatStatusObjects1[i].setString("Cheats: Enabled");
}
}}

}


};

gdjs.mainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainMenuCode.GDplayButtonObjects1.length = 0;
gdjs.mainMenuCode.GDplayButtonObjects2.length = 0;
gdjs.mainMenuCode.GDtitleObjects1.length = 0;
gdjs.mainMenuCode.GDtitleObjects2.length = 0;
gdjs.mainMenuCode.GDplaytextObjects1.length = 0;
gdjs.mainMenuCode.GDplaytextObjects2.length = 0;
gdjs.mainMenuCode.GDcheattextObjects1.length = 0;
gdjs.mainMenuCode.GDcheattextObjects2.length = 0;
gdjs.mainMenuCode.GDenableCheatBoxObjects1.length = 0;
gdjs.mainMenuCode.GDenableCheatBoxObjects2.length = 0;
gdjs.mainMenuCode.GDdisableCheatsBoxObjects1.length = 0;
gdjs.mainMenuCode.GDdisableCheatsBoxObjects2.length = 0;
gdjs.mainMenuCode.GDcheatStatusObjects1.length = 0;
gdjs.mainMenuCode.GDcheatStatusObjects2.length = 0;

gdjs.mainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['mainMenuCode'] = gdjs.mainMenuCode;
