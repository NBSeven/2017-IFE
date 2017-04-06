window.onload=function(){
	var box=document.getElementById("box");
	var play=document.getElementById("play");
	var left=0;
	var right=0;
	var bac=0;
	var go=0;
	play.onclick=function(){
		// box.style.left=40*num+'px';
		// box.style.transform='rotate('+90*num+'deg)';
		// 也可以用switch
		if(val.value=="TUN RIG"){
			right++;
			box.style.transform='rotate('+90*right+'deg)';
		}
		if(val.value=="TUN LEF"){	
			left++;
			box.style.transform='rotate('+-90*left+'deg)';
		}
		if(val.value=="TUN BAC"){	
			bac++;
			box.style.transform='rotate('+-180*bac+'deg)';
		}
		if(val.value=="GO"){
		// 待完成	
			
		}
	}
}