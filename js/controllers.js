angular.module('starter.controllers', [])
//首页
.controller('homeCtrl', function($scope,homePage,locals,$ionicScrollDelegate,$interval,$ionicSlideBoxDelegate){
	
	
	//是否加载引导动画
   
	if(!(locals.get('load')=="已经加载")){
		
		window.location="#/tab/guide";
	}
    
    
 var swiper = new Swiper('.swiper-container', {
      
        slidesPerView: 4,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 10,
        grabCursor: true
   
    });
    
    var swiper2 = new Swiper('.swiper-container_1', {
        initialSlide :0,
       
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 15,
        grabCursor: true,
      
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
       observeParents:false,//修改swiper的父元素时，自动初始化sper
    });
    
    var swiper3= new Swiper('.swiper-container_2', {
      
        slidesPerView: 4,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween:10,
        grabCursor: true
    });
//   轮播图
     var swiper4 = new Swiper('.swiper-container_4', {
        pagination:'.swiper-pagination',
        autoplay:2000,
        loop:true,
        paginationClickable: true
    });
     
    $scope.showData=homePage.get().activeData;
    $scope.exhibitionData=homePage.get().exhibition;
    $scope.exhibition_Data=homePage.get().exhibition2;
    
    $scope.stylizeData=homePage.get().styleData;
    $scope.areaData=homePage.get().styleData1;
    $scope.guideData=homePage.get().afflatus.guide;
    $scope.BuyData=homePage.get().afflatus.Buy;
    $scope.CaseData=homePage.get().afflatus.Case;
    $scope.LifeData=homePage.get().afflatus.Life;
	
     $scope.isactive=true;
     $scope.true1=true;
     
     $scope.recommend=function(){
     	 $scope.isactive=true;
     	 $scope.isStatus=false;
     	 $scope.isbar=false;
     	 $scope.istrue=false;
     	 
     	   $scope.true1=true;
     	   $scope.true2=false;
     	   $scope.true3=false;
     	   $scope.true4=false;
     }
     
       $scope.way=function(){
     	 $scope.isactive=false;
     	 $scope.isStatus=true;
     	 $scope.isbar=false;
     	 $scope.istrue=false;
     	 
     	   $scope.true1=false;
     	   $scope.true2=true;
     	   $scope.true3=false;
     	   $scope.true4=false;
     }
     
        $scope.style=function(){
     	 $scope.isactive=false;
     	 $scope.isStatus=false;
     	 $scope.isbar=true;
     	 $scope.istrue=false;
     	 
     	   $scope.true1=false;
     	   $scope.true2=false;
     	   $scope.true3=true;
     	   $scope.true4=false;
     }
	
    $scope.last=function(){
     	 $scope.isactive=false;
     	 $scope.isStatus=false;
     	 $scope.isbar=false;
     	 $scope.istrue=true;
     	 
     	   $scope.true1=false;
     	   $scope.true2=false;
     	   $scope.true3=false;
     	   $scope.true4=true;
     }
    
//     导航
     
    $(".nav li").click(function(){
     var index=$(this).index();
     
    $(this).addClass("change").siblings().removeClass();
    
     $(".fixed .each_box").eq(index).css('display','block').siblings().css('display','none')
    })
    
    
    //倒计时
    
     function count_down(year,months,date,element){
	  	 	 
	  	 	var nowTime=new Date()
	  	 	var endTime=new Date(year,months-1,date);
	  	 	
	  	 	difTime=endTime.getTime()-nowTime.getTime();
	  	    
	  	    
	  	    var days=Math.floor(difTime/1000/60/60/24);
	  	    var hours=Math.floor(difTime/1000/60/60%24);
	  	    var minutes=Math.floor(difTime/1000/60%60);
	  	    var second=Math.floor(difTime/1000%60);
	  	 
	  	    $(".count_down span:eq(0)").html(days);
	  	    $(".count_down span:eq(1)").html(hours);
	  	    $(".count_down span:eq(2)").html(minutes);
            $(".count_down span:eq(3)").html(second);

	  	      		
	  	
		  	 }
	  
		$interval(function(){
			count_down(2017,9,30);
		},1000)
    
		 //更新轮播图
//   $ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
//   //让轮播图循环播放
//   $ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");

   //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });

})
//分类页
.controller('classifyCtrl', function($scope, Chats,homePage) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.promoteData=homePage.get().classify.promote;
    $scope.bedroomData=homePage.get().classify.bedroom;
    $scope.livingData=homePage.get().classify.living;
    $scope.diningData=homePage.get().classify.dining;
    $scope.studyData=homePage.get().classify.study;
    $scope.kids_roomData=homePage.get().classify.kids_room;
    
//  风格页面数据
     $scope.modernData=homePage.get().Mannerism.modern;
     $scope.NorthernData=homePage.get().Mannerism.Northern;
     $scope.EuropeanData=homePage.get().Mannerism.European;
     $scope.ChineseData=homePage.get().Mannerism.Chinese;
     $scope.KoreanData=homePage.get().Mannerism.Korean;
     $scope.countryData=homePage.get().Mannerism.country;
     $scope.AmericanData=homePage.get().Mannerism.American;
     $scope.childData=homePage.get().Mannerism.child;
     

//点击切换导航
     $scope.isActive=true;
      $scope.classify=true;
      
      $scope.taxonomy=function(){
        $scope.isActive=true;
        $scope.classify=true;
      	
       $scope.isAdd=false;
       $scope.manner=false;
      	
      }
      
       $scope.stylize=function(){
        $scope.isActive=false;
        $scope.classify=false;
      	
       $scope.isAdd=true;
       $scope.manner=true;
      	
      }
       
//     跳回主页
  $scope.goback=function(){
   	 
   	window.location="#/tab/home";
   }
     
//  tab切换   
     $(".subject li").click(function(){
     
     var index=$(this).index();
       console.log(index);
    $(this).addClass("left_line").siblings().removeClass();
    
   $(".loop_wrap .loop_box").eq(index).css('display','block').siblings().css('display','none');
//   风格类 的切换
   $(".loop_wrap .style_box").eq(index).css('display','block').siblings().css('display','none')
    })
     
     
    //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });

     
  
})
  // 弹幕
.controller('barrageCtrl', function($scope, $ionicBackdrop,$timeout) {
//$scope.chat = Chats.get($stateParams.chatId);
    $timeout(function(){
//    $ionicBackdrop.retain();	
    },2000)
   $scope.slideDown=function(){
   	  
   }
   
   
})
 //购物页
.controller('shoppingCtrl', function($scope) {
	
	
     $scope.gohome=function(){
     	
       window.location="#/tab/home";
     }
	
     $scope.undo=function(){
     	
       window.location="#/tab/information";
     }
    
    
     //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
     
})
   //个人信息页
.controller('personalCtrl',function($scope,listPesonel){
	
	$scope.allData=listPesonel.all();
	
	 console.log($scope.allData)
	$scope.jump=function(){
	 window.location="#/tab/login"
	}
	 
	 
})
//引导页
.controller('guideCtrl',function($scope,locals,$timeout,$interval){
	
	var t=5;
	
    time=$interval(function(){
	   	t--;
	   	$(".fix span").text(t);
	   	if(t<1){
	     locals.set("load","已经加载");
	   	 window.location="#/tab/home";
	   	  clearInterval(time);
	   	  
	   	}
	   },1000)
	 
	
	
//	 $scope.goIndex=function(){
//	 	
//	 	
//	 	
//	 	window.location="#/tab/home";
//	 }
	
})
//注册页
.controller('registerCtrl',function($scope){
	
	
})


// 登录页
.controller('loginCtrl',function($scope,$ionicPopup){
      $scope.userPhone="";
      $scope.userPassword="";
//	
	 var photo_yz = /^1(3|4|5|7|8)\d{9}$/;
	 var password_R=/^[0-9a-zA-Z_#]{6,16}$/;
	 
	
	 
	$scope.goLogin=function(){
	
		if($scope.userPassword&&$scope.userPassword){
			
			
			
			if(!photo_yz.test($scope.userPhone)){
				$ionicPopup.alert({
	   	     		title:"温馨提示",
	   	     		template:"手机格式错误"
			})}else if(!password_R.test($scope.userPassword)){
			   $ionicPopup.alert({
	   	     		title:"温馨提示",
	   	     		template:"请输入6-16位数密码"
	   	    })
			}else{
			    window.location="#/tab/personal";
			    $scope.userPhone="";
	            $scope.userPassword="";
	
		 } }else{
	   	    $ionicPopup.alert({
	   		title:"温馨提示",
	   		template:"请输入正确格式内容"
	   	})
	   	 
	   }
		
		
		}
		
	
	$scope.dd=function(){
		if($scope.userPassword&&$scope.userPassword){
		console.log($scope.userPhone);
	    console.log($scope.userPassword);
			$(".wraper button").addClass("button button-positive")
		}
	}
	
	//     跳回主页
  $scope.goback=function(){
   	 
   	window.location="#/tab/home";
   }
	
	//跳注册页
	$scope.goRegister=function(){
		window.location="#/tab/register";
	}
	
})

.controller('informationCtrl',function($scope,homePage,locals){
 
   $scope.synthesizeData=homePage.get().shopping.synthesize;
   $scope.volumeData=homePage.get().shopping.volume;
   $scope.productData=homePage.get().shopping.product;
   $scope.prieceData=homePage.get().shopping.priece;
   
   $scope.goback=function(){
   	 
   	window.location="#/tab/shopping";
   }
   
   $scope.goDetail=function(){
   	  window.location="#/tab/detail";
   	  
   	  
   }
   
   	  
        
               
   
   
//  导航
   $(".nav li").click(function(){
     var index=$(this).index();
     
    $(this).addClass("divide").siblings().removeClass();
    
     $(".fixed .each_box").eq(index).css('display','block').siblings().css('display','none')
    })
    
	
	 //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
	
})

.controller('detailCtrl',function($scope,$ionicBackdrop,locals){
	var swiper = new Swiper('.swiper-container', {
      
        slidesPerView:4,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween:10,
        grabCursor: true
   
    });
    
//  弹幕---立即购买
    
    $(".fixed li:eq(3)").click(function(){
        $(".popup_wrap").animate({bottom:0},200);
        $(".screen_wrap").animate({top:0},80);
    })
    
         var listStr=localStorage.mydata;
         
          if(listStr==undefined){
            localStorage.setItem('mydata','[]');
		  var listStr=localStorage.getItem("mydata");
             
        }
          
         
		    
        
         
//        listObj.push(obj);
//       console.log(listObj)   
//    加购物车加 1
    $(".fixed li:eq(4)").click(function(){
    	
      var CarNum=document.querySelectorAll(".waif span")[0]
         
        CarNum.innerHTML=1;
       
         var Src=$("ion-slide div img").eq(0).attr("src");
         var detail=$(".row:eq(0)").children().text();
         var priece=$(".row:eq(1)").children().children().text();
         var norms=$(".color_wrap li:eq(0)").text();
         console.log(typeof Src);
       
         var obj={
         	
         	 Src:Src,
         	 detail:detail,
         	 priece:priece,
         	 norms:norms,
         	 count:1
            }
         
        var listObj=JSON.parse(listStr);
              listObj.push(obj);
          console.log(listObj); 
	      listStr=JSON.stringify(listObj);
             
      localStorage.setItem("mydata",listStr);
        console.log(listStr);
//       
//       listStr=JSON.stringify(listObj);
   })
    
    
     
       
//   关闭按钮
    $scope.down_popup=function(){
    
      $(".popup_wrap").animate({bottom:"-6rem"},200);
      $(".screen_wrap").animate({top:"-9.6rem"},400);
    }
//	 规格选择
	$(".color_wrap li").click(function(){
		var index=$(this).index();
	   $(this).addClass("color").siblings().removeClass("color");
	})
	
	$(".resize_wrap li").click(function(){
		var index=$(this).index();
	   $(this).addClass("color").siblings().removeClass();
	})
	
//	跳转页面
      $scope.goCar=function(){
      
       
      
   	    window.location="#/tab/buyCar";
   }
      
      
     //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
      
   
})
  
   //购物车页
.controller('buyCarCtrl',function($scope,$timeout){
	  //跳转按钮
	 $scope.goInformation=function(){
	 window.location="#/tab/information"
	 }
	  
	  
	var listStr=localStorage.getItem("mydata");
	 listObj=JSON.parse(listStr);
	  console.log(listObj);
	for(var i=0;i<listObj.length;i++){
	  var Div=document.createElement("div");
	  Div.innerHTML= '<div class="wait_wrap">'
	     +'<ul class="box_wrap">'
       	+'<li class="checkbox-all"><label class="checkbox"><input type="checkbox" ng-checked="select"/></label>	</li>'
       	
        +'<li><img src="'+listObj[i].Src+'"></li>'   
        +'<li style="width:3.4rem;padding-left:0.15rem;">'
         +'<p>'+listObj[i].detail+'</p>'
         +'<div class="specification">'
         	+'规格: <div>'+listObj[i].norms+'</div>'
         +'</div>'
         
        +'<div class="last_wrap">'
         +' <a class="assertive font">'+listObj[i].priece+'</a>'
         +'<ul class="bar_wrap">'
           +' <li><i class="icon ion-android-remove"></i></li>'
            +'<li style="width:0.6rem;border:none">'+listObj[i].count+'</li>'
            +'<li ><i class="icon ion-android-add"></i></li>'
         +'</ul>'
          
        +'</div>'
        +'</li>'
         +'</ul>'
         +'</div>'
        $(".append_wrap").append(Div);
        
	}
	 


	
	
//	加减按钮
   
    $(".bar_wrap li .ion-android-remove").click(function(){
    	
    	var value=$(this).parent().next().text()-1;
         if(value<1){
  		        value=1;
 	          }	 
         $(this).parent().next().text(value);
  	
    	
    })
	
	$(".bar_wrap li .ion-android-add").click(function(){
		
		var textVal=parseInt($(this).parent().prev().text())+1;
		
		$(this).parent().prev().text(textVal);
		
	})
	
	
	   

 
   
    
    
	
	
	
	
	
	
// 全选按钮 点击切换
   $(".fixde_footer").find("i").click(function(){
   	  if(flag){
   	  	$(this).removeClass("ion-load-c").addClass("ion-checkmark-circled color");
   	  	 flag=false;
   	  	$(".box_wrap li .check").removeClass("ion-load-c").addClass("ion-checkmark-circled color");
   	  	 $(".fixde_footer .accounts").addClass("Red");
   	  }else{
   	  	$(this).removeClass("ion-checkmark-circled color").addClass("ion-load-c");
   	  	flag=true;
   	  $(".box_wrap li .check").removeClass("ion-checkmark-circled color").addClass("ion-load-c");
   	   
   	  $(".fixde_footer .accounts").removeClass("Red");
   	  
   	  }
   })
   
//  显示总价:

   $(".fixde_footer .font span").text();
   
   console.log( $(".fixde_footer .font span").text())
   
   
   
    //延迟刷新页面解决需要二次刷新才正常的bug
   $scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
   
     
 
})



 /*底部tabs隐藏显示的指令*/
  .directive('hideTabs', function($rootScope){
    return {
      restrict: 'A',
      
      link: function(scope, element, attributes) {
      	console.log(attributes)
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })

