let faceScale = 0.5
let eyeColour = { r: 242, g: 200, b: 41 };
let skinColour = { r: 255, g: 204, b: 0 };
let pinchEye = 0
let pinchSkin = 0

let firstRun = true;
let nycCapImage;
let prettyCapImage;
let wigImage;

imageMode(CENTER);

function prepareInteraction() {
nycCapImage = loadImage('CAP.png');
prettyCapImage = loadImage('PRETTY.png');
wigImage = loadImage('WIG.png');

}

function drawInteraction(faces, hands) {

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

if (hand.handedness === "Left") {

    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;
    let ringFingerTipX = hand.ring_finger_tip.x;
    let ringFingerTipY = hand.ring_finger_tip.y;
    
    
    let skinDist = dist(ringFingerTipX, ringFingerTipY, thumbTipX, thumbTipY);
    let eyeDist = dist(indexFingerTipX, indexFingerTipY, thumbTipX, thumbTipY);
    
    pinchEye = eyeDist;
    pinchSkin = skinDist;

    // SKIN COLOR - Ring finger + thumb pinch
    if (skinDist < 600) {
      
      skinColour.r = map(skinDist, 20, 600, 0, 255);
      skinColour.g = map(skinDist, 20, 600, 255, 150);
      skinColour.b = map(skinDist, 20, 600, 255, 0);

  noStroke();
      fill(skinColour.r,skinColour.g, skinColour.b )
      ellipse(ringFingerTipX, ringFingerTipY, 50, 50)
    }

    // EYE COLOR - Index finger + thumb pinch
    if (eyeDist < 700) {
      eyeColour.r = map(eyeDist, 20, 700, 0, 255);
      eyeColour.g = map(eyeDist, 20, 700, 255, 100);
      eyeColour.b = map(eyeDist, 20, 700, 150, 255);
noStroke();
    fill(eyeColour.r,eyeColour.g, eyeColour.b )
    ellipse(indexFingerTipX, indexFingerTipY, 50, 50)
    }
  }
if (hand.handedness === "Right") {

let indexFingerTipX = hand.index_finger_tip.x;
let indexFingerTipY = hand.index_finger_tip.y;
let middleFingerTipX = hand.middle_finger_tip.x;
let middleFingerTipY = hand.middle_finger_tip.y;
let pinkyFingerTipX = hand.pinky_finger_tip.x;
let pinkyFingerTipY = hand.pinky_finger_tip.y;
let thumbTipX = hand.thumb_tip.x;
let thumbTipY = hand.thumb_tip.y;

wigDist = dist(indexFingerTipX,indexFingerTipY, thumbTipX, thumbTipY)
nycHatDist = dist(middleFingerTipX, middleFingerTipY, thumbTipX, thumbTipY);
prettyHatDist = dist(pinkyFingerTipX, pinkyFingerTipY, thumbTipX, thumbTipY);

if (nycHatDist<60){
image(nycCapImage, thumbTipX -200, thumbTipY - 200);
}    
if (prettyHatDist<60){
image(prettyCapImage, thumbTipX -200, thumbTipY - 200);
}
if (wigDist<60){
image(wigImage, thumbTipX -200, thumbTipY - 200);
}

}
}


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

    let topLipX = face.keypoints[0].x;
    let topLipY = face.keypoints[0].y;
    let bottomLipX = face.keypoints[17].x;
    let bottomLipY = face.keypoints[17].y;
    let cornerLX = face.keypoints[61].x;
    let cornerLY = face.keypoints[61].y;
    let cornerRX = face.keypoints[291].x;
    let cornerRY = face.keypoints[291].y;


  let REyeHeight = face.rightEye.height;
  let LEyeHeight = face.leftEye.height;
  let cellSize = 250;
  let two_scale_factor = 1.5; // scale for the background eye
  let shadowCover_two = two_scale_factor*1.12
  let x = face.lips.centerX;
  let y = face.lips.centerY;
  let w = 250; // width of lips
  let h = 60;  // height of lips


  let toothWidth = 30;
  let toothHeight = 45;
  let gap = 8; // gap between teeth


  leftDrawX(face.leftEye.centerX, face.leftEye.centerY, LEyeHeight, two_scale_factor, cellSize, shadowCover_two);
  rightDrawX(face.rightEye.centerX, face.rightEye.centerY, REyeHeight, two_scale_factor, cellSize, shadowCover_two);
  mouthDrawX(x,y,face.lips.width,face.lips.height, w, h, topLipX, topLipY, bottomLipX, bottomLipY, two_scale_factor, noseTipX, noseTipY, cornerLX, cornerLY, cornerRX, cornerRY)
    // drawX(noseTipX,noseTipY); 





  // checkIfMouthIsOpen(faces)
  // if (mouthIsOpen){
  
  // }




function leftDrawX(X, Y, LEyeHeight, two_scale_factor, cellSize, shadowCover_two, d) {
 push()

 X = X+5

//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(X, Y+10, two_scale_factor*90, two_scale_factor*LEyeHeight*5); 

// eye colour. statements
  fill(eyeColour.r, eyeColour.g, eyeColour.b); 
ellipse(X, (Y + (200*1/10*two_scale_factor)), two_scale_factor*67.5, two_scale_factor*LEyeHeight*3);


fill(34,13,32); //black pupil
ellipse(X, (Y + (200*1/10*two_scale_factor)), (50+(LEyeHeight*-1)),(60+(LEyeHeight*-1)));

//EYELID

//eyelid colour statements

  fill(skinColour.r,skinColour.g, skinColour.b);
beginShape();
  vertex(0, 0); 
  vertex(
    X + (200 * -1/4 * two_scale_factor), 
  Y+LEyeHeight*-5+60 +(200 *  0  * two_scale_factor+LEyeHeight)
  );
  bezierVertex(
    X + (200 * -1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 * -7/20 * two_scale_factor+LEyeHeight), 
    X + (200 *  1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 * -7/20 * two_scale_factor+LEyeHeight), 
    X + (200 *  1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 *  0  * two_scale_factor+LEyeHeight)
  );
vertex(
  X + (200 *  1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 *  0  * two_scale_factor+LEyeHeight)
);
bezierVertex(
    X + (200 * 1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 * 3/20 * two_scale_factor+LEyeHeight), 
    X + (200 *  -1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 * 3/20 * two_scale_factor+LEyeHeight), 
    X + (200 *  -1/4 * two_scale_factor), 
Y+LEyeHeight*-5+60 +(200 *  0  * two_scale_factor+LEyeHeight)
  );
  endShape(CLOSE);

 pop()
}


function rightDrawX(X, Y, REyeHeight, two_scale_factor, cellSize, d) {
 push()
// console.log("hello");
 X = X+5
// console.log("hello");
//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(X, Y+10, two_scale_factor*90, two_scale_factor*REyeHeight*5); 

// eye colour. statements
  fill(eyeColour.r,eyeColour.g, eyeColour.b)
ellipse(X, (Y + (200*1/10*two_scale_factor)), two_scale_factor*67.5, two_scale_factor*REyeHeight*3);


fill(34,13,32); //black pupil
ellipse(X, (Y + (200*1/10*two_scale_factor)), (50+(REyeHeight*-1)),(60+(REyeHeight*-1)));

//EYELID

//eyelid colour statements

  fill(skinColour.r,skinColour.g, skinColour.b);
beginShape();
  vertex(0, 0); 
  vertex(
    X + (200 * -1/4 * two_scale_factor), 
  Y+REyeHeight*-5+60 +(200 *  0  * two_scale_factor+REyeHeight)
  );
  bezierVertex(
    X + (200 * -1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 * -7/20 * two_scale_factor+REyeHeight), 
    X + (200 *  1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 * -7/20 * two_scale_factor+REyeHeight), 
    X + (200 *  1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 *  0  * two_scale_factor+REyeHeight)
  );
vertex(
  X + (200 *  1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 *  0  * two_scale_factor+REyeHeight)
);
bezierVertex(
    X + (200 * 1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 * 3/20 * two_scale_factor+REyeHeight), 
    X + (200 *  -1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 * 3/20 * two_scale_factor+REyeHeight), 
    X + (200 *  -1/4 * two_scale_factor), 
Y+REyeHeight*-5+60 +(200 *  0  * two_scale_factor+REyeHeight)
  );
  endShape(CLOSE);
 pop()
}

function mouthDrawX(x, y, mouthWidth, mouthHeight, w, h, topLipX, topLipY, bottomLipX, bottomLipY, two_scale_factor, noseTipX, noseTipY, mRX, mRY, mLX, mLY) {
  push();
  noStroke();

  fill(86,24,24);
 // MIDDLE FILL - fills the gap between lips
  beginShape();
  // Top edge (follows top lip's bottom edge)
  vertex(topLipX - mouthWidth/2, mRY);
  bezierVertex(
    topLipX - mouthWidth/3, topLipY + h * 0.15,
    topLipX + mouthWidth/3, topLipY + h * 0.15,
    topLipX + mouthWidth/2, mLY
  );
  
  // Bottom edge (follows bottom lip's top edge)
  bezierVertex(
    bottomLipX + mouthWidth/3, bottomLipY + h * 0.15,
    bottomLipX - mouthWidth/3, bottomLipY + h * 0.15,
    bottomLipX - mouthWidth/2, mRY
  );
  endShape(CLOSE);

  fill(skinColour.r,skinColour.g, skinColour.b);
  
  // TOP LIP
  beginShape();
  // Left corner - use mRY for actual mouth corner position
  vertex(topLipX - mouthWidth/2, mRY);
  
  // Left curve - rises up to cupid's bow
  bezierVertex(
    topLipX - mouthWidth/3, topLipY - h * 0.6,
    topLipX - mouthWidth/6, topLipY - h * 0.8,
    topLipX - mouthWidth/12, topLipY - h * 0.5
  );
  
  // Cupid's bow dip
  bezierVertex(
    topLipX - mouthWidth/20, topLipY - h * 0.3,
    topLipX + mouthWidth/20, topLipY - h * 0.3,
    topLipX + mouthWidth/12, topLipY - h * 0.5
  );
  
  // Right curve - descends from cupid's bow
  bezierVertex(
    topLipX + mouthWidth/6, topLipY - h * 0.8,
    topLipX + mouthWidth/3, topLipY - h * 0.6,
    topLipX + mouthWidth/2, mLY  // Right corner
  );
  
  // Bottom edge (meeting line) - back to left corner
  bezierVertex(
    topLipX + mouthWidth/3, topLipY + h * 0.15,
    topLipX - mouthWidth/3, topLipY + h * 0.15,
    topLipX - mouthWidth/2, mRY  // Back to left corner
  );
  
  endShape(CLOSE);

  // BOTTOM LIP
  beginShape();
  // Left corner - use mRY to match top lip
  vertex(bottomLipX - mouthWidth/2, mRY);
  
  // Bottom left curve
  bezierVertex(
    bottomLipX - mouthWidth/3, bottomLipY + h * 0.8,
    bottomLipX - mouthWidth/6, bottomLipY + h,
    bottomLipX, bottomLipY + h * 0.9
  );
  
  // Bottom right curve
  bezierVertex(
    bottomLipX + mouthWidth/6, bottomLipY + h,
    bottomLipX + mouthWidth/3, bottomLipY + h * 0.8,
    bottomLipX + mouthWidth/2, mLY  // Right corner
  );
  
  // Top edge (meeting line) - back to left corner
  bezierVertex(
    bottomLipX + mouthWidth/3, bottomLipY + h * 0.15,
    bottomLipX - mouthWidth/3, bottomLipY + h * 0.15,
    bottomLipX - mouthWidth/2, mRY  // Back to left corner
  );
  
  endShape(CLOSE);
  
  pop();
}
  
  }
  
}

