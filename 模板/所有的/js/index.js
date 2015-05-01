// banner 特效
$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });
/*jquery.slides.min.js*/

/*

$(function () {
  var nowIndex = 0,
      second = 1500,//设置图片滚动时间
      width = 1349;

      timer = null;
  timer = setInterval(function () {
    tab();
  },second);
  $(".slidesjs-control").bind('mouseover',function () {
    if(timer){
      clearInterval(timer);
    }
  });
  $(".slidesjs-control").bind('mouseout',function () {
    timer = setInterval(function () {
      tab();
    },second);
  });

//定义切换函数
  function tab () {
    nowIndex++;
    if(nowIndex == 3){
      nowIndex = 0;
    }
    $("#slidesjs-pagination>li").attr('class',' ');
    $("#slidesjs-pagination>li").eq(nowIndex).attr('class','.slidesjs-pagination li');
    $(".slidesjs-control").animate({
      left: -(nowIndex*1349)+'px',
    });
  }
});*/

// 中间图片轮播特效
$(function () {
  var timer = null,
      second = 3000,
      nowIndex = 0;
  timer = setInterval(function () {
    tab();
  },second);
  $(".content-slide-img")
  .bind('mouseover',function () {
    if(timer){
      clearInterval(timer);
    }
    $(".pre").show(100);
    $(".next").show(100);    
  })
  .bind('mouseout',function () {
    $(".pre").hide();
    $(".next").hide();
    timer = setInterval(function () {
      tab();
    },second); 
  });
//向前按钮
  $(".pre")
  .bind('click',function () {
    nowIndex--;
    nowIndex--;
    tab();
  })
  .bind('mouseover',function () {
    if(timer){
      clearInterval(timer);
    }
    $(".pre").show();
    $(".next").show();    
  });
//向后按钮
  $(".next")
  .bind('click',function () {
    tab();
  })
  .bind('mouseover',function () {
    if(timer){
      clearInterval(timer);
    }
    $(".pre").show();
    $(".next").show();    
  });
  
  function tab () {
    nowIndex++;

    if(nowIndex == 3){
      nowIndex = 0;
    }
    if(nowIndex == -1){
      nowIndex = 2;
    }
    $(".content-slide-img>li").hide(500).eq(nowIndex).show(500);
    $(".content-slide-text>li").hide(500).eq(nowIndex).show(500);
  }
});


//右下角固定特效方块特效
$(function  () {
  var $attachedList = $(".index-attached>a"),
      temps = {
        'top' : '回到顶部',
        'QRcode' : '公众<br>号',
        'weibo' : '新浪微博',
        'suggest' : '吐槽建议',
        'more' : '查看更多'
      },
      temp = null;
  console.log($attachedList[0]);
  
  //第一个按钮
  $attachedList.eq(0)
  .on('mouseover', function () {
    temp = $(this).html();
    $(this).html(temps.top);
  })
  .on('mouseleave', function () {
    $(this).html(temp);
    temp = null;
  })
  .on('click', function () {
    $('body,html').animate({scrollTop:0},300);  
    return false; 

  });  
  //第二个按钮
  $attachedList.eq(1)
  .on('mouseover', function () {
    temp = $(this).html();
    $(this).html(temps.weibo);
  })
  .on('mouseleave', function () {
    $(this).html(temp);
    temp = null;
  });


  //第三个按钮
  $attachedList.eq(2)
  .on('mouseover', function () {
    temp = $(this).html();
    $(this).html(temps.QRcode);
  })
  .on('mouseleave', function () {
    $(this).html(temp);
    temp = null;
  });

  //第四个按钮
  $attachedList.eq(3)
  .on('mouseover', function () {
    temp = $(this).html();
    $(this).html(temps.suggest);
  })
  .on('mouseleave', function () {
    $(this).html(temp);
    temp = null;
  })
  .on('click', function () {
    //投诉框出现
    $('.attached-form').show();    
  });  


  //第五个按钮
  $attachedList.eq(4)
  .on('mouseover', function () {
    temp = $(this).html();
    $(this).html(temps.suggest);
  })
  .on('mouseleave', function () {
    $(this).html(temp);
    temp = null;
  });

  $('.attached-form>span').eq(0).on('click',function () {
    $('.attached-form').hide();   
  });

});