function triggerVerify (obj, message) {
  
  // 触发错误输出
  var nObj = document.createElement("span");
  nObj.className = "help-inline";
  nObj.innerHTML = message;
  $("#"+obj.id).closest(".controls").append(nObj);
  $("#"+obj.id).closest(".control-group").addClass("error");
}

function clearVerify (obj) {
  //清除错误输出
  if($("#"+obj.id).next().attr('class') == "help-inline"){
    $("#"+obj.id).next().remove();
  }
  if($("#"+obj.id).next().next()){
    $("#"+obj.id).next().next().remove();
  }
  if($("#"+obj.id).closest('.input-prepend').next().attr('class') == "help-inline"){
    $("#"+obj.id).closest('.input-prepend').next().remove();
  }
  $("#"+obj.id).closest(".control-group").removeClass("error");
}

function V (id, type, message) {
  var mailRg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
      phoneRg = /^([0-9]){11}/,
      chineseRg = /[^\x00-\xff]/,
      pwdRg = / ^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/,
      numRg = /^[0-9]{1,}/;

  switch(type){
    //如果是空验证
    case 'empty':
      $(id)
      .bind('blur',function () {
        if(this.value.length === 0){
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;

        }
      })
      .bind('focus', function () {
          clearVerify(this);
      });
    break;
    //如果是数字验证
    case 'number':
      $(id)
      .bind('blur',function () {
        if(!numRg.test(this.value)){
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;
        }
      })
      .bind('focus', function () {
          clearVerify(this);
      });
    break;
    //如果是邮箱验证
    case 'email':
      $(id)
      .bind('blur',function () {
        if(!mailRg.test(this.value)){
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;
        }
      })
      .bind('focus', function () {
          clearVerify(this);
          RESULT[id] = true;
      });
    break;
    //如果是手机验证
    case 'phone':
      $(id)
      .bind('blur',function () {
        if((!phoneRg.test(this.value))||this.value.length > 11){
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;
        }
      })
      .bind('focus', function () {
          clearVerify(this);
      });
    break;

    //如果是中文验证
    case 'chinese':
      $(id)
      .bind('blur',function () {
        if((!chineseRg.test(this.value))||this.value.length < 3){
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;
        }
      })
      .bind('focus', function () {
          clearVerify(this);
      });
    break;
    case 'password':
      $(id)
      .bind('blur',function () {
        if(!pwdRg.test(this.value)){
          console.log(this.value);
          triggerVerify(this,message);
          RESULT[id] = false;
        }else{
          clearVerify(this);
          RESULT[id] = true;
        }
      })
      .bind('focus', function () {
          clearVerify(this);
      });

    break;
    default:
  }
}
function Vs (id1, id2, message) {
  $(id2)
  .bind('blur', function () {
    if($(id1).value !== $(id2).value){
      triggerVerify(this,message);
      RESULT[id] = false;
    }else{
      triggerVerify(this,message);
      clearVerify(this);
      RESULT[id] = true;
    }
  });
}