var products = [{
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金手 猴哥款',
    price: '￥405.00'
}, {
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金转运珠 猴哥款',
    price: '￥100.00'
}, {
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金手链 3D猴哥款',
    price: '￥45.00'
}];

function getProdHtml(prod) {
    var html = '';
    html += '<li class="product">'
    html += '<div class="cover">'
    html += '<a href="" class="getmore" >立即抢购</a>'
    html += '</div>'
    html += '<div class="content">'
    html += '<img src="' + prod.img + '" alt="">'
    html += '<div class="introduction">' + prod.name + '</div>'
    html += '<div class="price">' + prod.price + '</div>'
    html += '</div>'
    html += '</li>';
    return html;
}

$('#loadMore').on('click', function() {
    /*----------方法一：products_ct设高度，每添加一次，增加一次Product的高度和margin，20px*/
    //var height = parseInt($('.products_ct').css('height')) + parseInt($('.product').css('height')) + 20
    //$('.products_ct').css("height", height);
    /*------------------*/

    for (var i = 0; i < 3; i++) {
        var html = getProdHtml(products[i])
        $('.products_ct').append(html)
    }
})

/*新增的元素上没有绑定事件，每次都新增绑定过于繁琐，在容器上监听，用事件代理*/
$('.products_ct').on('mouseenter', '.product', function(e) {
    $(this).find('.cover').addClass('active')
});
$('.products_ct').on('mouseleave', '.product', function(e) {
    $(this).find('.cover').removeClass('active')
});

// $('.product').on('mouseover', function() {
//     console.log('1111')
//     var $this = $(this)
//     $this.find('.cover').addClass('active')
// })
// $('.product').on('mouseout', function() {
//     var $this = $(this)
//     $this.find('.cover').removeClass('active')
// })