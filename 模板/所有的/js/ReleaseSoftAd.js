$(function () {

  window.RESULT = {};
  var NEEDNUM = 4,
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

  V('#title','empty','软文标题不能为空');
  V('#summary','empty','软文简述不能为空');
  V('#origin','empty','请填写软文来源');
  V('#content','empty','请填写软文的内容');
    //空验证

});