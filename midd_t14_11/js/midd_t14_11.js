$('.tabs li').on('click', function() {
    var $this = $(this)
    var index = $this.index()
    var panelWidth = $('.panel').width()

    $this.addClass('active').siblings().removeClass('active')
    $this.parents('.mod_tab').find('.panels_ct')
        .animate({ left: -panelWidth * index })
})