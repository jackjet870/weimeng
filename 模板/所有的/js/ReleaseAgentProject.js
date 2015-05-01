$(function () {

  window.RESULT = {};
  var NEEDNUM = 100,
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

  V('#name','empty','项目名称不能为空');
  V('#pSummary','empty','项目简述不能为空');
  V('#pDetail','empty','请输入详细介绍');
  V('#scale','empty','请填写目前的市场规模');
  V('#introduce','empty','活动的简述不能为空');
  V('#advantage','empty','请描述一下项目的竞争优势');
  V('#demand','empty','请描述一下对代理人的要求');

  V('#user','chinese','请留下您的姓名');
  V('#phone','phone','请留下正确的电话');
    //空验证

});