// zoom_function
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
        width: (100 + scroll / 5) + "%"
	})
})