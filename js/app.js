// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'],function($httpProvider){
	//为$http.post()方法
	/**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];

})
 .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
 
 
	
	

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
//首页
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeCtrl'
      }
    }
  })
//分类页
  .state('tab.classify', {
      url: '/classify',
      cache:"false",
      views: {
        'tab-classify': {
          templateUrl: 'templates/tab-classify.html',
          controller: 'classifyCtrl'
        }
      }
    })
  // 弹幕
    .state('tab.barrage', {
      url: '/barrage',
      views: {
        'tab-barrage': {
          templateUrl: 'templates/tab-barrage.html',
          controller: 'barrageCtrl'
        }
      }
    })
 //购物页
  .state('tab.shopping', {
    url: '/shopping',
    views: {
      'tab-shopping': {
        templateUrl: 'templates/tab-shopping.html',
        controller: 'shoppingCtrl'
      }
    }
  })
 //商品信息页
  .state('tab.information',{
  	url:'/information',
  	views:{
  		'tab-shopping':{
  		  templateUrl:'templates/tab-information.html',
  		  controller: 'informationCtrl'
  		}
  	}
  })
 //商品详情页
  .state('tab.detail',{
  	url:'/detail',
  	views:{
  		'tab-shopping':{
  		  templateUrl:'templates/tab-detail.html',
  		  controller: 'detailCtrl'
  		}
  	}
  })
  //购物车页
   .state('tab.buyCar',{
  	url:'/buyCar',
  	views:{
  		'tab-shopping':{
  		  templateUrl:'templates/tab-buyCar.html',
  		  controller: 'buyCarCtrl'
  		}
  	}
  })
   //个人信息页
  .state('tab.personal',{
  	 url:'/personal',
  	 views:{
  	 	'tab-personal':{
  	 	  templateUrl:'templates/tab-personal.html',
  	 	  controller:'personalCtrl'
  	 	}
  	 }
  })
  .state('tab.register',{
  	url:'/register',
  	views:{
  	  'tab-personal':{
  		templateUrl:'templates/tab-register.html',
  		controller:'registerCtrl'
  		}
  	}
  	
  })
  //登录页
  .state('tab.login',{
  	 url:'/login',
  	 views:{
  	  'tab-personal':{
  	  	templateUrl:'templates/tab-login.html',
  	  	 controller:'loginCtrl'
  	  }
  	 }
  })
 //引导页
 .state('tab.guide',{
 	url:'/guide',
 	views:{
 	 'tab-home':{
 	 	templateUrl:'templates/tab-guide.html',
 	 	controller:'guideCtrl'
 	 }
 	}
 })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

//angular.module("myapp",["ngRoute"])
//
//.controller("homeCtrl",function($scope){
//      		
//     })
//.config(function($routeProvider){
//	$routeProvider
//	.when("/home",{
//	  templateUrl:"home.html",
//	  controller:"homeCtrl"
//	})
//	.when("/about",{
//		templateUrl:"about.html",
//		controller:"aboutCtrl"
//   })
//   .otherwise({
//      redirectTo:"/home"
//      })
//   
// })