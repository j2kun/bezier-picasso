

function clear(context) {
   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function initContextAttrs(context) {
   context.strokeStyle = "#000000";
   context.lineWidth = 3;
}

function randomPoint(width, height) {
   return [Math.floor(Math.random()*width), Math.floor(Math.random()*height)];
}

function randomCurve(width, height) {
   return [randomPoint(width, height), randomPoint(width, height), 
           randomPoint(width, height), randomPoint(width, height)];
}

function randomDrawing(context) {
   var width = context.canvas.width;
   var height = context.canvas.height;

   this.context = context;
   this.numCurves = Math.floor((Math.random()*4)+4);
   this.curves = new Array(this.numCurves);
   
   for (var i = 0; i < this.numCurves; i++) {
      this.curves[i] = randomCurve(width, height);
      /*if (i > 0) {
         this.curves[i][0] = this.curves[i-1][3];
      }*/
   }
}

function init() {
   var rightCanvas = document.getElementById("right");
   var leftCanvas = document.getElementById("left");

   var context = rightCanvas.getContext("2d");
   var dogImg = document.getElementById("dog");
   
   context.drawImage(dogImg, 0,5);

   var context = document.getElementById("left").getContext("2d");
   initContextAttrs(context);

   aDrawing = new randomDrawing(context);
   paintDrawing(aDrawing);
}
