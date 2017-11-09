/*悬浮样式*/
var ct = document.querySelector('#content');
ct.addEventListener('mouseover', function show(e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'li') {
        target.classList.add('hover');
    }
})

ct.addEventListener('mouseout', function remove(e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'li') {
        target.classList.remove('hover');
    }
})

/*点击加载*/
var xhr = new XMLHttpRequest();
var btn = document.querySelector('#loadMore');

/*function loadmore(e) {
    var target = e.target;
    target.disabled = true;

    var temp = document.getElementsByClassneme('ele');
    var liCnt = temp.length + 1;

    for (var i = 0; i < 5; i++) {
        xhr.open('GET', '/getWeather?index=' + liCnt, true)
        xhr.send();

        // 数据成功获得后，设置disabled为false，显示天气状态
        xhr.addEventListener('load', function() {
            var node = document.createElement('li');
            node.classList.add('ele');
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var resultObj = JSON.parse(xhr.responseText)
                node.innerText = resultObj.text;
                ct.appendChild(node);
            } else {
                e.stopPropagation();
            }
        })
        liCnt++;
    }

    btn.disabled = false
}*/


btn.addEventListener('click', function loadMore(e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'a') {
        console.log('1111****' + target);
        var node = document.createElement('li');
        node.classList.add('ele');
        console.log('222****' + target);
        ct.appendChild(node);
        console.log('333****' + target);
        console.log('444****' + target);
    }

    /*target.disabled = true;

    

    var temp = document.getElementsByClassneme('ele');
    var liCnt = temp.length + 1;

    for (var i = 0; i < 5; i++) {
        xhr.open('GET', '/getWeather?index=' + liCnt, true)
        xhr.send();

        // 数据成功获得后，设置disabled为false，显示天气状态
        xhr.addEventListener('load', function() {
            var node = document.createElement('li');
            node.classList.add('ele');
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var resultObj = JSON.parse(xhr.responseText)
                node.innerText = resultObj.text;
                ct.appendChild(node);
            } else {
                e.stopPropagation();
            }
        })
        liCnt++;
    }

    btn.disabled = false*/




})