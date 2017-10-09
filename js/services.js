angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

 .factory('listPesonel',function(){
 	   
 	   var listData=[
 	     
						     [{src:"img/1200.png",title:"我的卡卷", count:"6张"},
							 	   {src:"img/1005.png",title:"积分商城", count:""},
							 	   {src:"img/10067.png",title:"我的积分", count:"110积分"},
							 	   {src:"img/1008.png",title:"我的夺宝", count:"0单"},
							 	   {src:"img/1009.png",title:"我的礼包", count:"3张"}
 	                ],
 	              [
 	                {src:"img/10001.png",title:"文章收藏", count:"0篇"},
 	                {src:"img/10002.png",title:"文章评论", count:"0篇"},
 	                {src:"img/10003.png",title:"商品问答", count:"0条"},
 	                {src:"img/10004.png",title:"图片收藏", count:"0套"}
 	               ],
 	                
 	            [
 	             {src:"img/10005.png",title:"设置", count:""},
 	             {src:"img/10006.png",title:"客服电话", count:"400-801-0404"}
 	            ]
 	     ]
 	   
 	    return {
 	    	all:function(){
 	    		  return listData
 	    	}
 	    }
 	
   })
   
   .factory("homePage",function(){
   	
   	   var homeData={
   	   	
   	   	 exhibition:[
   	   	   {Src:"img/11111.png",name:"地中海沙发",priece:"￥4918.00"},
   	   	   {Src:"img/11112.png",name:"地中海茶几",priece:"￥1438.00"},
   	   	   {Src:"img/11113.png",name:"卧室床头柜",priece:"￥622.00"},
   	   	   {Src:"img/11114.png",name:"实木餐厅桌",priece:"￥3100.00"},
   	   	   {Src:"img/11115.png",name:"美食双人床",priece:"￥2860.00"},
   	   	   {Src:"img/11116.png",name:"拉门大衣柜",priece:"￥2880.00"},
   	   	   {Src:"img/11117.png",name:"田园高箱床",priece:"￥1830.00"},
   	   	   {Src:"img/11118.png",name:"小户型收纳柜",priece:"￥1258.00"},
   	   	   {Src:"img/11119.png",name:"床头储物柜",priece:"￥427.00"},
   	   	   
   	   	   ],
   	   	  exhibition2:[
   	   	   {Src:"img/11121.png",name:"现代布艺沙发",priece:"￥3680.00"},
   	   	   {Src:"img/11122.png",name:"原木色茶几",priece:"￥1380.00"},
   	   	   {Src:"img/11123.png",name:"可伸缩电视柜",priece:"￥1220.00"},
   	   	   {Src:"img/11124.png",name:"小户型餐桌",priece:"￥2140.00"},
   	   	   {Src:"img/11125.png",name:"北欧双人床",priece:"￥1333.00"},
   	   	   {Src:"img/11127.png",name:"简约床头柜",priece:"￥395.00"},
   	   	   {Src:"img/11128.png",name:"玄关组合柜",priece:"￥1612.00"},
   	   	   {Src:"img/11129.png",name:"迷你妆台组合",priece:"￥949.00"},
   	   	   {Src:"img/11130.png",name:"松木儿童床",priece:"￥1846.00"},
   	   	   {Src:"img/11131.png",name:"全实木床头柜",priece:"￥576.00"},
   	   	   {Src:"img/11132.png",name:"双门实木衣柜",priece:"￥2058.00"}
   	   	    
   	   	  ],
   	   	   
   	   	  activeData:[
   	   	  {writeSrc:"img/30001.png",fullSrc:"img/30002.png",smallSrc1:"img/30003.png",
   	   	  smallSrc2:"img/30004.png",smallSrc3:"img/30005.png",smallSrc4:"img/30006.png", detail:"查看更多客厅家具"},
   	   	   
   	   	  {writeSrc:"img/401.png",fullSrc:"img/402.png",smallSrc1:"img/403.png",
   	   	  smallSrc2:"img/404.png",smallSrc3:"img/405.png",smallSrc4:"img/406.png", detail:"查看更多卧室家具"},
   	   	  
   	   	  {writeSrc:"img/501.png",fullSrc:"img/502.png",smallSrc1:"img/503.png",
   	   	  smallSrc2:"img/504.png",smallSrc3:"img/505.png",smallSrc4:"img/506.png", detail:"查看更多餐厅家具"}
   	   	  ],
   	   	  
   	   	  styleData:[
   	   	    
   	   	    {title:"现代",fullSrc:"img/341.png",smallSrc1:"img/432.png",smallSrc2:"img/433.png",smallSrc3:"img/434.png",
   	   	     smallSrc4:"img/435.png",mark:"现代风格",detail:"家具以简约明快的造型注释现代时尚的气息，以实用百搭特点和大方得体的设计吸引消费者的青睐。"},
   	   	        ],
   	   	    
   	   	   styleData1:[{title:"北欧馆",fullSrc:"img/351.png",nextSrc:"img/352.png",smallSrc3:"img/353.png",
   	   	           smallSrc4:"img/354.png",mark:"北欧风格",detail:"家具以简约明快的造型注释现代时尚的气息，以实用百搭特点和大方得体的设计吸引消费者的青睐。"},
   	   	     
   	   	          {title:"乡村馆",fullSrc:"img/361.png", nextSrc:"img/362.png",smallSrc3:"img/363.png",
   	   	          smallSrc4:"img/364.png",mark:"乡村风格",detail:"家具以简约明快的造型注释现代时尚的气息，以实用百搭特点和大方得体的设计吸引消费者的青睐。"},
   	   	         
   	   	         {title:"美式馆",fullSrc:"img/371.png",nextSrc:"img/372.png",smallSrc3:"img/373.png",
   	   	         smallSrc4:"img/375.png",mark:"美式风格",detail:"家具以简约明快的造型注释现代时尚的气息，以实用百搭特点和大方得体的设计吸引消费者的青睐。"}
   	   	      ],
   	   	      
   	   	     afflatus:{
   	   	     	
   	   	     	 guide:[
   	   	     	    { Src:"img/1401.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	    { Src:"img/1402.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	    { Src:"img/1403.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	    { Src:"img/1404.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	    { Src:"img/1405.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"}
   	   	     	 ],
   	   	     	 
   	   	     	 Buy:[
   	   	     	   { Src:"img/1406.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1407.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1408.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1409.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1410.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"}
   	   	     	 
   	   	     	  ],
   	   	     	
    		   Case:[
    		         { Src:"img/1411.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1412.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1413.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1414.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	   { Src:"img/1415.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"}
    		       
    		     ],
    		     
    		     Life:[
    		       
    		      { Src:"img/1416.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	{ Src:"img/1417.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	{ Src:"img/1418.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	{ Src:"img/1419.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"},
   	   	     	{ Src:"img/1420.png",title:"送你保养良方，让你的实木家具多用10年", way:"超强实木家具保养攻略!",type:"保养",mold:"家具"}
    		     
    		     ]
   	   	     	
   	   	     	
   	   	     },
// 	   	    分类页数据 
   	   	   classify:{
   	   	   	
   	   	   	promote:[
   	   	   	  {Src:"img/1006.png",name:"沙发"},
   	   	   	  {Src:"img/2221.png",name:"茶几地柜"},
   	   	   	  {Src:"img/2222.png",name:"餐桌椅"},
   	   	   	  {Src:"img/2223.png",name:"双人床"},
   	   	   	  {Src:"img/2224.png",name:"床头柜"},
   	   	   	  {Src:"img/2226.png",name:"衣柜"},
   	   	   	  {Src:"img/2227.png",name:"妆台镜"},
   	   	   	  {Src:"img/2228.png",name:"床垫"}
   	   	   	
   	   	   	],
   	   	   	
   	   	   	 bedroom:[
   	   	   	  {Src:"img/26661.png",name:"床"},
   	   	   	  {Src:"img/26662.png",name:"床垫"},
   	   	   	  {Src:"img/26663.png",name:"床头柜"}
   	   	   	 
   	   	   	 ],
   	   	   	 living:[
   	   	   	  {Src:"img/26671.png",name:"沙发"},
   	   	   	  {Src:"img/26672.png",name:"茶几"},
   	   	   	  {Src:"img/26673.png",name:"角几"},
   	   	   	  {Src:"img/26674.png",name:"电视柜"}
   	   	   	 ],
   	   	   	 
   	   	   	 dining:[
   	   	   	  {Src:"img/26681.png",name:"餐桌"},
   	   	   	  {Src:"img/26682.png",name:"餐椅"},
   	   	   	  {Src:"img/26683.png",name:"餐边柜"},
   	   	   	  {Src:"img/26684.png",name:"吧台/吧椅"}
   	   	   	  ],
   	   	   	  
   	   	   	   study:[
   	   	   	    {Src:"img/26691.png",name:"书桌"},
   	   	   	    {Src:"img/26692.png",name:"书椅"},
   	   	   	    {Src:"img/26693.png",name:"书柜/书架"}
   	   	   	   ],
   	   	   	   
   	   	   	 kids_room:[
   	   	   	  
   	   	   	  {Src:"img/26610.png",name:"儿童床"},
   	   	   	  {Src:"img/26612.png",name:"儿童斗柜"},
   	   	   	  {Src:"img/26613.png",name:"儿童书架"},
   	   	   	  {Src:"img/26614.png",name:"儿童书架"},
   	   	   	  {Src:"img/26615.png",name:"儿童衣柜"}
   	   	   	 ]
   	           },
   	           
   		Mannerism:{
   	   	 modern:[
   	   	  {Src:"img/23331.png",epilog:"一见倾心",comfort:"高雅，清新自然"},
   	   	  {Src:"img/23332.png",epilog:"简约撞色",comfort:"正青春.不将就"},
   	   	  {Src:"img/23333.png",epilog:"舒适软体",comfort:"经典.优雅大方"},
   	   	  {Src:"img/23334.png",epilog:"现代软体",comfort:"奢华.造就经典"},
   	   	  {Src:"img/23335.png",epilog:"明净光亮",comfort:"干练.展露锋芒"}
   	   	  ],
   	   	  
   	   	Northern:[
   	   	  {Src:"img/23341.png",epilog:"幸福时光",comfort:"家.完整而和谐"},
   	   	  {Src:"img/23342.png",epilog:"自然物语",comfort:"随性.享受生活"},
   	   	  {Src:"img/23343.png",epilog:"平凡安居",comfort:"平静.简单生活"},
   	   	  {Src:"img/23344.png",epilog:"花样百搭",comfort:"自由.生活玩家"},
   	   	  {Src:"img/23345.png",epilog:"清新自然",comfort:"简单.无须刻意"}
   	   	
   	   	],
   	   	
   	   	European:[
   	   	  {Src:"img/23351.png",epilog:"",comfort:""}
   	   	 
   	   	  ],
   	   	Chinese:[
   	   	  {Src:"img/23361.png",epilog:"沉稳逸韵",comfort:"沉浸安逸年月"}
   	   	  
   	   	 ],
   	   	Korean:[
   	   	  {Src:"img/23371.png",epilog:"韩式田园",comfort:"雅致.承托幸福"}
   	   	 
   	   	],
   	   	country:[
   	   	  {Src:"img/23381.png",epilog:"如诗生活",comfort:"阳光.恣意.洒脱"},
   	   	  {Src:"img/23382.png",epilog:"自在生活",comfort:"真诚.温暖.宁静"},
   	   	  {Src:"img/23383.png",epilog:"清新风韵",comfort:"源自大自然的美"}
   	   	
   	   	],
   	   	American:[
   	   	  {Src:"img/23391.png",epilog:"超越风度",comfort:"秀美.温情暖心"},
   	   	  {Src:"img/23392.png",epilog:"臻享美家",comfort:"享受自然淳朴"}
   	   	 
   	   	],
   	   	 
   	   	 child:[
   	   	  {Src:"img/233310.png",epilog:"童真智取",comfort:"一切为了孩子"},
   	   	  {Src:"img/233311.png",epilog:"百变天地",comfort:"灵活.空间不受限"}
   	   	  
   	   	 ]
   	   	
   	   	 
   	   	
   	   	  
   	   	 
   	   },
   	   	   	
   	   	   
// 	   	     detail页的数据
   	   	  shopping:{
   	   	  	
   	   	  	 synthesize:[
   	   	  	 { Src:"img/5551.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥4880.00"},
   	   	  	 { Src:"img/5552.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥2239.00"},
   	   	  	 { Src:"img/5553.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥2328.00"},
   	   	  	 { Src:"img/5554.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥3426.00"}
   	   	  	 
   	   	  	 ],
   	   	   volume:[
   	   	     { Src:"img/55551.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥2220.00"},
   	   	  	 { Src:"img/55552.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥529.00"},
   	   	  	 { Src:"img/55553.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥1588.00"},
   	   	  	 { Src:"img/55554.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥3345.00"}
   	   	    
   	   	   ],
   	   	   
   	   	    product:[
   	   	     { Src:"img/55561.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥4880.00"},
   	   	  	 { Src:"img/55562.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥2239.00"},
   	   	  	 { Src:"img/55563.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥2328.00"},
   	   	  	 { Src:"img/55564.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥3426.00"}
   	   	    
   	   	    ],
   	   	    
   	   	   priece:[
   	   	   
   	   	     { Src:"img/55571.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥168.00"},
   	   	  	 { Src:"img/55572.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥188.00"},
   	   	  	 { Src:"img/55573.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥280.00"},
   	   	  	 { Src:"img/55574.png",detail:"林氏木业高低床儿童组合床书桌书柜小户型上床下桌衣柜床二层DE2A", piece:"销 量0",priece:"￥270.00"}
   	   	    ]
   	   	  	
   	   	  }
   	   	
   	   }
   	   	
   	   	 return {
   	   	 	 get:function(){
   	   	 	 	 return homeData
   	   	 	 	 
   	   	 	 }
   	   	 }
   	   
   })

  //页面的存储数据
 
.factory('locals',function($window){
	
	 return {
	 	 set:function(key,value){
	 	 	
	 	 	 $window.localStorage[key]=value;
	 	 },
	 	 get:function(key,defaultValue){
	 	 	
	 	 	return $window.localStorage[key]||defaultValue;
	 	 }
	 }
})
//各个页面共享数据
.factory("shareData",function($window){
	
	  var allData={};
	  
	  return {
	  	set:function(key,value){
	  		allData[key]=value;
	  	},
	  	
	  	get:function(key,defaultValue){
	  		
	  		return allData[key]||defaultValue;
	  	}
	  }

})