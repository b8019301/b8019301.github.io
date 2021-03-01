gdjs.game1Code = {};
gdjs.game1Code.GDCloudObjects1= [];
gdjs.game1Code.GDCloudObjects2= [];
gdjs.game1Code.GDplayerObjects1= [];
gdjs.game1Code.GDplayerObjects2= [];
gdjs.game1Code.GDplatformObjects1= [];
gdjs.game1Code.GDplatformObjects2= [];
gdjs.game1Code.GDspikeObjects1= [];
gdjs.game1Code.GDspikeObjects2= [];
gdjs.game1Code.GDdeathMarkObjects1= [];
gdjs.game1Code.GDdeathMarkObjects2= [];
gdjs.game1Code.GDspawnObjects1= [];
gdjs.game1Code.GDspawnObjects2= [];
gdjs.game1Code.GDcoinObjects1= [];
gdjs.game1Code.GDcoinObjects2= [];
gdjs.game1Code.GDScoreDisplayObjects1= [];
gdjs.game1Code.GDScoreDisplayObjects2= [];
gdjs.game1Code.GDNewObjectObjects1= [];
gdjs.game1Code.GDNewObjectObjects2= [];
gdjs.game1Code.GDNewObject2Objects1= [];
gdjs.game1Code.GDNewObject2Objects2= [];
gdjs.game1Code.GDcheatsPlayerObjects1= [];
gdjs.game1Code.GDcheatsPlayerObjects2= [];

gdjs.game1Code.conditionTrue_0 = {val:false};
gdjs.game1Code.condition0IsTrue_0 = {val:false};
gdjs.game1Code.condition1IsTrue_0 = {val:false};
gdjs.game1Code.condition2IsTrue_0 = {val:false};


gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects = Hashtable.newFrom({"cheatsPlayer": gdjs.game1Code.GDcheatsPlayerObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game1Code.GDplayerObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDspikeObjects1Objects = Hashtable.newFrom({"spike": gdjs.game1Code.GDspikeObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDdeathMarkObjects1Objects = Hashtable.newFrom({"deathMark": gdjs.game1Code.GDdeathMarkObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.game1Code.GDcoinObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects = Hashtable.newFrom({"cheatsPlayer": gdjs.game1Code.GDcheatsPlayerObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDspikeObjects1Objects = Hashtable.newFrom({"spike": gdjs.game1Code.GDspikeObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDdeathMarkObjects1Objects = Hashtable.newFrom({"deathMark": gdjs.game1Code.GDdeathMarkObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game1Code.GDplayerObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.game1Code.GDcoinObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects = Hashtable.newFrom({"cheatsPlayer": gdjs.game1Code.GDcheatsPlayerObjects1});gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.game1Code.GDcoinObjects1});gdjs.game1Code.eventsList0 = function(runtimeScene) {

{


gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").setNumber(0);
}}

}


{


gdjs.game1Code.condition0IsTrue_0.val = false;
gdjs.game1Code.condition1IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.game1Code.condition0IsTrue_0.val ) {
{
gdjs.game1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("cheats")) == 1;
}}
if (gdjs.game1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatsPlayer"), gdjs.game1Code.GDcheatsPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn"), gdjs.game1Code.GDspawnObjects1);
{for(var i = 0, len = gdjs.game1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDplayerObjects1[i].hide();
}
}{runtimeScene.getVariables().get("Score").setNumber(0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game1Code.GDcheatsPlayerObjects1.length !== 0 ? gdjs.game1Code.GDcheatsPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects, (( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointX("")), (( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointY("")), "");
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}}

}


{


gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("cheats")) == 0;
}if (gdjs.game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game1Code.GDplayerObjects1.length !== 0 ? gdjs.game1Code.GDplayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 250, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (200), "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "", 0);
}}

}


{


gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("cheats")) == 1;
}if (gdjs.game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatsPlayer"), gdjs.game1Code.GDcheatsPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game1Code.GDcheatsPlayerObjects1.length !== 0 ? gdjs.game1Code.GDcheatsPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);

gdjs.game1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game1Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.game1Code.GDplayerObjects1[i].isVisible() ) {
        gdjs.game1Code.condition0IsTrue_0.val = true;
        gdjs.game1Code.GDplayerObjects1[k] = gdjs.game1Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.game1Code.GDplayerObjects1.length = k;}if (gdjs.game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game1Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.game1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDplayerObjects1[i].addForce(300, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spike"), gdjs.game1Code.GDspikeObjects1);

gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDplayerObjects1Objects, gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDspikeObjects1Objects, false, runtimeScene, true);
}if (gdjs.game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.game1Code.GDcoinObjects1);
/* Reuse gdjs.game1Code.GDplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawn"), gdjs.game1Code.GDspawnObjects1);
gdjs.game1Code.GDdeathMarkObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDdeathMarkObjects1Objects, (( gdjs.game1Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDplayerObjects1[0].getPointX("")), (( gdjs.game1Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDplayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.game1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDplayerObjects1[i].setPosition((( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointX("")),(( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointY("")));
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatsPlayer"), gdjs.game1Code.GDcheatsPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spike"), gdjs.game1Code.GDspikeObjects1);

gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects, gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDspikeObjects1Objects, false, runtimeScene, true);
}if (gdjs.game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game1Code.GDcheatsPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn"), gdjs.game1Code.GDspawnObjects1);
gdjs.game1Code.GDdeathMarkObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDdeathMarkObjects1Objects, (( gdjs.game1Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDplayerObjects1[0].getPointX("")), (( gdjs.game1Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDplayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.game1Code.GDcheatsPlayerObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDcheatsPlayerObjects1[i].setPosition((( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointX("")),(( gdjs.game1Code.GDspawnObjects1.length === 0 ) ? 0 :gdjs.game1Code.GDspawnObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.game1Code.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.game1Code.GDplayerObjects1);

gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDplayerObjects1Objects, gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.game1Code.GDScoreDisplayObjects1);
/* Reuse gdjs.game1Code.GDcoinObjects1 */
{for(var i = 0, len = gdjs.game1Code.GDcoinObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.game1Code.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatsPlayer"), gdjs.game1Code.GDcheatsPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.game1Code.GDcoinObjects1);

gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcheatsPlayerObjects1Objects, gdjs.game1Code.mapOfGDgdjs_46game1Code_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.game1Code.GDScoreDisplayObjects1);
/* Reuse gdjs.game1Code.GDcoinObjects1 */
{for(var i = 0, len = gdjs.game1Code.GDcoinObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.game1Code.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.game1Code.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{


gdjs.game1Code.condition0IsTrue_0.val = false;
{
gdjs.game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainMenu", false);
}}

}


};

gdjs.game1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game1Code.GDCloudObjects1.length = 0;
gdjs.game1Code.GDCloudObjects2.length = 0;
gdjs.game1Code.GDplayerObjects1.length = 0;
gdjs.game1Code.GDplayerObjects2.length = 0;
gdjs.game1Code.GDplatformObjects1.length = 0;
gdjs.game1Code.GDplatformObjects2.length = 0;
gdjs.game1Code.GDspikeObjects1.length = 0;
gdjs.game1Code.GDspikeObjects2.length = 0;
gdjs.game1Code.GDdeathMarkObjects1.length = 0;
gdjs.game1Code.GDdeathMarkObjects2.length = 0;
gdjs.game1Code.GDspawnObjects1.length = 0;
gdjs.game1Code.GDspawnObjects2.length = 0;
gdjs.game1Code.GDcoinObjects1.length = 0;
gdjs.game1Code.GDcoinObjects2.length = 0;
gdjs.game1Code.GDScoreDisplayObjects1.length = 0;
gdjs.game1Code.GDScoreDisplayObjects2.length = 0;
gdjs.game1Code.GDNewObjectObjects1.length = 0;
gdjs.game1Code.GDNewObjectObjects2.length = 0;
gdjs.game1Code.GDNewObject2Objects1.length = 0;
gdjs.game1Code.GDNewObject2Objects2.length = 0;
gdjs.game1Code.GDcheatsPlayerObjects1.length = 0;
gdjs.game1Code.GDcheatsPlayerObjects2.length = 0;

gdjs.game1Code.eventsList0(runtimeScene);
return;

}

gdjs['game1Code'] = gdjs.game1Code;
