/*获取网址链接上的参数开始-------
例如http://www.xxx.com/xxx/?url=....&id=222
api:https://z1.m1907.cn/api/v/?z=e090d9a71dfabaeefd49ff1c6afcdfae&jx=倚天屠龙记2019

https://x3.nohacks.cn/api.php?wd=双世宠妃&cb=jQuery182006642764003872625_1556966252154&_=1556966252894

https://parse.xymov.net/api.php?wd=双世宠妃&cb=jQuery182006642764003872625_1556966252154&_=1556966252894

https://x3.nohacks.cn/api.php?tp=getparm&cb=jQuery182006642764003872625_1556966252154&_=1556966252226
parameter(参数)
下面定义获取参数函数名：Get_p
url=https://www.iqiyi.com/v_19rsjpato8.html
*/
     function GET_p(name,isurl) { 
          isurl=isurl || false;
      	  var word="(^|&)" + name + "=([^&]*)(&|$)";
     	  if(isurl){word="(^|&)" + name + "=(.*?)$";}	
	  var reg = new RegExp(word, "i");
          var r = window.location.search.substr(1).match(reg);
          if (r !== null) {
          return decodeURI(r[2]);
        };
          return "";
     }
     var G_url=GET_p("url");
     var wd=GET_p("wd");
     var v=GET_p("v");
     var flag=GET_p("flag");
     var m3u8=GET_p("m3u8");
     var mp4=GET_p("mp4");
     var playurl=String(location.search);//获取?后面的所有字串符
/*console.log("playurl的内容："+playurl);
//location.search
var params = (function oneValues() {
    var query = location.search.substr(1)
    query = query.split('&')
    var params = {}
    for (let i = 0; i < query.length; i++) {
        let q = query[i].split('=')
        if (q.length === 2) {
            params[q[0]] = q[1]
        }
    }
    return params  //返回?号后面的参数名与参数值的数组

}());
console.log("params的内容："+params);*/

/*获取网址链接上的参数结束-------*/
//定义api---
var m1907url = "https://z1.m1907.cn/api/v/?z=";
var picmd5 = "e090d9a71dfabaeefd49ff1c6afcdfae";
var mek= "&jx="
this.m1907url=m1907url+picmd5+mek

/*获取网址链接上的参数wd开始-------*/
     function playerwd(namekd,namewd,nameurl,namev,api){
        this.api=api;
        this.namekd=namekd;
        this.namewd=namewd;
        this.namev=namev;
        this.nameurl=nameurl;
        if(this.namekd!==""){
                 console.log("搜索框的内容："+namekd);
                      } else {console.log("搜索框的内容name："+this.namekd);}
        if(this.namewd!==""){
                 playername(namewd,23887) || '';
                 console.log("参数wd内容："+namewd);
                      } else { console.log("参数wd内容name："+this.namewd);}
        if(this.namev!==""){
                 playername(namev,23887) || '';
                 console.log("参数v内容："+namev);
                      } else { console.log("参数v内容name："+this.namev);}
        if(this.nameurl!==""){
                 playername(nameurl) || '';
                 console.log("参数url内容："+nameurl);
                      } else { console.log("参数url内容name："+this.nameurl);}
         this.changeName=changeName;//声明函数changeName接口
        function changeName(name){
                 this.api=name;
                                  }//更改api设置函数
      }
     //playerwd(" ",wd,G_url);
     myMother=new playerwd("Steve",wd,G_url,v,"green");
     console.log("namewd:"+myMother.namewd)
    console.log("q"+myMother.api)
     myMother.changeName("Ballmer");
     console.log(myMother.api)
     //document.write(myMother.api);
     function pb(name){
var ghj=name
     console.log("ghj:"+ghj)
     console.log("myMother.api:"+myMother.api)
}
pb(myMother.api);
/*获取网址链接上的参数wd结束-------*/
     function playername(name,id){
        if(name!==""){
          if(name!==name){
            console.log("视频名称不等："+name);
                           }
             var url = 'https://parse.xymov.net/api.php?wd='+name;//+'&cb=jQuery1820032595482234962336_1554377621309&_=1554377621789'
            this.m1907url=this.m1907url+name
            console.log("this.m1907url："+this.m1907url);
                 querySUG(url,id);
                 //m1907SUG(this.m1907url,id);
    
            console.log("视频名称："+name);
                     } else {
            console.log("视频名称name:为空");
            console.log("搜索视频框为空");


        //if(id!==""&&name!==""){

                       // document.write("视频名称name:为空"+"请填写视频名称name");
                       //        }
                             }
     }
$(function(){
$("#wd").keyup(function(e){
var kd = $("#wd").val();
playerwd(kd,wd,G_url,v);
playername(kd,23587) || '';
//querySUG(url);
});
});

    function querySUG(url,id){
      $.ajax({
              type : "get",
              async: true,
              url : url,
              dataType : "jsonp",
              jsonp: "cb",
              jsonpCallback:"callback",
              success : function(data){
              this.xplyer=data


//xielist(this.xplyer);
//xieplay(this.xplyer);
              xiekunzn(this.xplyer,id);
/*选择器开始*/
     function xiekunzn(xplyer,id){
        var kdid=23887
        var wdid=23587
        if(id!==kdid){
              xielist(xplyer);//视频搜索提示词列表入口
                       }
        if(id!==wdid){
              xieplay(xplyer);//视频列表入口
                      }
                          }
/*选择器结束*/

/*搜索框提示词开始*/
     function xielist(xplyerng){
	      var list=xplyerng.info;
	      var wlist = " "; 
              this.url=url
            if("undefined" !== typeof list ){

              for (i = 0, len = list.length; i < len; i++) 
		  {
              wlist+="<div class='click_work' onclick='Write(this)' onmouseout='recoverColorwhenMouseout(this)' onmouseover='changeColorwhenMouseover(this)'"
		     //var href="./?flag=" + v[i].flag+"&type=" +v[i].type + "&id=" + v[i].id + "&wd=" +v[i].title;
                     var title=removeHTMLTag(decodeURIComponent(list[i].title),true)+"(" +(list[i].from)+")";
		     wlist+= ">" + title + "</div>";
                  }
             //wlist+=  "</ul>";
         $("#word").html(wlist);

                                        }else{
		console.log("code   3："+xplyerng.code);	       
		toggleCenter(false);	   	   
	        var w='<h3 >很抱歉，未搜索到相关资源</h3>';     
		$("#info").html('请修改影片名后重新搜索');
		$("#main").html(w);  }
             }
/*搜索框提示词结束*/

/*搜索到的视频列表开始*/
     function xieplay(xplyerng){
	      	     var v=xplyerng.info;
                     var bing=xplyerng.success
            console.log("接口信号 code 0："+xplyerng.code);
            console.log("接口信号 success："+xplyerng.success);
            if("undefined" !== typeof v ){

                if(bing!==0){
console.log("接口信号 code 1："+xplyerng.code);
xie(v);//视频调用入口
             }
             
         }else{
		console.log("接口信号 code 3："+xplyerng.code);    
		toggleCenter(false);	   	   
	        var w='<h3 >很抱歉，未搜索到相关资源</h3>';     
		$("#info").html('请修改影片名后重新搜索');
		$("#main").html(w);  }
 
   }
/*搜索到的视频列表结束*/

                               }


                                       
              });





      }

//将搜索到的内容写到html的函数---
     function xie(v){
	     var w = "<br><br><div style='text-align:center;'><h3>搜索到相关视频有 " + v.length + " 个，请点击访问</h3>";
             var k ="关于[ "+ wd +" ]的搜索到相关视频"+ v.length + "个，欢迎使用唐方鹏提供的影片搜索，要点播的请点击播放"
             for (i = 0, len = v.length; i < len; i++) 
		  {
		     var href="../?flag=" + v[i].flag+"&type=" +v[i].type + "&id=" + v[i].id + "&wd=" +v[i].title;
                     var title=removeHTMLTag(decodeURIComponent(v[i].title),true)+"(" +(v[i].from)+")";
                     //var titleg="正在播放  ["+removeHTMLTag(decodeURIComponent(v[i].title),true)+"  ]"+" "+'part - '+"(" +(v[i].from)+")";
		     w+= "<a  class='list_btn' target='_parent' href='" +href +"' title='"+ title+"' onclick='Wetxt(this)'><strong>" + title + "</strong></a>";
                  }
             w+=  "</div><div id='m1907pid'>";
             $("#main").html(w);
             $("#info").html(k);
                    }
//将搜索到的内容写到html的函数结束----
//https://js.fundebug.cn/fundebug.1.7.3.min.js
/*-----api:https://z1.m1907.cn/api/v/?z=e090d9a71dfabaeefd49ff1c6afcdfae&jx=倚天屠龙记2019,开始----*/


    function m1907SUG(m1907url,id){
      $.ajax({
              type : "get",
              async: true,
              url : m1907url,
              dataType : "plain",
              //jsonp: "cb",
             // jsonpCallback:"callback",
              success : function(data){
              this.m1907plyer=data
              m1907xie(this.m1907plyer);
		console.log("code   4："+this.m1907plyer);
                                       }
            });
   }
/**/

//将搜索到的内容写到html的函数---
     function m1907xie(v){
	      	     var v=xplyerng.data;
                     //var bing=xplyerng.success
	    // var w = "<br><br><div style='text-align:center;'><h3>搜索到相关视频" + v.length + "个，请点击访问</h3>";
             var w = " ";
             var k ="关于[ "+ wd +" ]的搜索到相关视频"+ v.length + "个，欢迎使用唐方鹏提供的影片搜索，要点播的请点击播放"
             for (i = 0, len = v.length; i < len; i++) 
		  {
                    var tvname=v[i].name
                     var tvji=v[i].source.eps
		console.log("tvname："+tvname);
		     //var href="./?flag=" + v[i].flag+"&type=" +v[i].type + "&id=" + v[i].id + "&wd=" +v[i].title;
                     //var title=removeHTMLTag(decodeURIComponent(v[i].title),true)+"(" +(v[i].from)+")";
		     w+= "<a  class='list_btn' target='_parent' href='" +tvji +"' title='"+ tvname+"' ><strong>" + tvname + "</strong></a>";
                  }
             w+=  "</div>";
             $("#main").html(w);
             //$("#info").html(k);
                    }
//将搜索到的内容写到html的函数结束----
/*
检测鼠标
事件句柄　(Event Handlers)

属性	此事件发生在何时…
onmouseout	鼠标从某元素移开。
onmouseover	鼠标移到某元素之上。
*/
    function func(id){
       // var p = document.getElementById(id);
//1、采用style修改。
//      id.style.color = "red";
//2、采用类选择器className修改。
        //p.className = "one";
         id.style.display="block";//显示下拉提示框
    }
    function func1(id){
       // var p = document.getElementById(id);
       // p.className = "";
      id.style.display="none";//隐藏下拉提示框
    }

//-------------------------
        		//鼠标悬停时改变div的颜色
 		function changeColorwhenMouseover(div){
 			div.style.backgroundColor="pink";
 		}
 		//鼠标移出时回复div颜色
 		function recoverColorwhenMouseout(div){
 			div.style.backgroundColor="";
 		}
 		//当鼠标带点击div时，将div的值赋给输入文本框
 		function Write(div){
 			//将div中的值赋给文本框
 			document.getElementById("wd").value=div.innerHTML;
 			
 			//让下拉提示框消失
 			
 			div.parentNode.style.display="none";
 		}
                function Wetxt(div){
 			//将div中的值赋给文本框
 			//document.getElementById(div).value=div.innerHTML;
 			
 			//让下拉提示框消失
 			//var adom = $('#div');//根据标签的id获取标签a的dom节点，jquery方式
                       // var title = adom.attr('title');//获取title内容
 			var obj=document.getElementById(div);
                        var mytitle=obj.title;
                        var cvb="正在播放  [ "+mytitle+" ]"+" "+"part - 极源解析---XyPlayer 智能解析 X3 "
                        $("#info").html(cvb);
                        console.log("cvb   1："+cvb);
 		}