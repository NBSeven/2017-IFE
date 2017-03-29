window.onload=function(){
	// 定义一个数组用来存放排好序的子元素，来进行循环变色
	var childLists=[];
	// 定义一个定时器
	var timer=null;
	// 点击事件
	$("#preButton").onclick=function(){
		restColor();
		preOrder($("#tree"));
		changeColor();
	}
	$("#inButton").onclick=function(){
		restColor();
		inOrder($("#tree"));
		changeColor();
	}
	$("#postButton").onclick=function(){
		restColor();
		preOrder($("#tree"));
		changeColor();
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
	// 先序遍历
	function preOrder(node){
		if(!(node==null)){
			childLists.push(node);
			preOrder(node.firstElementChild);
			preOrder(node.lastElementChild);
		}
	}
	// 中序遍历
	function inOrder(node){
		if(!(node==null)){
			inOrder(node.firstElementChild);
			childLists.push(node);
			inOrder(node.lastElementChild);
		}
	}
	//后序遍历
	function postOrder(node){
		if(!(node==null)){
			postOrder(node.firstElementChild);
			postOrder(node.lastElementChild);
			childLists.push(node);
		}
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
}
