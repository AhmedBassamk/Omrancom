$(document).ready(($)=>{
  $('.count-number').counterUp({
    delay: 10,
    time: 10000
});
    window.onscroll = function() {
   if (window.scrollY >= '30') {
     console.log('_warning_');
     $('.hr').css({'position':'fixed' , 'background':'rgb(46, 48, 80)'})
     $('.Topheader').css('display' , 'none')
   }else{
    $('.hr').css({'position':'absolute' , 'background' : 'transparent'})
     $('.Topheader').css('display' , 'block')
   }
   if (window.scrollY) {
    console.log(scrollY);
   }
   if (window.scrollY >= '500') {
      $('.toTopBtn').fadeIn()
   }else{
    $('.toTopBtn').fadeOut()

   }
}
$('.toTopBtn').click(()=>{
  $('html, body').animate({scrollTop : 0}, 800);
  return false;
});
})
$('.clickHere').click(()=>{
  $('.omrancomLogoLogin').css('transform' , 'translateX(0px)')

})
$('#notify').click(()=>{
  $('.display2').toggleClass("active")
  if ($('.display').hasClass('active')) {
    $('.display').toggleClass("active")
    console.log($('.display'));
  }else if($('.hovercard2__').hasClass('active')){
    $('.hovercard2__').toggleClass("active")
  }else if($('.hovercard2_').hasClass('active')){
    $('.hovercard2_').toggleClass("active")
  }
})
$('#mseg').click(()=>{
  $('.display').toggleClass("active")
  if ($('.display2').hasClass('active')) {
    $('.display2').toggleClass("active")
    console.log($('.display2'));
  }else if($('.hovercard2__').hasClass('active')){
    $('.hovercard2__').toggleClass("active")
  }else if($('.hovercard2_').hasClass('active')){
    $('.hovercard2_').toggleClass("active")
  }
})
$('.profile').click(()=>{
  $('.hovercard2__').toggleClass("active")
  if ($('.display2').hasClass('active')) {
    $('.display2').toggleClass("active")
    console.log($('.display2'));
  }else if($('.display').hasClass('active')){
    $('.display').toggleClass("active")
  }else if($('.hovercard2_').hasClass('active')){
    $('.hovercard2_').toggleClass("active")
  }
})
$('.burger').click(()=>{
  $('.hovercard2_').toggleClass("active")
  if ($('.display2').hasClass('active')) {
    $('.display2').toggleClass("active")
    console.log($('.display2'));
  }else if ($('.display').hasClass('active')) {
    $('.display').toggleClass("active")
    console.log($('.display'));
  }else if($('.hovercard2__').hasClass('active')){
    $('.hovercard2__').toggleClass("active")
  }
})
$('.burger').click(()=>{
  $('.hovercard2').toggleClass("active")
})
$('#addbtn').click(()=>{
  $('.popupParent').css('transform','translateY(0px)')
})
$('#excelbtn').click(()=>{
  $('.popupParent__').css('transform','translateY(0px)')
})
$('.click').click(()=>{
  $('.popupParent').css('transform','translateY(-800px)')
})

$('.popupEdit').click((e)=>{
  e.preventDefault()
  $('.popupParent2').css('transform','translateY(0px)')
  $('.popup').animate({
    opacity:'1',
    height:'97%'
  },900);
  $('.popupParent').css({'height':'100%','width':'100%','opacity':'1'})
  $('.popup').css({'height':'97%px','opacity':'1'})
})
$('.click2').click(()=>{
  $('.popupParent').css({'height':'0px','width':'0px','opacity':'0'})
  $('.popup').css({'height':'0px','opacity':'0'})
})
$('.secTwo').click(()=>{
  $('.popupParent3').css('transform','translateY(0px)')
  $('.popup').animate({
    opacity:'1',
    height:'55%'
  },900);
  $('.popup').css({'height':'55%px','opacity':'1'})
})
$('.click3').click(()=>{
  $('.popupParent3').css('transform','translateY(-800px)')
  $('.popup').css({'height':'0','opacity':'0'})

})
$('.secOne').click(()=>{
  $('.popupParent4').css('transform','translateY(0px)')
  $('.popup').animate({
    opacity:'1',
    height:'80%'
  },900);
  $('.popup').css({'height':'80%px','opacity':'1'})
})
$('.click4').click(()=>{
  $('.popupParent4').css('transform','translateY(-800px)')
  $('.popup').css({'height':'0','opacity':'0'})

})

var text = "إذا كنت قد نسيت كلمة مرورك وتخشى الخروج من صفحتك امامك خيارين";
var index = 0;
var intervalId = setInterval(() => {
  if (index < text.length) {
    $('.machineRiting').text($('.machineRiting').text() + text[index]);
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 100);
// select input multi city
$(document).ready(function() {
  $('.js-example-basic-multiple').select2();
});
$('.headTop button').click(()=>{
  $('.popupParent ').css('transform','translateY(-800px)')
})
