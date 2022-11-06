$("document").ready(function()
{
    $("#b1").click(function(){
       var un=$('#username').val();
       var ph=$('#ph').val();
       var pw=$('#password').val();
       var con=$('#cpassword').val();
       if(un=="")
       {
        alert("please enter user name");
        return false;
       }
       if(un.length<4)
       {
        alert("user name should be 4 charcter");
        return false;
       }
       if(ph=="")
       {
        alert("please enter phone number");
        return false;
       }
       if(ph.length<10)
       {
        alert("phone number must contain 10 numbers")
        return false;
       }
       if(pw=="")
       {
        alert("please enter password");
        return false;
       }
       if(pw.length<8)
       {
        alert("password must be 8 charcters");
       }
       if(con=="")
       {
        alert("please enter confirm password");
        return false;
       }
       if(con<8)
       {
        alert("confirm password must be 8 charcters");
        return false;
       }
       if(pw!=con)
       {
        alert("password is not matched");
        return false;
       }
        $.ajax({
            url:"/php/task/php1/insert.php",
            type:"post",
            data:$("#f1").serialize(),
            success:function(d)
            {
                alert(d);
                $("#f1")[0].reset();
                window.location.href="/php/task/html/profile.html";
            }
        });
    });
});