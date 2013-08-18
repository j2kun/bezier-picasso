
function midpoints(pointList) {
   var midpoint = function(p, q) {
      return [(p[0] + q[0]) / 2.0, (p[1] + q[1]) / 2.0];
   };

   var midpointList = new Array(pointList.length - 1);
   for (var i = 0; i < midpointList.length; i++) {
      midpointList[i] = midpoint(pointList[i], pointList[i+1]);
   }

   return midpointList;
}

function subdivide(curve) {
   var firstMidpoints = midpoints(curve);
   var secondMidpoints = midpoints(firstMidpoints);
   var thirdMidpoints = midpoints(secondMidpoints);

   return [[curve[0], firstMidpoints[0], secondMidpoints[0], thirdMidpoints[0]],
          [thirdMidpoints[0], secondMidpoints[1], firstMidpoints[2], curve[3]]];
}

function drawSegments(curve, context) {
   context.beginPath();
   context.moveTo(curve[0][0], curve[0][1]);
   
   for (var i = 1; i < curve.length; i++) {
      context.lineTo(curve[i][0], curve[i][1]);
   }
   
   context.lineCap = "round";
   context.stroke();
}

function isFlat(curve) {
   // var tol = 100000; // this is the max tol
   // var tol = 100; // barely wobbly
   var tol = 10;

   var ax = 3.0*curve[1][0] - 2.0*curve[0][0] - curve[3][0]; ax *= ax;
   var ay = 3.0*curve[1][1] - 2.0*curve[0][1] - curve[3][1]; ay *= ay;
   var bx = 3.0*curve[2][0] - curve[0][0] - 2.0*curve[3][0]; bx *= bx;
   var by = 3.0*curve[2][1] - curve[0][1] - 2.0*curve[3][1]; by *= by;

   return (Math.max(ax, bx) + Math.max(ay, by) <= tol);
}

function drawCurve(curve, context) {
   if (isFlat(curve)) {
      drawSegments(curve, context);
   } else {
      var pieces = subdivide(curve);
      drawCurve(pieces[0], context);
      drawCurve(pieces[1], context);
   }
}

function paintDrawing(drawing) {
   for (var i = 0; i < drawing.curves.length; i++) {
      drawCurve(drawing.curves[i], drawing.context);
   }
}
