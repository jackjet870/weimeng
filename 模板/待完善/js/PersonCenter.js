// 表单验证
$(function () {
  var mailRg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
      phoneRg = /^([0-9]){11}/;
  $('#name')
  .bind('blur',function () {
    if(this.value.length === 0){
      emptyVerify(this,"填写您的真实姓名");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });
  //
  $("#user")
  .bind('blur',function () {
    if(this.value.length === 0){
      emptyVerify(this,"昵称不能为空");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });

  $("#email")
  .bind('blur',function () {
    if(!mailRg.test(this.value)){
      emptyVerify(this,"请填写合法邮箱");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });

  $("#phone")
  .bind('blur',function () {
    if((!phoneRg.test(this.value))||this.value.length > 11){
      emptyVerify(this,"请填写正确的电话号码");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });

  $("#summery")
  .bind('blur',function () {
    if(this.value.length === 0){
      emptyVerify(this,"请填写个人简介");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });

  $("#school")
  .bind('blur',function () {
    if(this.value.length === 0){
      emptyVerify(this,"请填写您的学校");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });

  $("#major")
  .bind('blur',function () {
    if(this.value.length === 0){
      emptyVerify(this,"请填写您的专业");
    }else{
      clearVerify(this);
    }
  })
  .bind('focus', function () {
      clearVerify(this);
  });


  //空验证
  function emptyVerify (obj, message) {
    // body...
    var nObj = document.createElement("span");
    nObj.className = "help-inline";
    nObj.innerHTML = message;
    console.log(nObj);
    $("#"+obj.id).closest(".controls").append(nObj);
    $("#"+obj.id).closest(".control-group").addClass("error");
  }
  function clearVerify (obj) {
    $("#"+obj.id).next().remove();
    $("#"+obj.id).closest(".control-group").removeClass("error");
  }
});
//动态添加
$(function () {
  var num = 0,
      num2 = 0;
  $(".exp").hide().eq(num).show();
  $("#creatExp").bind('click',function () {
    num++;
    $('.exp').eq(num).show();
  });
  $(".exp2").hide().eq(num2).show();
  $("#creatExp2").bind('click',function () {
    num2++;
    $('.exp2').eq(num2).show();
  });
});