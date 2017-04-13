window.onload=function(){
	// 定义一个数组用来存放排好序的子元素，来进行循环变色
	var childLists=[];
	// 定义一个定时器
	var timer=null;
	// 点击事件
	bool=false;//设置为全局变量
	$("#preButton").onclick=function(){
		restColor();
		preOrder($("#tree"));
		changeColor();
	}
	$("#search").onclick=function(){
		restColor();
		preOrder($("#tree"));
		searchNode();
		//当所有元素遍历完成之后加1s再给出结果提示
		setTimeout("if(bool){alert('找到了')}else{alert('没找到')}",(childLists.length*500)+1000);
	}
	// 选择器
	function $(id){
		return document.querySelector(id);
	}
	// 初始化
	function restColor(){
		clearInterval(timer)/*清除定时器*/
		// for (var j=0;j<childLists.length;j++){
		// 	childLists[j].style.backgroundColor="#fff";
		// }
		childLists=[];/*清空数组*/
	}
	// 前序遍历
	function preOrder(node){
		if(!(node==null)){
			childLists.push(node);
			for(let i=0;i<node.children.length;i++){
				preOrder(node.children[i])
			}
		}
	}	
	//查找节点
	function searchNode(){
		var i=0;
		timer=setInterval(function(){
			if(i<childLists.length){
				if(i>0){
					childLists[i-1].style.backgroundColor="#fff";
				}
				childLists[i].style.backgroundColor="red";
				//只有当节点为文本节点时才能使用nodeValue,replace(/\s/g, "")可以去掉文字里的空格
				if(childLists[i].firstChild.nodeValue.replace(/\s/g, "")==$("#val").value){
					childLists[i].style.border="2px solid red";
					bool=true;
				}
			}else{
				clearInterval(timer);
				childLists[i-1].style.backgroundColor="#fff";
			}
			i++;
		},500)
	}
	//改变颜色
	function changeColor(){
		var i=0;
		timer=setInterval(function(){
			if(i<childLists.length){
				if(i>0){
					childLists[i-1].style.backgroundColor="#fff";
				}
				childLists[i].style.backgroundColor="red";
			}else{
				clearInterval(timer);
				childLists[i-1].style.backgroundColor="#fff";
			}
			i++;
		},500)
	}
	//获取所有节点
	var divs=document.getElementsByTagName("div");
	for(let i=0;i<divs.length;i++){
		//遍历所有节点，并添加点击事件
		divs[i].onclick=function(e){
			//如果该元素已被选中，那么点击后颜色变回默认值
			if(divs[i].style.borderColor=="green"){
				divs[i].style.borderColor="black"
			}else{
			divs[i].style.borderColor="green";}
			//阻止事件冒泡
			e.stopPropagation();
		}
	}
	//删除节点
	var deleteBtn=$("#delete");
	deleteBtn.onclick=function(){
		for(let i=0;i<divs.length;i++){
			if(divs[i].style.borderColor=="green"){
				//按钮点击后判断它的边框颜色是否为绿色，是就删除
				divs[i].parentNode.removeChild(divs[i]);
			}
		}
	}
	//添加节点
	var addBtn=$("#add");
	addBtn.onclick=function(){
		for(let i=0;i<divs.length;i++){
			if(divs[i].style.borderColor=="green"){
				//当节点被选中时，创建新的div节点
				var newNode=document.createElement("div");
				//给新节点一个边框样式
				newNode.style.border="1px solid black";
				//在里面写入input里的值
				newNode.innerHTML=$("#val").value;
				//append节点
				divs[i].appendChild(newNode);
				//给新节点加上点击函数
				newNode.onclick=function(e){
							if(newNode.style.borderColor=="green"){
								newNode.style.borderColor="black"
							}else{
							newNode.style.borderColor="green"}
							//阻止事件冒泡
							e.stopPropagation();
						}
			}
		}
	}
}

