$('.tabs>li').on('click', function() {
    var $this = $(this)
    var index = $this.index()
    $this.addClass('active').siblings().removeClass('active')
    $this.parents('.mod_tab')
        .find('.panel').eq(index)
        .addClass('active').siblings().removeClass('active')
})

$('.product').on('mouseover', function() {
    var $this = $(this)
    $this.find('.cover').addClass('active')
})
$('.product').on('mouseout', function() {
    var $this = $(this)
    $this.find('.cover').removeClass('active')
})