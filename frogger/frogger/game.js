var frogx;
var frogy;
var drawn_frog;
var carsX;
var carsY;
var carsX2;
var carsY2;
var carsX3;
var carsY3;
var carsX4;
var carsY4;
var logx;
var lifeX1;
var lifeX2;
var lifeX3;
var lifeY1;
var lifeY2;
var lifeY3;
var lives;
var yCuttoff;
var log1Ride;
var log2Ride;
var log3Ride;
var log4Ride;
var log5Ride;
var log6Ride;
var log7Ride;
var log8Ride;
var log9Ride;



function game_start(){
canvas = document.getElementById("game");
frogx= 180;
frogy= 480;
lives= 3;
time=60;
game_over= false;
level= 1;
score=0;
hScore=0;
logx=240;
logy=245;
logx2=250;
logy2=155;
logx3=60;
logy3=125;
logx4=230;
logy4=215;
logx5=-10;
logy5=215;
logx6=-20;
logy6=95;
logx7=10;
logy7=245;
logx8=200;
logy8=185;
logx9=30;
logy9=155;
logx10=206;
logy10=95;
logx11=280;
logy11=125;
logx12=10;
logy12=185;

carsX=100;
carsY=450;
carsX2=40;
carsY2=420;
carsX3=60;
carsY3=330;
carsX4=190;
carsY4=300;
carSpeed=20;
logSpeed=25;
count=0;
lifeX1= 305;
lifeX2= 325;
lifeX3= 345;
lifeY1= 528;
lifeY2= 528;
lifeY3= 528;
cutoff=480;
homeFree1=false;
homeFree2=false;
homeFree3=false;
homeFree4=false;
homeFree5=false;
dead=false;
}

function homeCheck(){


	if (frogx<=22 && frogx>=2){
		if (frogy==60){
			homeFree1=true;
			score=score+40;
			frogx= 180;
			frogy= 480;
			cutoff=480;
		}
	}
	if (frogx<=106 && frogx>=86){
		if (frogy==60){
			homeFree2=true;
			score=score+40;
			frogx= 180;
			frogy= 480;
			cutoff=480;
		}
	}
	if (frogx<=190 && frogx>=170){
		if (frogy==60){
			homeFree3=true;
			score=score+40;
			frogx= 180;
			frogy= 480;
			cutoff=480;
		}
	}
	if (frogx<=274 && frogx>=254){
		if (frogy==60){
			homeFree4=true;
			score=score+40;
			frogx= 180;
			frogy= 480;
			cutoff=480;
		}
	}
	if (frogx<=358 && frogx>=338){
		if (frogy==60){
			homeFree5=true;
			score=score+40;
			frogx= 180;
			frogy= 480;
			cutoff=480;
		}
	}
	if(homeFree1==true && homeFree2==true && homeFree3==true && homeFree4==true && homeFree5==true){
	score=score+960;
	level=level+1;
	alert("LEVEL 2");
	frogx= 180;
	frogy= 480;
	cutoff=480;
	homeFree1=false;
	homeFree2=false;
	homeFree3=false;
	homeFree4=false;
	homeFree5=false;
	
	}
}
function collision_check(){
	collision=false;
	log1Ride=false;
	log2Ride=false;
	log3Ride=false;
	log5Ride=false;
	log7Ride=false;
	log8Ride=false;
	log10Ride=false;
	dead=false;
	
	//Cars
	if (frogx>= (carsX-15) && frogx<=(carsX+15)){
		if (frogy>= (carsY-10) && frogy<=(carsY+10)){
			collision=true;
		}
	}
	
	if (frogx>= (carsX2-15) && frogx<=(carsX2+15)){
		if (frogy>= (carsY2-10) && frogy<=(carsY2+10)){
			collision=true;
		}
	}
	
	if (frogx>= (carsX3-15) && frogx<=(carsX3+15)){
		if (frogy>= (carsY3-10) && frogy<=(carsY3+10)){
			collision=true;
		}
	}

	if (frogx>= (carsX4-15) && frogx<=(carsX4+15)){
		if (frogy>= (carsY4-10) && frogy<=(carsY4+10)){
			collision=true;
		}
	}
	if (frogx>= (logx4-15) && frogx<=(logx4+15)){
		if (frogy>= (logy4-10) && frogy<=(logy4+10)){
			collision=true;
		}
	}
	if (frogx>= (logx6-15) && frogx<=(logx6+15)){
		if (frogy>= (logy6-10) && frogy<=(logy6+10)){
			collision=true;
		}
	}
	if (frogx>= (logx9-15) && frogx<=(logx9+15)){
		if (frogy>= (logy9-10) && frogy<=(logy9+10)){
			collision=true;
		}
	}
	if (frogx>= (logx11-15) && frogx<=(logx11+15)){
		if (frogy>= (logy11-10) && frogy<=(logy11+10)){
			collision=true;
		}
	}
	if (frogx>= (logx12-15) && frogx<=(logx12+15)){
		if (frogy>= (logy12-10) && frogy<=(logy12+10)){
			collision=true;
		}
	}
	
	//Water
	if (frogy>= 90 && frogy<=240){
		if (frogx>= (logx-5) && frogx<=(logx+100)){
			if (frogy>=(logy-5) && frogy<=(logy+5)){
				log1Ride=true;
			}
		}
		if (frogx>= (logx2-5) && frogx<=(logx2+100)){
			if (frogy>= (logy2-5) && frogy<=(logy2+5)){
				log2Ride=true;
			}
		}
		if (frogx>= (logx3-5) && frogx<=(logx3+100)){
			if (frogy>= (logy3-5) && frogy<=(logy3+5)){
				log3Ride=true;
			}
		}
		if (frogx>= (logx5-5) && frogx<=(logx5+100)){
			if (frogy>= (logy5-5) && frogy<=(logy5+5)){
				log5Ride=true;
			}
		}
		
		if (frogx>= (logx7-5) && frogx<=(logx7+100)){
			if (frogy>= (logy7-5) && frogy<=(logy7+5)){
				log7Ride=true;
			}
		}
		if (frogx>= (logx8-5) && frogx<=(logx8+100)){
			if (frogy>= (logy8-5) && frogy<=(logy8+5)){
				log8Ride=true;
			}
		}

		if (frogx>= (logx10-5) && frogx<=(logx10+100)){
			if (frogy>= (logy10-5) && frogy<=(logy10+5)){
				log10Ride=true;
			}
		}

		
		if(log1Ride==false && log2Ride==false && log3Ride==false&& log5Ride==false  && log7Ride==false && log8Ride==false && log10Ride==false){
		collision=true;
		}
	}
	
	if(log1Ride){
	frogx=frogx+21;
	}
	if(log2Ride){
	frogx=frogx-21;
	}
	if(log3Ride){
	frogx=frogx+21;
	}
	if(log5Ride){
	frogx=frogx-21;
	}
	if(log7Ride){
	frogx=frogx+21;
	}
	if(log8Ride){
	frogx=frogx+21;
	}
	if(log10Ride){
	frogx=frogx-21;
	}
	
	
	if(collision){
		lives=lives-1;
		if (lives==2){
		lifeX1=600;
		lifeY1=600;
		}
		if (lives==1){
		lifeX2=600;
		lifeY2=600;
		}
		if (lives==0){
		lifeX3=600;
		lifeY3=600;
		alert("GAME OVER");
		lifeX1= 305;
		lifeX2= 325;
		lifeX3= 345;
		lifeY1= 528;
		lifeY2= 528;
		lifeY3= 528;
		cutoff=480;
		frogx=180;
		frogy=480
		hScore=score;
		score=0;
		homeFree1=false;
		homeFree2=false;
		homeFree3=false;
		homeFree4=false;
		homeFree5=false;
		}
		dead=true;
	}

}
function position_update(){
	if (carsX4>380){
	carsX4=-20;
	}
	if (carsX3<-21){
	carsX3=380;
	}
	if (carsX2>380){
	carsX2=-20;
	}
	if (carsX<-21){
	carsX=380;
	}
	if (logx>380){
	logx=-20;
	}
	if (logx2<-21){
	logx2=380;
	}
	if (logx3>380){
	logx3=-20;
	}
	if (logx4<-21){
	logx4=380;
	}
	if (logx5<-21){
	logx5=380;
	}
	if (logx6<-21){
	logx6=380;
	}
	if (logx7>380){
	logx7=-20;
	}
	if (logx8>380){
	logx8=-20;
	}
	if (logx9<-21){
	logx9=380;
	}
	if (logx10<-21){
	logx10=380;
	}
	if (logx11>380){
	logx11=-21;
	}
	if (logx12>380){
	logx12=-20;
	}
	
	
	carsX= carsX - 20;
	carsX2= carsX2 + 20;
	carsX3= carsX3 - 20;
	carsX4= carsX4 + 20;
	logx= logx + 21; 
	logx2= logx2 - 21; 
	logx3= logx3 + 21; 
	logx4= logx4 - 21; 
	logx5= logx5 - 21; 
	logx6= logx6 - 21; 
	logx7= logx7 + 21; 
	logx8= logx8 + 21; 
	logx9= logx9 - 21; 
	logx10= logx10 - 21; 
	logx11= logx11 + 21; 
	logx12= logx12 + 21; 
	
}

function object_animation(){
	if(level==1){
	setInterval(position_update, 750);
	setInterval(repaint, 750);
	}
	if(level==2){
	setInterval(position_update, 300);
	setInterval(repaint, 300);
	}
	}

 
$(document).keydown(function(e){
    move = false;
    x = frogx;
    y = frogy;
	
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    switch(keycode){
        case 37:
            move = true;
			if(log1Ride==true || log3Ride==true || log7Ride==true || log8Ride==true){
            x = (frogx - 36);
			}
			else{
			x=(frogx-21);
			}
        break;
        case 38:
            move = true;
            y = (frogy - 30);
			if(y<cutoff){
			cutoff=cutoff-30;
			score=score+10;
			}
        break;
        case 39:
			move = true;
			if(log2Ride==true || log5Ride==true || log9Ride==true || log10Ride==true){
			x=(frogx+36);
			}
			else{
			x=(frogx+21);
			}
        break;
        case 40:
            move = true;
            y = (frogy + 30);
        break;
    }
     if(move){
         animation_move(x,y);
     }
	e.preventDefault()
    return false;
})

function animation_move(newX, newY){
frogx=newX;
frogy=newY;
repaint();


}

function footer(){
var c=document.getElementById("game");
var ctx=c.getContext("2d");
ctx.font="14px Georgia";
ctx.fillStyle="#99FF33";
ctx.fillText("Score " +  score,4,540);
ctx.fillText("High Score " +  hScore,80,540);
ctx.fillText("Level " +  level,190,540);
}
function road() {
canvas = document.getElementById("game");
 if (canvas.getContext){
	    ctx = canvas.getContext('2d');
	    ctx.fillStyle = "rgb(0, 0, 0)";
	    ctx.fillRect (2, 290, 395, 290);    
	    ctx.stroke();
		
		ctx.fillStyle = "#191970";
	    ctx.fillRect (2, 0, 395, 290);    
	    ctx.stroke();
	}
	else {
	       alert('Sorry, canvas is not supported on your browser!');
	     }
}
function frogger_title() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,0,0,395,100,2,0,395,100);
}

function home() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,50,50,24,30,17,70,24,30);
	ctx.drawImage(img,50,50,24,30,102,70,24,30);
	ctx.drawImage(img,50,50,24,30,187,70,24,30);
	ctx.drawImage(img,50,50,24,30,272,70,24,30);
	ctx.drawImage(img,50,50,24,30,357,70,24,30);
}

function life() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,10,333,30,30,lifeX1,lifeY1,20,20);
	ctx.drawImage(img,10,333,30,30,lifeX2,lifeY2,20,20);
	ctx.drawImage(img,10,333,30,30,lifeX3,lifeY3,20,20);
	
}

function purple1() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,0,120,395,40,2,277,395,40);
}

function purple2() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,0,120,395,40,2,485,395,40);
}
function init(){
 road(); 
 frogger_title(); 
 purple1(); 
 purple2(); 
 logs(); 
 footer(); 
 life();
 home();
 frogUP(); 
 cars(); 
}

function repaint() {
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width, canvas.height);
	collision_check();
	homeCheck();
	init();
	
}

function deadFrog(){
	img=document.getElementById("dead_frog");
	ctx.drawImage(img,0,0,24,30, frogx, frogy-10,50,50);
}

function frogUP() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	
	if(dead==false){
	img=document.getElementById("frogboy");
	ctx.drawImage(img,10,359,30,30, frogx, frogy,42,40);
	}
	if(dead==true){
	deadFrog();
	frogx= 180;
	frogy= 480;
	}
	
	if (homeFree1){
	ctx.drawImage(img,10,359,30,30,12,60,42,40);
	}
	if (homeFree2){
	ctx.drawImage(img,10,359,30,30,96,60,42,40);
	}
	if (homeFree3){
	ctx.drawImage(img,10,359,30,30,180,60,42,40);
	}
	if (homeFree4){
	ctx.drawImage(img,10,359,30,30,264,60,42,40);
	}
	if (homeFree5){
	ctx.drawImage(img,10,359,30,30,348,60,42,40);
	}
	
}

function cars() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,0,254,42,40,carsX,carsY,42,40);
	ctx.drawImage(img,0,254,42,40,carsX2,carsY2,42,40);
	ctx.drawImage(img,160,200,60,40,carsX3,carsY3,60,40);
	ctx.drawImage(img,0,254,42,40,carsX4,carsY4,42,40);
}

function logs() { 
	canvas =document.getElementById("game");
	ctx=canvas.getContext('2d');
	img=document.getElementById("frogboy");
	ctx.drawImage(img,0,190,150,30,logx,logy,150,30);
	ctx.drawImage(img,0,190,120,30,logx2,logy2,120,30);
	ctx.drawImage(img,0,190,120,30,logx3,logy3,120,30);
	ctx.drawImage(img,0,400,120,30,logx4,logy4,120,30);
	ctx.drawImage(img,0,190,100,30,logx5,logy5,100,30);
	ctx.drawImage(img,0,400,120,30,logx6,logy6,120,30);
	ctx.drawImage(img,0,190,150,30,logx7,logy7,150,30);
	ctx.drawImage(img,0,190,100,30,logx8,logy8,100,30);
	ctx.drawImage(img,0,400,120,30,logx9,logy9,120,30);
	ctx.drawImage(img,0,190,100,30,logx10,logy10,100,30);
	ctx.drawImage(img,160,330,120,30,logx11,logy11,120,30);
	ctx.drawImage(img,160,330,120,30,logx12,logy12,120,30);

}


