onload=function(){
	var box=document.getElementById('box')
	var ul=document.getElementById('ulimg')
	var ulLis=ul.children
	var arrLeft=document.getElementById('arrLeft')
	var arrRight=document.getElementById('arrRight')
	var ul2=document.getElementById('ulLeft');
	var painmenu1=document.getElementById('painmenu1')
	var painmenu2=document.getElementById('painmenu2')
	var painmenu3=document.getElementById('painmenu3')
	var spans=document.getElementById('menufu').getElementsByTagName('span')
	var painmenu=document.getElementById('menufu').getElementsByTagName('div');
	var count=0;
	
	//	轮播图
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
	

//	国画分类的选项列表
	for (var i=0;i<painmenu.length;i++) {
		painmenu[i].index=i;
//		鼠标移入阴影效果
		painmenu[i].onmouseover=function(){
			this.style.boxShadow="-5px 5px 3px gray"
			spans[this.index].style.bottom='30px'
		}
//		鼠标移出阴影效果消失
		painmenu[i].onmouseout=function(){
			this.style.boxShadow="none"
			spans[this.index].style.bottom='10px'
		}
	}
	
	
	
}








