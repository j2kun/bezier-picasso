
function initContextAttrs(context) {
   context.strokeStyle = "#000000";
   context.lineWidth = 13;
}

function init() {
   var context = document.getElementById("canvas").getContext("2d");
   initContextAttrs(context);

   curve = new Object();
   curve.context = context;
   curve.numCurves = 8;

   curve.curves = [
      [[180,280], [183,268], [186,256], [189,244]], // front leg
      [[191,244], [290,244], [300,230], [339,245]], // tummy
      [[340,246], [350,290], [360,300], [355,210]], // back leg
      [[353,210], [370,207], [380,196], [375,193]], // tail
      [[375,193], [310,220], [190,220], [164,205]], // back
      [[164,205], [135,194], [135,265], [153,275]], // ear start
      [[153,275], [168,275], [170,180], [150,190]], // ear end + head
      [[149,190], [122,214], [142,204], [85,240]],  // nose bridge
      [[86,240], [100,247], [125,233], [140,238]]   // mouth
   ];

   for (var theCurve = 0; theCurve < curve.curves.length; theCurve++) {
      for (var pt = 0; pt < 4; pt++) {
         curve.curves[theCurve][pt][0] = Math.floor(curve.curves[theCurve][pt][0] * 5.184);
         curve.curves[theCurve][pt][1] = Math.floor(curve.curves[theCurve][pt][1] * 5.184) - 700;
      }
   }

   paintDrawing(curve);

   var tangle = new Tangle(document, {
       initialize: function () { 
                     var front = curve.curves[0];
                     var tummy = curve.curves[1];
                     var backleg = curve.curves[2];
                     var tail = curve.curves[3];
                     var back = curve.curves[4];
                     var earstart = curve.curves[5];
                     var earfinish = curve.curves[6];
                     var nose = curve.curves[7];
                     var mouth = curve.curves[8];

this.front0x = front[0][0]; this.front0y = front[0][1]; this.front1x =
front[1][0]; this.front1y = front[1][1]; this.front2x = front[2][0];
this.front2y = front[2][1]; this.front3x = front[3][0]; this.front3y =
front[3][1]; this.tummy0x = tummy[0][0]; this.tummy0y = tummy[0][1];
this.tummy1x = tummy[1][0]; this.tummy1y = tummy[1][1]; this.tummy2x =
tummy[2][0]; this.tummy2y = tummy[2][1]; this.tummy3x = tummy[3][0];
this.tummy3y = tummy[3][1]; this.backleg0x = backleg[0][0]; this.backleg0y =
backleg[0][1]; this.backleg1x = backleg[1][0]; this.backleg1y = backleg[1][1];
this.backleg2x = backleg[2][0]; this.backleg2y = backleg[2][1]; this.backleg3x
= backleg[3][0]; this.backleg3y = backleg[3][1]; this.tail0x = tail[0][0];
this.tail0y = tail[0][1]; this.tail1x = tail[1][0]; this.tail1y = tail[1][1];
this.tail2x = tail[2][0]; this.tail2y = tail[2][1]; this.tail3x = tail[3][0];
this.tail3y = tail[3][1]; this.back0x = back[0][0]; this.back0y = back[0][1];
this.back1x = back[1][0]; this.back1y = back[1][1]; this.back2x = back[2][0];
this.back2y = back[2][1]; this.back3x = back[3][0]; this.back3y = back[3][1];
this.earstart0x = earstart[0][0]; this.earstart0y = earstart[0][1];
this.earstart1x = earstart[1][0]; this.earstart1y = earstart[1][1];
this.earstart2x = earstart[2][0]; this.earstart2y = earstart[2][1];
this.earstart3x = earstart[3][0]; this.earstart3y = earstart[3][1];
this.earfinish0x = earfinish[0][0]; this.earfinish0y = earfinish[0][1];
this.earfinish1x = earfinish[1][0]; this.earfinish1y = earfinish[1][1];
this.earfinish2x = earfinish[2][0]; this.earfinish2y = earfinish[2][1];
this.earfinish3x = earfinish[3][0]; this.earfinish3y = earfinish[3][1];
this.nose0x = nose[0][0]; this.nose0y = nose[0][1]; this.nose1x = nose[1][0];
this.nose1y = nose[1][1]; this.nose2x = nose[2][0]; this.nose2y = nose[2][1];
this.nose3x = nose[3][0]; this.nose3y = nose[3][1]; this.mouth0x = mouth[0][0];
this.mouth0y = mouth[0][1]; this.mouth1x = mouth[1][0]; this.mouth1y =
mouth[1][1]; this.mouth2x = mouth[2][0]; this.mouth2y = mouth[2][1];
this.mouth3x = mouth[3][0]; this.mouth3y = mouth[3][1]; 

                   },
       update:     function () { 
                     var front = curve.curves[0];
                     var tummy = curve.curves[1];
                     var backleg = curve.curves[2];
                     var tail = curve.curves[3];
                     var back = curve.curves[4];
                     var earstart = curve.curves[5];
                     var earfinish = curve.curves[6];
                     var nose = curve.curves[7];
                     var mouth = curve.curves[8];

front[0][0] = this.front0x ; front[0][1] =  this.front0y ; front[1][0] =
this.front1x ; front[1][1] =  this.front1y ; front[2][0] =  this.front2x ;
front[2][1] =  this.front2y ; front[3][0] =  this.front3x ; front[3][1] =
this.front3y ; tummy[0][0] =  this.tummy0x ; tummy[0][1] =  this.tummy0y ;
tummy[1][0] =  this.tummy1x ; tummy[1][1] =  this.tummy1y ; tummy[2][0] =
this.tummy2x ; tummy[2][1] =  this.tummy2y ; tummy[3][0] =  this.tummy3x ;
tummy[3][1] =  this.tummy3y ; backleg[0][0] =  this.backleg0x ; backleg[0][1] =
this.backleg0y ; backleg[1][0] =  this.backleg1x ; backleg[1][1] =
this.backleg1y ; backleg[2][0] =  this.backleg2x ; backleg[2][1] =
this.backleg2y ; backleg[3][0] =  this.backleg3x ; backleg[3][1] =
this.backleg3y ; tail[0][0] =  this.tail0x ; tail[0][1] =  this.tail0y ;
tail[1][0] =  this.tail1x ; tail[1][1] =  this.tail1y ; tail[2][0] =
this.tail2x ; tail[2][1] =  this.tail2y ; tail[3][0] =  this.tail3x ;
tail[3][1] =  this.tail3y ; back[0][0] =  this.back0x ; back[0][1] =
this.back0y ; back[1][0] =  this.back1x ; back[1][1] =  this.back1y ;
back[2][0] =  this.back2x ; back[2][1] =  this.back2y ; back[3][0] =
this.back3x ; back[3][1] =  this.back3y ; earstart[0][0] =  this.earstart0x ;
earstart[0][1] =  this.earstart0y ; earstart[1][0] =  this.earstart1x ;
earstart[1][1] =  this.earstart1y ; earstart[2][0] =  this.earstart2x ;
earstart[2][1] =  this.earstart2y ; earstart[3][0] =  this.earstart3x ;
earstart[3][1] =  this.earstart3y ; earfinish[0][0] =  this.earfinish0x ;
earfinish[0][1] =  this.earfinish0y ; earfinish[1][0] =  this.earfinish1x ;
earfinish[1][1] =  this.earfinish1y ; earfinish[2][0] =  this.earfinish2x ;
earfinish[2][1] =  this.earfinish2y ; earfinish[3][0] =  this.earfinish3x ;
earfinish[3][1] =  this.earfinish3y ; nose[0][0] =  this.nose0x ; nose[0][1] =
this.nose0y ; nose[1][0] =  this.nose1x ; nose[1][1] =  this.nose1y ;
nose[2][0] =  this.nose2x ; nose[2][1] =  this.nose2y ; nose[3][0] =
this.nose3x ; nose[3][1] =  this.nose3y ; mouth[0][0] =  this.mouth0x ;
mouth[0][1] =  this.mouth0y ; mouth[1][0] =  this.mouth1x ; mouth[1][1] =
this.mouth1y ; mouth[2][0] =  this.mouth2x ; mouth[2][1] =  this.mouth2y ;
mouth[3][0] =  this.mouth3x ; mouth[3][1] =  this.mouth3y ;

                     context.clearRect(0,0, context.canvas.width, context.canvas.height);
                     paintDrawing(curve);
                   }
   });

}
