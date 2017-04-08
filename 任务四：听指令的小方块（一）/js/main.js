window.onload=function(){
	var box=$("#box"),
		play=$("#play");
	//声明旋转方向不同的点击次数
	var	left=0,
		right=0,
		bac=0;

	//声明各个方向旋转的度数 及相加后真正的旋转度数
	var	rotatel=0,
		rotater=0,
		rotateb=0,
		rotate=rotatel+rotater+rotateb;
	//声明移动不同方向的距离次数
	var	gob=0,
		gor=0,
		gol=0,
		got=0;
	//声明向左 向右 向上 向下的距离；
	var     gleft=0,
		gright=0,
		gtop=0,
		gbottom=0;	

	function $(a){
		return document.querySelector(a);
	}
	var lbutton=$("#left"),
	    rbutton=$("#right"),
	    bbutton=$("#back"),
	    gbutton=$("#go");
	lbutton.onclick=function(){
			//每点击一次left+1
			left++;
			//向左转了几度
			rotatel=-90*left;
			//向左 向右 向后的度数全部加起来就是旋转的度数了。
			console.log(rotate=rotatel+rotater+rotateb);
			box.style.transform='rotate('+rotate+'deg)';
		}
		rbutton.onclick=function(){
			right++;
			rotater=90*right;
			console.log(rotate=rotatel+rotater+rotateb);
			box.style.transform='rotate('+rotate+'deg)';
		}
		bbutton.onclick=function(){
			bac++;
			rotateb=-180*bac;
			console.log(rotate=rotatel+rotater+rotateb);
			box.style.transform='rotate('+rotate+'deg)';
		}
		gbutton.onclick=function(){
			console.log(rotate=rotatel+rotater+rotateb);
			if((rotate%360)===0){
				got++;
				if(box.style.top=="0px"||box.style.top==0){
					alert("不能移动了");
					return
				}
				//向上移动的距离
				gtop=-40*got;
				//向上移动的距离和向下移动的距离相加就是总共移动的距离；
				box.style.top=gtop+gbottom+"px";
				// console.log(box.style.top)
			}
			if((rotate%360)===90||(rotate%360)===-270){
				gor++;
				if(box.style.left=="360px"){
					alert("不能移动了");
					return
				}
				gleft=40*gor;
				box.style.left=gleft+gright+"px";
				// console.log(box.style.left);	
			}
			if((rotate%360)===-90||(rotate%360)===270){
				gol++;
				if(box.style.left=="0px"||box.style.left==0){
					alert("不能移动了");
					return
				}
				gright=-40*gol;
				box.style.left=gleft+gright+"px";
				// console.log(box.style.left);		
			}
			if((rotate%360)===-180||(rotate%360)===180){
				gob++;
	
				if(box.style.top=="360px"){
					alert("不能移动了");
					return
				}
				gbottom=40*gob;
				box.style.top=gtop+gbottom+"px";
				// console.log(box.style.top)		
			}	
		}		
}
