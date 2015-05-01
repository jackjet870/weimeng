$(function () {

  window.RESULT = {};
  var NEEDNUM = 11,
      btID = '#submit';//带#号

  $(btID).bind('click',function () {
    var ResultLength = 0;
    //获取RESULT数组长度
    for (var key in RESULT){
      if(!RESULT[key]){
        alert("请确保选项填写符合规则!");
        return false;
      }
      ResultLength++;
    }
    if(ResultLength < NEEDNUM){
      alert("您还有选项没有填写哦!");
      return false;
    }else{
      //
    }
  });

  V('#title','empty','活动标题不能为空');
  V('#summary','empty','活动简述不能为空');
  V('#price','number','请输入正确的费用,免费则输入0');
  V('#scale','empty','活动规模不能为空');
  V('#place','empty','请填写活动地点');
  V('#introduce','empty','活动的简述不能为空');
  V('#name','empty','请留下您的姓名');
  V('#phone','phone','请留下您的电话');
    //空验证

});