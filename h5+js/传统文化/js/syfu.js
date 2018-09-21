var ol = document.getElementsByClassName('runImg_ol')[0]
var right = document.getElementsByClassName('right')[0]
var left = document.getElementsByClassName('left')[0]
var box = document.getElementsByClassName('runImg')[0]
var ul = document.getElementsByClassName('runImg_ul')[0]
var olLis = ol.children
var ulLis = ul.children
//   1.鼠标移入底部数字标志中 显示对应图片 相应数字标志显示为红色
for(var i = 0; i < olLis.length; i++) {
	//        给每个li设置值为i的属性
	olLis[i].setAttribute('index', i)
	olLis[i].onmouseover = function() {
		for(var j = 0; j < olLis.length; j++) {
			olLis[j].style.background = 'white'
			ulLis[j].style.display = 'none'
		}
		this.style.background = 'red'
		ulLis[this.getAttribute('index')].style.display = 'block'
		//            将当前元素的索引赋值给count
		count = this.getAttribute('index')
	}
}
//  点击左右按钮显示下一张和上一张
//  定义变量count 记住当前元素的下标
var count = 0;
//  开启定时器 自动播放下一张
var timeId = setInterval(function() {
	count++
	if(count == olLis.length) {
		count = 0
	}
	changeImg(count)
}, 1500)
//   鼠标移入清除定时器
box.onmouseover = function() {
	clearInterval(timeId)
}
//    鼠标移出重新开启定时器
box.onmouseout = function() {
	timeId = setInterval(function() {
		count++
		if(count == olLis.length) {
			count = 0
		}
		changeImg(count)
	}, 1500)
}
right.onclick = function() {
	count++
	if(count == olLis.length) {
		count = 0
	}
	changeImg(count)
}
left.onclick = function() {
	count--
	if(count < 0) {
		count = olLis.length - 1
	}
	changeImg(count)
}
function changeImg(num) {
	for(var i = 0; i < ulLis.length; i++) {
		ulLis[i].style.display = 'none'
		olLis[i].style.background = 'white'
	}
	ulLis[num].style.display = 'block'
	olLis[num].style.background = 'red'
}

//右侧滚动
var rol = document.getElementsByClassName('rigrun_ol')[0]
var rolis = rol.children
var rul = document.getElementsByClassName('rigrun_ul')[0]
var rulis = rul.children
var rrun = document.getElementsByClassName('rig_run')[0]
var rcount = 0

//右侧滚动的标题与内容连接起来，鼠标放到内容是显示对应的标题
for(var m = 0; m < rulis.length; m++) {
	//        给每个li设置值为i的属性
	rolis[m].setAttribute('syfubest', m)
	rolis[m].onmouseover = function() {
		for(var n = 0; n < rolis.length; n++) {
			rulis[n].style.background = 'none'
			rolis[n].style.display = 'none'
		}
		this.style.display = 'block'
		console.log(this.getAttribute('syfubest'))
		rulis[this.getAttribute('syfubest')].style.background = '#666666'
		//            将当前元素的索引赋值给rcount
		rcount = this.getAttribute('syfubest')
	}
	//鼠标放到标题时显示对应的内容
	rulis[m].setAttribute('syfu', m)
	rulis[m].onmouseover = function() {
		for(var o = 0; o < rulis.length; o++) {
			rulis[o].style.background = 'none'
			rolis[o].style.display = 'none'
		}
		this.style.background = '#666666'
		console.log(this.getAttribute('syfu'))
		rolis[this.getAttribute('syfu')].style.display = 'block'
		//            将当前元素的索引赋值给rcount
		rcount = this.getAttribute('syfu')
	}
}
//  开启定时器 自动播放下一张
var rtimeId = setInterval(function() {
	rcount++
	if(rcount == rolis.length) {
		rcount = 0
	}
	rchangeImg(rcount)
}, 1500)

//   鼠标移入清除定时器
rrun.onmouseover = function() {
	clearInterval(rtimeId)
}

//    鼠标移出重新开启定时器
rrun.onmouseout = function() {
	rtimeId = setInterval(function() {
		rcount++
		if(rcount == rolis.length) {
			rcount = 0
		}
		rchangeImg(rcount)
	}, 1500)
}
//变换图片函数
function rchangeImg(num) {
	for(var s = 0; s < rolis.length; s++) {

		rulis[s].style.background = 'none'
		rolis[s].style.display = 'none'
	}
	rulis[num].style.background = '#666666'
	rolis[num].style.display = 'block'
}