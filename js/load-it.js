function unWrapPlaceholder(){
   $(this).contents().unwrap();
 }


$(function(){
   $(".include").each(function(index){
     $(this).load(window.location.hostname+"/shared/"+$(this).data("module")+".html", unWrapPlaceholder);
   });
});
