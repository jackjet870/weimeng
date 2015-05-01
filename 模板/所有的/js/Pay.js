$(function () {
  $('.pay-option>li').each(function () {
    $(this).bind('click', function () {
      $('.pay-option>li').attr('class','');
      $('.pay-detail>li').hide();
      $('.pay-option>li').eq($(this).index()).attr('class','pay-option-active');
      $('.pay-detail>li').eq($(this).index()).show();
    });
  });
});