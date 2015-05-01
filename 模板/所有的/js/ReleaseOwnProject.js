//
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

  V('#name','empty','项目名称不能为空');
  V('#summary','empty','请填写简述不能为空');
  V('#introduce','empty','项目介绍不能为空');
  V('#scale','empty','请填写该项目的市场规模');
  V('#advantage','empty','请填写该项目的竞争优势');
  V('#allFund','empty','总出资不能为空');
  V('#allFund','number','必须为数字');
  V('#peopleNumber','empty','总出资不能为空');
  V('#peopleNumber','number','必须为数字');
  V('#user','empty','请填写姓名');
  V('#phone','phone','请填写正确的电话号码');


    //空验证
});

//成员动态添加函数
$(function  () {
  var num = 0,
      $memberBtn = $('#memberBtn'),
      $member = $(".member");

      $member.hide().eq(num).show();//初始显示第一个
      $memberBtn.on('click',function () {
        num = num + 1;
        $member.eq(num).show();
      });
});

//时间线动态添加函数
$(function () {
  var num = 0,
      $timeLineBtn = $('#timeLineBtn'),
      $timeLine = $(".time-line");

      $timeLine.hide().eq(num).show();//初始显示第一个
      $timeLineBtn.on('click',function () {
        num = num + 1;
        $timeLine.eq(num).show();
      });
  
});