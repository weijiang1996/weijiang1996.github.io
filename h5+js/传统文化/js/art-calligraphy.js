onload=function(){
	var box=document.getElementById('box')
	var ul=document.getElementById('ulimg')
	var ulLis=ul.children
	var arrLeft=document.getElementById('arrLeft')
	var arrRight=document.getElementById('arrRight')
	var ul2=document.getElementById('ulLeft');
	var ulLis2=ul2.children
	var bodydiv=document.getElementById('showBody').getElementsByTagName('div')
	var bottomdiv=document.getElementById('showBottom').getElementsByTagName('div')

//	轮播图
	var count=0;
	var timeId=setInterval(function(){
		count++;
		if(count==ulLis.length)
		count=0;
		changeImg(count)
	},1000)
	
	box.onmouseover=function(){
		clearInterval(timeId);
	}
	box.onmouseout=function(){
		timeId=setInterval(function(){
			count++;
			if(count==ulLis.length)
			count=0;
			changeImg(count)
		},1000)
	}
	
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
	
	
	function changeImg(num){
	for (var i=0;i<ulLis.length;i++) {
			ulLis[i].style.display='none';
		}
		ulLis[count].style.display='block';
	}
	
	
//	书法选项卡
	for (var i=0;i<ulLis2.length;i++) {
		ulLis2[i].index=i;
//		列表菜单注册鼠标移入事件,移入后更换书法相应模块
		ulLis2[i].onmouseover=function(){
			for (var j=0;j<bodydiv.length;j++) {
				if(j==this.index){
//					鼠标移入显示相应模块display block
					ulLis2[j].style.backgroundColor='#DEB887';
					bodydiv[j].style.display='block';
					bottomdiv[j].style.display='block'
				}
				
				else{
//					鼠标移出不显示相关模块display none
					ulLis2[j].style.backgroundColor='#e9e5d9';
					bodydiv[j].style.display='none';
					bottomdiv[j].style.display='none'
				}
				
			}
		}
	}
	
	
	
}








