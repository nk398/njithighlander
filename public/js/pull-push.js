window.onload(function(){

    var scr  = $("stories-component").first().prev().ejs();
    scr += '$("#sports-image").attr({"src": obj.data[0].content_image_url,"width":"600px" });'
    scr += '$("#sports-link").attr("href", obj.data[0].content_url);' 	
	scr += '$("#caption").find("h1").text(obj.data[0].content_title);'
	scr += '$("#caption").find("h3").text(obj.data[0].content_date);'
    $("#sports-script").text(scr);
    //$("#dummy").remove();
window.onload("#btn1").click(function(){
$("#sports-para").append('<b>Image</b>:' + obj.data[0].content_image_url + '<br/>');
$("#sports-para").append('<b>Link</b>:' + obj.data[0].content_url + '<br/>');
$("#sports-para").append('<b>Title</b>:' + obj.data[0].content_title + '<br/>');
$("#sports-para").append('<b>Date</b>:' + obj.data[0].content_date + '<br/>');
$("#sports-para").append('<b>Video</b>:' + obj.data[0].games[0].media.video  + '<br/>'); 
});
	
});