$("document").ready(function()
{
$("#b2").click(function(){
   
   var username=$('#username').val();
        $.ajax({
            url:"/php/task/php1/check.php",
            type:"post",
            data:$("#f2").serialize(),
            success:function(res)
            { 
                if(res==1)
                {
                  localStorage.setItem("userdata",username);
                  alert("login successfully");
                  //window.location.href="/php/task/html/welcome.html";
                }
                else
                {
                    alert("invalid");
                }
                $("#f2")[0].reset();
               
            }
        });
    });
});