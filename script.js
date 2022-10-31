$(document).ready(function() {
var sldr = $('.sldr'),
sldrContent = sldr.html(),
slideWidth = $('.sl_ctr').outerWidth(),
slideCount = $('.sldr .slic').length,
prv_b = $('.prv_b'),
nxt_b = $('.nxt_b'),
sldrInterval = 30000,
animateTime = 1000,
course = 1,
margin = - slideWidth;
$('.sldr .slic:last').clone().prependTo('.sldr');$('.sldr .slic').eq(1).clone().appendTo('.sldr');$('.sldr').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});
$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
		autoplay:true,
		draggable:false,
		pauseOnHover:true,
		arrows:false,
		autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
			},
			{
				breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
					
                }
            }
        ]
    });
});
$(document).ready(function () {
    $(".slider2").slick({
        infinite: true,
		autoplay:true,
		draggable:false,
		pauseOnHover:true,
		arrows:false,
		autoplaySpeed:3050,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
			},
			{
				breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
					
                }
            }
        ]
    });
});
function done() {
    document.getElementById('nick').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
	document.getElementById('tel').value= "";
    $('#check').prop('checked', false);
    localStorage.clear();
};

$(document).ready(function () {
    $('#formData').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'https://api.slapform.com/rukala@list.ru',
            dataType: "json",
            method: 'POST',
            data: {
                name: $('#nick').val(),
                email: $('#email').val(),
				tel:$('#tel').val(),
                message: document.getElementById('message').value,
                check: $('#check').is(':checked'),
                slap_captcha: false
            },
            success: function (response) {
                console.log('Got data: ', response);
                if (response.meta.status == 'success') {
         
                    alert("Успешная отправка формы!)");
                    done();
                } else if (response.meta.status == 'fail') {
         
                    alert("Ошибка!");
                    console.log('Submission failed with these errors: ', response.meta.errors);
                }
            }
        });
    });
});