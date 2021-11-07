jQuery('.drawer-icon').on('click', function (e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('.drawer-icon__bar1').toggleClass('is-active');
  jQuery('.drawer-icon__bar2').toggleClass('is-active');
  jQuery('.drawer-icon__bar3').toggleClass('is-active');

  return false;
});


// ドロワーメニューのヘッダー内リンク押した後の処置(消す処置)
$('.drawer-content__item a[href]').on('click', function(event) {
  $('.drawer-icon').trigger('click');
});


// スムースscroll

jQuery('a[href^="#"]').on('click', function () {

  var header = jQuery('header').innerHeight() + 50;
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    var position = jQuery(id).offset().top - header;
  }

  jQuery('html,body').animate({
    scrollTop: position
  }, 300);

});

// トップscroll表示・表示

jQuery(window).on('scroll', function () {
  if (500 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});


jQuery('.header__nav li a').on('click', function () {
  jQuery('.header__nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

// wow
new WOW().init();

// contact送信関連

let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        // 送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        // 送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});

// // formの入力確認
let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea, #js-form option').on('change',function(){
  if(
    $('#js-form input[type="text"]').val() !=="" &&
    // 空ではない
    $('#js-form input[type="email"]').val() !=="" &&
    $('#js-form input[name="entry.408236689"]').prop('checked') === true
  ){
    // 全て入力されたとき
    $submit.prop('disabled', false)
    $submit.removeClass('-active')
  } else    {
    // 入力されていないとき
    $submit.prop('disabled',true)
    $submit.addClass('-active')
  }
})

// swiper


var mySwiper = new Swiper('.swiper-container', {
  // slidesOffsetBefore: 50,
  spaceBetween: 40,

	slidesPerView: 2.773,
  breakpoints:{
    768:{
      slidesPerView:1.3,
      spaceBetween:20,
    }
  },
  loop: true,
  loopedSlides:5,
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});



// Q＆A
jQuery('.qa-box__q').on('click',function(){
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});
