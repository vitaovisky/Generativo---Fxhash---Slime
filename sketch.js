//CODE BY: PIXELGEN aka Vitones_Pixel

let bg = [];
let layer1 = [];
let layer2 = [];
let layer3 = [];
let layer4 = [];
let rbackground;
let rl1;
let rl2;
let rl3;
let rl4;



function preload(){
    
    for (var i=0; i<3; i++){
      bg[i] = loadImage('background/bg'+i+'.gif');
      layer1[i] = loadImage('layer1/layer1-'+i+'.gif');
    }
    
    for (var i=0; i<5; i++){
      layer2[i] = loadImage('layer2/layer2-'+i+'.gif');
      layer4[i] = loadImage('layer4/layer4-'+i+'.gif');
    }
  
    for (var i=0; i<4; i++){
      layer3[i] = loadImage('layer3/layer3-'+i+'.gif');
    }
  
    
}

function setup() {
  
    
  createCanvas(windowWidth, windowHeight);
  function rnd_btw(min, max) {return fxrand() * (max - min) + min;}   
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}   
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return         Math.floor(fxrand() * (max - min + 1)) + min;}
  rbackground = rnd_int(0,2);
  rl1 = rnd_int(0,2);
  rl2 = rnd_int(0,4);
  rl3 = rnd_int(0,3);
  rl4 = rnd_int(0,4);
  
}

function draw() {
  
  background(bg[rbackground], windowWidth, windowHeight);
  image(layer1[rl1], 0, 0, windowWidth, windowHeight);
  image(layer2[rl2], 0, 0, windowWidth, windowHeight);
  image(layer3[rl3], 0, 0, windowWidth, windowHeight);
  image(layer4[rl4], 0, 0, windowWidth, windowHeight);
}