				//获取元素
				var i= 0
				var ul1 = document.getElementsByClassName("ul2")[0];
				//设置定时器，设置left属性，自动向左移动，实现轮播
				setInterval(function(){
					i -=1
					if(i == -720){
						i=0
					}
					ul1.style.left=i+'px'
				},30)	
				
				var i= 0
				var ul2 = document.getElementsByClassName("ul2")[1];
				setInterval(function(){
					i -=1
					if(i == -720){
						i=0
					}
					ul2.style.left=i+'px'
				},30)
				
				var i= 0
				var ul3 = document.getElementsByClassName("ul2")[2];
				setInterval(function(){
					i -=1
					if(i == -720){
						i=0
					}
					ul3.style.left=i+'px'
				},30)