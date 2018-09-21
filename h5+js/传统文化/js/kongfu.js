	//    获得元素
		    var ul2 = document.getElementById('ul2')
		   // var ul3 = document.getElementById('ul3')
		    var ul2Li = ul2.children
		   // var ul3Li = ul3.children
		    var text3 = document.getElementsByClassName('text3')
		//    循环给ul2中的li元素注册事件
		    for(var i = 0;i<ul2Li.length;i++){
		//        给每个ul2Li元素自定义一个属性 储存值
		        ul2Li[i].index = i
		        ul2Li[i].onmouseover = function () {
		//            让所有的list1中的li变成dodgerblue
		            for(var j =0;j<ul2Li.length;j++){
		               ul2Li[j].style.background = 'dodgerblue';
		            }
		            this.style.background = 'goldenrod'
		// 样式设置为block			
		            for(var k = 0;k<ul2Li.length;k++){
		                //ul3Li[k].style.display = 'none'
		                text3[k].style.display = 'none'
		            }
		            //ul3Li[this.index].style.display = 'block'
		            text3[this.index].style.display = 'block'
		        }
		    }