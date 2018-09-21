function moveTo (obj,target) {
    // 每次只开一个定时器
    clearInterval(obj.timeId)
    obj.timeId = setInterval(function () {
//            设置每次变化的值
        var step = 20;
//            获得当期位置
        var now = obj.offsetLeft
//            如果目标位置大于当前位置 变化值取相反数
        if(target<now){
            step = -step
        }
//            如果目标位置距离当前位置小于一个变化值的长度
        if(Math.abs(target-now)<Math.abs(step)){
//                清除定时器 设置位置为目标值
            clearInterval(obj.timeId)
            obj.style.left = target + 'px'
        }else {
//                将目前位置加上变化值 设置给元素
            now += step
            obj.style.left = now + 'px'
        }
    },10)
}
