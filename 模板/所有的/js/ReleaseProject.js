// $(function () {
//   $('#pName')
//   .bind('blur',function () {
//     if(this.value.length === 0){
//       emptyVerify(this,"项目的名称不能为空");
//     }else{
//       clearVerify(this);
//     }
//   })
//   .bind('focus', function () {
//       clearVerify(this);
//   });
//   $('#pSummary')
//   .bind('blur',function () {
//     if(this.value.length === 0){
//       emptyVerify(this,"项目的简述不能为空");
//     }else{
//       clearVerify(this);
//     }
//   })
//   .bind('focus', function () {
//       clearVerify(this);
//   });

//     //空验证
//     function emptyVerify (obj, message) {
//       // body...
//       var nObj = document.createElement("span");
//       nObj.className = "help-inline";
//       nObj.innerHTML = message;
//       $("#"+obj.id).closest(".controls").append(nObj);
//       $("#"+obj.id).closest(".control-group").addClass("error");
//     }
//     function clearVerify (obj) {
//       $("#"+obj.id).next().remove();
//       $("#"+obj.id).closest(".control-group").removeClass("error");
//     }
// });