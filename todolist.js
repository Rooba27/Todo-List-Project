//check off clicking todos
$("ul").on("click", "li", function(){    
   $(this).toggleClass("completed");
});

//to delete todos
$("ul").on("click", "span",function(event){
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
   });
   event.stopPropagation;
});

//adding new todos
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
       var newtodo = $(this).val(); //grabbing new todo
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash'> </i> </span> "+ newtodo +"</li>")//add newtodo to li
    }
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


/* $("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeOut();
}); */