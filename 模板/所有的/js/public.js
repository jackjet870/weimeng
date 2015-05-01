// navbar 特效
$(function function_name (argument) {
  var timer = null,
      timer2  = null;
  $("#index").bind('mouseover',function (ev) {
    $("#index-target").show(300);
    return false;
  });
  $("#index").bind('mouseleave',function (ev) {
     timer = setTimeout(function () {
       $("#index-target").hide(300);
     }, 500); 
  });
  $("#index-target").bind('mouseover',function (ev) {
    if(timer){
      clearTimeout(timer);
    }
  });
  $("#index-target").bind('mouseleave',function (ev) {
    $("#index-target").hide(300);
  });

  //
  $("#user-btn").bind('mouseover',function (ev) {
    $("#user-target").show(300);
    $("#user-btn").find('i').html('&#xe603;');
    return false;
  });
  $("#user-btn").bind('mouseleave',function (ev) {
    timer = setTimeout(function () {
      $("#user-target").hide(300);
      $("#user-btn").find('i').html('&#xe601;');
     }, 500); 
  });
  $("#user-target").bind('mouseover',function (ev) {
    if(timer){
      clearTimeout(timer);
    }
  });
  $("#user-target").bind('mouseleave',function (ev) {
    $("#user-target").hide(300);
    $("#user-btn").find('i').html('&#xe601;');
  });
});