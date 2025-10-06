// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    let testx = face.keypoints[4].x;
    let testy = face.keypoints[4].y;
    /*
    Start drawing on the face here
    */
    noStroke()
    fill(225, 225, 0);
    // fill(get(leftEyeCenterX, leftEyeCenterY))

    //ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    //drawPoints(face.leftEye);
    //drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    //drawPoints(face.rightEyebrow);

  //drawX(rightEyeCenterX,rightEyeCenterY);
  //drawX(leftEyeCenterX,leftEyeCenterY);


// REyeHeight(face.rightEye.height);
// LEyeHeight(face.leftEye.height);

  let REyeHeight = face.rightEye.height;
  let LEyeHeight = face.leftEye.height;
let cellSize = 250;
let two_scale_factor = 1.2; // scale for the background eye
let shadowCover_two = two_scale_factor*1.12

  leftDrawX(face.leftEye.centerX, face.leftEye.centerY, LEyeHeight, two_scale_factor, cellSize, shadowCover_two);
  rightDrawX(face.rightEye.centerX, face.rightEye.centerY, REyeHeight, two_scale_factor, cellSize, shadowCover_two);

    // drawX(noseTipX,noseTipY); 





  // checkIfMouthIsOpen(faces)
  // if (mouthIsOpen){
  
  // }






    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function leftDrawX(X, Y, LEyeHeight, two_scale_factor, cellSize, shadowCover_two) {
 push()

 X = X+5
// console.log("hello");
//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(X, Y+10, two_scale_factor*90, two_scale_factor*LEyeHeight*5); 

// eye colour. statements
  fill(242, 101, 41); 
ellipse(X, (Y + (200*1/10*two_scale_factor)), two_scale_factor*67.5, two_scale_factor*LEyeHeight*3);


fill(34,13,32); //black pupil
ellipse(X, (Y + (200*1/10*two_scale_factor)), two_scale_factor*40, LEyeHeight*2);

//EYELID

//eyelid colour statements

  fill(255,204,0);
beginShape();
  vertex(0, 0); 
  vertex(
    X + (200 * -1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 *  0  * two_scale_factor)
  );
  bezierVertex(
    X + (200 * -1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 * -7/20 * two_scale_factor), 
    X + (200 *  1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 * -7/20 * two_scale_factor), 
    X + (200 *  1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 *  0  * two_scale_factor)
  );
vertex(
  X + (200 *  1/4 * two_scale_factor), 
  Y + (LEyeHeight*10 *  0  * two_scale_factor)
);
bezierVertex(
    X + (200 * 1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 * 3/20 * two_scale_factor), 
    X + (200 *  -1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 * 3/20 * two_scale_factor), 
    X + (200 *  -1/4 * two_scale_factor), 
    Y + (LEyeHeight*10 *  0  * two_scale_factor)
  );
  endShape(CLOSE);

 pop()
}


function rightDrawX(X, Y, REyeHeight, two_scale_factor, cellSize) {
 push()
// console.log("hello");
 strokeWeight(15)
 stroke(11);
fill(255);
ellipse(X, Y, 100, (REyeHeight*4))
fill(255,0,0)
ellipse(X, Y, 50, 50)
 pop()
}
// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
//function drawPoints(feature) {

  //push()
 // for (let i = 0; i < feature.keypoints.length; i++) {
//    let element = feature.keypoints[i];
  //  noStroke();
//    fill(0, 255, 0);
//    circle(testx, , 5);
//  }
//  pop()

//}
