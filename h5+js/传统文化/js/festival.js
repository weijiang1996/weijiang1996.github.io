		//    获得元素
		    var container = document.getElementById('container1')
		    var fest= container.children
		    var con = document.getElementsByClassName('container2')
		    for(var i = 0;i<5;i++){
		//        给每个元素自定义一个属性 储存值,注册单击事件
		       fest[i].index = i
		       fest[i].onclick = function () {
		// 样式设置为block			
		            for(var k = 0;k<5;k++){
		                con[k].style.display = 'none'
		            }
		            con[this.index].style.display = 'block'
		        }
		    }	