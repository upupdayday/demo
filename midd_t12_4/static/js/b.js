/*悬浮样式*/
/*
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
})*/

/*点击加载*/
var ct = document.querySelector('#content');
var xhr = new XMLHttpRequest();
var btn = document.querySelector('#loadMore');
//var curIndex = 0 //当前要加载的数据的序号
var len = 5 // 每次加载多少个数据
var isLoading = false //状态锁，用于判断是否在加载数据

btn.addEventListener('click', function loadMore(e) {
    console.log("1")
    var target = e.target;
    target.disabled = true;

    console.log("2")

    if (isLoading) {
        target.disabled = false;
        return;
    }

    console.log("3")

    isLoading = true;
    var temp = document.getElementsByClassName('ele');
    var curIndex = temp.length + 1; //要加载的首序号

    console.log("4")

    xhr.open('GET', '/loadMore?curIndex=' + curIndex + '&len=' + len)
    xhr.send();

    console.log("5")

    xhr.addEventListener('load', function() {

        console.log("6")
            //xhr.readyState === 4 && 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

            console.log("7")

            var data = JSON.parse(xhr.response)
            console.log("****8****")
            for (var i = 0; i < data.length; i++) {
                console.log("9")
                var node = document.createElement('li');
                node.innerText = data[i];
                node.classList.add('ele');
                ct.appendChild(node);
            }

            console.log("10")
        } else {

            console.log("11")
            e.stopPropagation();
        }
    })

    /*xhr.onload = function() {
        console.log("6")
            //xhr.readyState === 4 && 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

            console.log("7")

            var data = JSON.parse(xhr.response)
            console.log("****8****")
            for (var i = 0; i < data.length; i++) {
                console.log("9")
                var node = document.createElement('li');
                node.innerText = data[i];
                node.classList.add('ele');
                ct.appendChild(node);
            }

            console.log("10")
        } else {

            console.log("11")
            e.stopPropagation();
        }
    }*/

    console.log("12")

    isLoading = false;
    target.disabled = false

    console.log("13")
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