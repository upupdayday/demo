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
var curIndex = 0 //当前要加载的数据的序号
var len = 5 // 每次加载多少个数据
var isLoading = false //状态锁，用于判断是否在加载数据

btn.addEventListener('click', function loadMore(e) {
    var target = e.target;
    target.disabled = true;

    if (isLoading) {
        target.disabled = false;
        return;
    }

    isLoading = true;
    var temp = document.getElementsByClassName('ele');
    var curIndex = temp.length + 1; //要加载的首序号

    xhr.open('GET', '/loadMore?curIndex=' + curIndex + '&len=' + len)
    xhr.send();

    xhr.addEventListener('load', function() {
        if ((xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            var data = JSON.parse(xhr.response)
            console.log("********")
            console.log(data)
            console.log(data.length)
            for (var i = 0; i < data.length; i++) {
                var node = document.createElement('li');
                node.innerText = data[i];
                node.classList.add('ele');
                ct.appendChild(node);
            }
        } else {
            e.stopPropagation();
        }
    })

    isLoading = false;
    target.disabled = false
})

/*function loadMore(e) {
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

    target.disabled = false
}*/



/*
    var handle(e) = function loadMore(e) {
        var target = e.target;
        if (target.tagName.toLowerCase() === 'button') {
            //console.log('1111****');
            var node = document.createElement('li');
            node.classList.add('ele');
            ct.appendChild(node);
            //console.log('222****');
            //console.log('333****');
            //console.log('444****');
        }
    }

    btn.addEventListener('click', handle(e))*/