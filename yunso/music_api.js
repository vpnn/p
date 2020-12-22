//"http://music.163.com/api/song/lyric?os=pc&id="+_GET('v')+"&lv=-1&kv=-1&tv=-1"
console.log("接口信号 v："+_GET('v'))

/* ajax(input, filter, type, page);
        var ajax = function ajax(input, filter, type, page) {
          $.ajax({
            type: 'POST',
            url: getUrl(),
            timeout: 30000,
            data: {
              input: input,
              filter: filter,
              type: type,
              page: page
            },
            dataType: 'json',
			
		  });
		  ); */
	music("http://music.163.com/api/song/lyric?os=pc&id="+_GET('v')+"&lv=-1&kv=-1&tv=-1",_GET('v'))	  
    function music(url,id){
		$.ajax({
                url:url,//+"后台bai地du址的zhidaourl",
                data:{
                    id:id//参数zhuan
                },
                type:"POST",
                success:function(re){
                    console.log(re);
                }
            });
	}
//MusicSUG("http://music.163.com/api/song/lyric?os=pc&id="+_GET('v')+"&lv=-1&kv=-1&tv=-1");
    function MusicSUG(url,id){
		      $.ajax({
              type : "get",
              async: true,
              url : url,
              dataType : "jsonp",
              jsonp: "cb",
              jsonpCallback:"callback",
              success : function(data){
				   this.xplyer=data
				   Musicplay(xplyer);//音乐列表入口
				   console.log(data)

			  }							
	          });			  
	};
	
	
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

	//将搜索到的内容写到html的函数---
     function xie(v){
		 console.log(v);
	      var w = "<br><br><div style='text-align:center;'><h3>搜索到相关视频有 " + v.length + " 个，请点击访问</h3>";
             var k ="关于[ "+ wd +" ]的搜索到相关视频"+ v.length + "个，欢迎使用唐方鹏提供的影片搜索，要点播的请点击播放"
            /*  for (i = 0, len = v.length; i < len; i++) 
		  {
		     var href="../?flag=" + v[i].flag+"&type=" +v[i].type + "&id=" + v[i].id + "&wd=" +v[i].title;
                     var title=removeHTMLTag(decodeURIComponent(v[i].title),true)+"(" +(v[i].from)+")";
                     //var titleg="正在播放  ["+removeHTMLTag(decodeURIComponent(v[i].title),true)+"  ]"+" "+'part - '+"(" +(v[i].from)+")";
		     w+= "<a  class='list_btn' target='_parent' href='" +href +"' title='"+ title+"' onclick='Wetxt(this)'><strong>" + title + "</strong></a>";
                  }
             w+=  "</div><div id='m1907pid'>"; */
			 
             $("#main").html(w);
             $("#info").html(k);
                    }
//将搜索到的内容写到html的函数结束----

// 获取 url
function getUrl(path) {
    var url = location.href.split('?')[0];
    return path ? url + path : url;
  }			  
//获取url中"?"符后的字串			  
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();
 
// var 参数1,参数2,参数3,参数N;
// 参数1 = Request['参数1'];
// 参数2 = Request['参数2'];
// 参数3 = Request['参数3'];
// 参数N = Request['参数N'];

//1、URL拼接参数
/* $url = "http://www.csdn.net";
$param = array(
	//'flag''1'; 	//=>	'1';
	'type'	=>	'code',
	'time'	=>	time(),
);
$url .= "?".http_build_query($param);
echo $url;
 */

/* 
//2、获取URL各参数
$url = "http://www.csdn.net?flag=1&type=code&time=1505987276";
$str = explode("?",$url);
parse_str($str[1],$param);
print_r($param); */