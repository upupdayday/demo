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
var $ct = $('#content');
var $btn = $('#loadMore');
// var cur //当前要加载的数据的序号
var len = 6 // 每次加载多少个数据
var isLoading = false //状态锁，用于判断是否在加载数据

$btn.on('click', function(e) {
    var cur = $('#content').children('.ele').length + 1; //要加载的首序号

    if ($(this).data('isLoading')) { //获取一个状态锁
        return;
    }
    $(this).data('isLoading', true) //设置一个状态锁，防止在加载的数据回来之前用户多次点击
        .html('<img src="img/loading.gif" />'); //链式调用，换行也没关系，对齐好看些
    $.ajax({
        url: '/loadMore',
        dataType: 'json',
        type: 'get',
        data: {
            curIndex: cur,
            len: len
        },
        success: function(json) {
            onSuccess(json);
        },
        error: function() {
            onError();
        }
    })
})

function onSuccess(json) {
    $btn.data('isLoading', false)
        .text('加载更多');
    if (1 == json.status) {
        append(json.data);
    } else {
        alert('获取数据失败')
    }
}

function onError() {
    $btn.data('isLoading', false)
        .text('加载更多'); //链式调用，换行也没关系，对齐好看些
    alert('系统异常');
}


function append(arr) {
    for (var i = 0; i < arr.length; i++) {
        $ct.append('<li class="ele">' + arr[i] + '</li>')
    }
}

// btn.addEventListener('click', function loadMore(e) {
//     var target = e.target;
//     target.disabled = true;

//     if (isLoading) {
//         target.disabled = false;
//         return;
//     }

//     isLoading = true;
//     var temp = document.getElementsByClassName('ele');
//     var curIndex = temp.length + 1; //要加载的首序号

//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '/loadMore?curIndex=' + curIndex + '&len=' + len)
//     xhr.send();
//     xhr.addEventListener('load', function() {
//         if ((xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//             var data = JSON.parse(xhr.response)
//             for (var i = 0; i < data.length; i++) {
//                 var node = document.createElement('li');
//                 node.innerText = data[i];
//                 node.classList.add('ele');
//                 ct.appendChild(node);
//             }
//         } else {
//             e.stopPropagation();
//         }

//         isLoading = false;
//         target.disabled = false
//     })


// })