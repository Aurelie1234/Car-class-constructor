class Car {

constructor(cColor, x, y, size){
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.size = 75;
  }

  start(speed) {
    this.speed = speed;
  }

  display(){ 
noStroke();
fill(this.color);
rect(this.x+13, this.y+10, this.size-16, this.size/4);
fill("black");
circle(this.x + 24, this.y + 32, this.size / 5);
circle(this.x + 62, this.y + 32, this.size / 5);
fill(this.color);
rect(this.x+29, this.y-6, this.size/2.5, this.size/4.5);
  }

move(){
	this.x += this.speed;
    if (this.x < -60) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -60;
    }
  }
} 


function setup() {
	createCanvas(520, 500);
	frameRate(32); // Slower frame rate
	
	blueCar = new Car("blue", 0, 450);  
  redCar = new Car("red", 200, 400); 
	greenCar = new Car ("#009933" , 130, 450);
  darkblueCar = new Car ("#00334d", 70, 400);
  orangeCar = new Car ("#ff6600", -60, 400);
	pinkCar = new Car ("#ff6699", 260 , 450);
	lightbrownCar = new Car ("#996633", 330, 400);
	purpleCar = new Car ("#9900cc", 390, 450);
  

  //number is the speed
  blueCar.start(-5);
  redCar.start(5);
	greenCar.start(-5);
	darkblueCar.start(5);
	orangeCar.start(5);
	pinkCar.start(-5);
	lightbrownCar.start(5);
	purpleCar.start(-5);
	
}

function draw() {	
	
background('#6699ff');
noStroke();
fill('#006699');
triangle(450,15,465,55,435,55);
fill('#ffcc00');
rect(435,55,30,20);
fill('#006699');
quad(435,75,465,75,475,100,425,100);
fill('#ffcc00');
rect(425,100,50,20);
square(420,120,60);
	
fill('white');
circle(450,150,54);
	
fill('#ffcc00');
	
rect(425,180,50,220);
rect(375,280,50,120);
rect(325,240,50,160);
rect(205,270,150,130);
rect(155,240,50,160);
	
fill('#006699');
quad(385,260,415,260,425,280,375,280);
quad(335,210,365,210,375,240,325,240);
quad(215,250,315,250,325,270,205,270);
quad(165,210,195,210,205,240,155,240);

fill('#ff6666');
rect(80,240,75,160);
	
fill('#33334d');
quad(90,210,145,210,155,240,80,240);
	
fill('#ffa31a');
rect(15,310,65,90);

fill('#33334d');
quad(25,280,70,280,80,310,15,310);

fill('#4d3219');
rect(485,370,4,30);
rect(505,370,4,30);	 
	
fill('#99cc00');
ellipse(487,360,22,35);
fill('#00cc44');
ellipse(507,360,23,40);

fill('#b3b3cc');
rect(0,400,width,100);
	
fill('#3f3f5a');
rect(0,400,width,10);	

fill('white');
for(let posX = 0; posX < 18; posX++){
rect(posX * 30 , 450, 20, 5);
}	

fill('#3333cc');
for(let posX = 0; posX < 2; posX++){
for(let posY = 0; posY < 2; posY++){
rect(posX * 25 + 28, posY * 35 + 320, 15, 20); 
}
  }
	
for(let posX = 0; posX < 3; posX++){
for(let posY = 0; posY < 4; posY++){
rect(posX * 25 + 85, posY * 35 + 250, 15, 20); 
}
  }	
	
fill('#000000');
for(let posX = 0; posX < 3; posX++){
for(let posY = 0; posY < 3; posY++){
rect(posX * 8 + 170, posY * 40 + 250, 3, 30); 
}
  }

stroke('black');
line(450,150,460,140);
line(450,150,450,130);

noStroke();
fill('#000000');
for(let posX = 0; posX < 2; posX++){
for(let posY = 0; posY < 2; posY++){
rect(posX * 8 + 220, posY * 40 + 290, 3, 30); 
}
  }
	
for(let posX = 0; posX < 2; posX++){
for(let posY = 0; posY < 2; posY++){
rect(posX * 8 + 260, posY * 40 + 290, 3, 30); 
}
  }

for(let posX = 0; posX < 2; posX++){
for(let posY = 0; posY < 2; posY++){
rect(posX * 8 + 300, posY * 40 + 290, 3, 30); 
}
  }
	
for(let posX = 0; posX < 3; posX++){
for(let posY = 0; posY < 3; posY++){
rect(posX * 8 + 340, posY * 40 + 250, 3, 30); 
}
  }

for(let posX = 0; posX < 2; posX++){
for(let posY = 0; posY < 2; posY++){
rect(posX * 8 + 395, posY * 40 + 290, 3, 30); 
}
  }
	
for(let posX = 0; posX < 5; posX++){
for(let posY = 0; posY < 5; posY++){
rect(posX * 8 + 432, posY * 42 + 190, 3, 30); 
}
  }
	
for(let posX = 0; posX < 6; posX++){
rect(posX * 8 + 428, 108, 4, 12);
}	

for(let posX = 0; posX < 4; posX++){
rect(posX * 8 + 436, 60, 4, 15);
}	

for(let posX = 0; posX < 8; posX++){
rect(posX * 34 + 168, 380, 15, 20);
}

fill("#ffad33");
circle(150,70,60);
	
blueCar.display();
redCar.display();
greenCar.display();
darkblueCar.display();
orangeCar.display();
pinkCar.display();
lightbrownCar.display();
purpleCar.display();
 
blueCar.move();
redCar.move();
greenCar.move();
darkblueCar.move();
orangeCar.move();
pinkCar.move();
lightbrownCar.move();
purpleCar.move();
	
}








