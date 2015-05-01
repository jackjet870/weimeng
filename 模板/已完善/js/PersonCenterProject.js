$(function () {
  var nowIndex = 0;
  tab();

  $(".project-info-title>li").each(function () {
    $(this).bind('click',function () {
      nowIndex = $(this).index();
      tab();
    });
  });
  function tab () {
    $(".project-info-title>li").attr('class','none').eq(nowIndex).attr('class','info-active');
    $(".project-info-content>li").hide().eq(nowIndex).show();
  }
});