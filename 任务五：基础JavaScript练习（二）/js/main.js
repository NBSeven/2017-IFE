// 网页加载完后加载函数
window.onload=function(){
	// 插入排序函数
	function sort(arr) {
	  if(arr.length <= 1) {
	    return arr
	  }
	  for(var i=0; i<arr.length; i++) {
	    for(var j=i-1; j>=0; j--) {
	      if(arr[j+1].style.height < arr[j].style.height) {
	        var temp = arr[j+1].style.height;
	        arr[j+1].style.height = arr[j].style.height;
	        arr[j].style.height = temp
	      }
	    }
	  }
	};
	
	// 声明变量,获取容器
	var container=document.getElementById("container");
	// 当左侧入被点击时执行函数
	document.getElementById("leftIn").onclick=function(){
		// 获取所有节点
		var conChildNodes=container.childNodes;
		// 判断节点数量是否大于60
		if(conChildNodes.length>60){
			alert("最多添加60个数据！")
		}else{
			// 获取input里的值
			var count=document.getElementById("val").value;
			// 判断是否属于11~99之间
			if(count>10 && count<100){
			// 创造一个div元素
			var e=document.createElement("div");
			// 添加子节点
			container.appendChild(e);
			// 给子节点添加监听器 点击函数
			e.addEventListener("click",function(){
				e.remove();
			})
			// 在节点里写入内容 input里的值
			// e.innerHTML=count;
			//给子节点一个样式，首先是透明的，且位置没有发生变化
			e.className="leftOut";
			e.style.height=count+"px"
			// 通过异步函数设置在800毫秒之后，变换样式，透明度改为1，位置也做相应修改，有一种进入动画的效果
			setTimeout(function(){
				e.className="leftIn";
			},800)
			// 进行排序
			// sort(conChildNodes)
			}
			else{
				alert("请输入大于10，小于100的数")
			}
		}	
	}
		// 点击左侧出
	document.getElementById("leftOut").onclick=function(){
	// 首先弹出子节点的值
	alert(container.firstChild.style.height);
	// 样式让它变回去又会有退回去的动画
	container.firstChild.className="leftOut";
	// 在退回动画后,再移除这个子节点
	setTimeout(function(){container.removeChild(container.firstChild)},1200)
	}
	
	document.getElementById("rightIn").onclick=function(){
		var conChildNodes=container.childNodes;
		if(conChildNodes.length>60){
			alert("最多添加60个数据！")
		}else{
			var e=document.createElement("div");
			var count=document.getElementById("val").value;
			if(count>10 && count<100){
				container.appendChild(e);
				e.addEventListener("click",function(){
					e.remove();
				})	
				e.className="rightOut";
				e.style.height=count+"px"
				setTimeout(function(){
					e.className="rightIn";
				},800)
				// sort(conChildNodes);
			}else{
				alert("请输入大于10，小于100的数")
			}
		}	
	}
	document.getElementById("rightOut").onclick=function(){
		alert(container.lastChild.style.height);
		container.lastChild.className="rightOut";
		setTimeout(function(){container.removeChild(container.lastChild)},1200)
	}
	document.getElementById("paixu").onclick=function(){
		var conChildNodes=container.childNodes;
		sort(conChildNodes);
	}
	document.getElementById("suiji").onclick=function(){
		for(var i=0;i<20;i++){
			var ndiv=document.createElement("div");
			ndiv.setAttribute('class','suiji');
			ndiv.style.height=Math.floor(Math.random()*90+10)+"px";
			container.appendChild(ndiv);
		}
	}
}
