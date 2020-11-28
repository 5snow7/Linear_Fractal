let shr=(3+Math.sqrt(5))/2;
function pentL(t, len,lev){
if(lev==0){t.fd(len);}
else{
t.lt(36);pentL(t,len/shr,lev-1);
t.lt(72);pentL(t,len/shr,lev-1);
t.rt(144);pentL(t,len/shr,lev-1);
t.rt(72);pentL(t,len/shr,lev-1);
t.lt(72);pentL(t,len/shr,lev-1);
t.lt(72);pentL(t,len/shr,lev-1);
t.rt(36);
}
}
let srt=Math.sqrt(2);

function bLeaf(t,len,lev){
	if(lev<1){t.fd(2*len);t.bk(2*len);}
	else{t.fd(len);
	bLeaf(t,len/2,lev-2);
	t.bk(len);t.lt(45);
	bLeaf(t,len/srt,lev-1);
	t.rt(90);
	bLeaf(t,len/srt,lev-1);
t.lt(45);}
}

function sd(t,len,lev,p){
	if(lev==0){t.fd(len)}
	else{
		t.lt(60*p);sd(t,len/2,lev-1,p*(-1));
        t.rt(60*p);sd(t,len/2,lev-1,p);
        t.rt(60*p);sd(t,len/2,lev-1,p*(-1));
        t.lt(60*p);
		}
}

function Ngon(t, len,lev){
	if(lev==0){sd(t,50,3,1);}//t.fd(len);}
	else{
	Ngon(t,len/3,lev-1);t.lt(90);	
	Ngon(t,len/3,lev-1);t.rt(90);
	Ngon(t,len/3,lev-1);t.rt(90);
	Ngon(t,len/3,lev-1);t.rt(90);
	Ngon(t,len/3,lev-1);t.lt(90);
	Ngon(t,len/3,lev-1);t.lt(90);
	Ngon(t,len/3,lev-1);t.lt(90);
	Ngon(t,len/3,lev-1);t.rt(90);
	Ngon(t,len/3,lev-1);
	}
}

function hilbert(t,len,lev,p){
	if(lev==0){}
	else{
		t.lt(p*90);hilbert(t,len,lev-1,-1*p);t.fd(len);
		t.rt(p*90);hilbert(t,len,lev-1,p);t.fd(len);
		hilbert(t,len,lev-1,p);t.rt(p*90);
		t.fd(len);hilbert(t,len,lev-1,-1*p);t.lt(p*90);
	}
}

function siepTri(t,len,lev){
	if(lev==0){}
	else{
		siepTri(t,len/2,lev-1);t.fd(len);t.rt(120);
		siepTri(t,len/2,lev-1);t.fd(len);t.rt(120);
		siepTri(t,len/2,lev-1);t.fd(len);t.rt(120);
		}
}

function C(t,len,lev){
	if(lev==0){t.fd(len);}
	else{
	C(t,len,lev-1);t.lt(90);
    C(t,len,lev-1);t.rt(90);	
	}
}
let ang=5;

function spin(t,len,total){
	if(total>800){}
	else{if(ang>360){ang=0;}
	   ang+=3.7;t.fd(len);t.rt(ang);spin(t,len,total+1);

}}

function test1(){
	clear_Can();
	let num=document.getElementById("num1").value;
	let numb=Math.floor(num);
	switch(numb){
		case 1:
		tS.set1(100,400,0);pentL(tS,500,4);break;
		case 2:tS.set1(400,400,-90);bLeaf(tS,150,8);break;
		case 3:tS.set1(200,470,0);sd(tS,500,7,1);break;
		case 4:tS.set1(400,500,-90);Ngon(tS,200,2);break;
		case 5:tS.set1(700,470,-90);hilbert(tS,10,6,1);break;
		case 6:tS.set1(200,470,-60);siepTri(tS,500,6);break;
		case 7:tS.set1(500,400,0);C(tS,6,11);break;
		case 8:tS.set1(250,100,0);spin(tS,15,0);break;
	}
	
}
//pentL(tS,600,5);
//bLeaf(tS,100,9);
//sd(tS,200,3,1);
//Ngon(tS,250,2);
//hilbert(tS,10,6,1)6;
//siepTri(tS,200,5);
//C(tS,3,13);
