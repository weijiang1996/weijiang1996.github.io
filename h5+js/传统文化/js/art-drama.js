onload=function(){
	var box=document.getElementById('box')
	var ul=document.getElementById('ulimg')
	var ulLis=ul.children
	var arrLeft=document.getElementById('arrLeft')
	var arrRight=document.getElementById('arrRight')
	var ul2=document.getElementById('ulLeft');
	
//	轮播图
	var count=0;
//	设置轮播图定时器
	var timeId=setInterval(function(){
		count++;
		if(count==ulLis.length)
		count=0;
		changeImg(count)
	},1000)
	
//	鼠标移入轮播图清除定时器
	box.onmouseover=function(){
		clearInterval(timeId);
	}
//	鼠标移出重新启动定时器
	box.onmouseout=function(){
		timeId=setInterval(function(){
			count++;
			if(count==ulLis.length)
			count=0;
			changeImg(count)
		},1000)
	}
	
//	轮播图左右按键
	arrLeft.onclick=function(){
		count++;
		if(count==ulLis.length)
		count=0;
		changeImg(count)
	}
	arrRight.onclick=function(){
		count--;
		if(count<0)
		count=ulLis.length-1;
		changeImg(count)
	}
	
	//定义改变图片的函数
	function changeImg(num){
	for (var i=0;i<ulLis.length;i++) {
			ulLis[i].style.display='none';
		}
		ulLis[count].style.display='block';
	}
	

	
	
}








