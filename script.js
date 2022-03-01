$(window).scroll(function(evt){
  if($(window).scrollTop()>0) {
    $(".navbar").removeClass("navbar-top");
    $(".navbar").addClass("bg-light");
    $(".navbar").addClass("navbar-light");
     }
  else {
    $(".navbar").addClass("navbar-top");
    $(".navbar").removeClass("bg-light");
    $(".navbar").removeClass("navbar-light");
  }
});

let s = skrollr.init();
document.body.id = "skrollr-body";

$('header').mousemove(function(e){
  let moveX = (e.pageX * -1 / 15);
  let moveY = (e.pageY * -1 / 15);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px');
})
// header 的背景圖片跟著滑鼠移動