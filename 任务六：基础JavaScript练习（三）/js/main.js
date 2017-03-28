window.onload=function(){
	//获取容器
	var container=document.getElementById("container");
	//点击左边进入
	document.getElementById("leftIn").onclick=function(){
	// 创造一个div节点
	var e=document.createElement("div");
		container.insertBefore(e,container.firstChild);
		//同时添加一个监听器，点击删除自己
		e.addEventListener("click",function(){
			e.remove();
		})
		//写入内容，获取textarea里面的值
		var text=document.getElementById("val");
		e.innerHTML=text.value;
		//再给一个样式，注意这个样式的opacity为0且X轴坐标为0
		e.className="leftOut";
		//JS貌似没有addclass只有更改样式,也许设置属性的方法也可以,这里用了异步函数setTimeout,延迟的给样式进行更换，
		//从而达到动画效果，这里的opacity为1，横坐标给一个数值，进行平移。
		setTimeout(function(){
			e.className="leftIn";
		},800)
	}
	//左边移出，第一步弹出窗口，第二步变回原来的class，第三步删除第一个子节点(左边的)
	document.getElementById("leftOut").onclick=function(){
		alert(container.firstChild.textContent);
		container.firstChild.className="leftOut";
		setTimeout(function(){container.removeChild(container.firstChild)},1200)
	}
	//接下来的同左边
	document.getElementById("rightIn").onclick=function(){
	var e=document.createElement("div");
		container.appendChild(e);
		e.addEventListener("click",function(){
			e.remove();
		})
		var text=document.getElementById("val");
		e.innerHTML=text.value;
		e.className="rightOut";
		setTimeout(function(){
			e.className="rightIn";
		},800)
	}
	document.getElementById("rightOut").onclick=function(){
		alert(container.lastChild.textContent);
		container.lastChild.className="rightOut";
		setTimeout(function(){container.removeChild(container.lastChild)},1200)
	}
	//搜索按键点击执行函数
	document.getElementById("search").onclick=function(){
		// 获取搜索框里的值
		var searchT=document.getElementById("searchT").value;
		//遍历所有
		for(let i=0;i<container.childNodes.length;i++){
			//字体都复原成白色
			container.childNodes[i].style.color="#fff";
			// x是返回搜索到的索引
			var x=container.childNodes[i].textContent.indexOf(searchT);
			// 当索引大于-1是将字体改成黑色
			if(x>-1){
				container.childNodes[i].style.color="black";
			}
		}
	}
}
