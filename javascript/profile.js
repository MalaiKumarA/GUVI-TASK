$("document").ready(function()
{
    $("#s1").click(function()
    {
      var n=$('#name').val();
      var age=$('#age').val();
      var ph=$('#ph').val();
      var eid=$('#eid').val();
      var dob=$('#dob').val();
      var r=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      if(n=="")
      {
        alert("please enter user name");
        return false;
      }
          if(ph=="")
          {
            alert("please enter phone number");
            return false;
          }
          if(ph<10)
          {
            alert("phone number should be contain 10 numbers");
            return false;
          }
          if(age=="")
          {
            alert("please enter age");
            return false;
          }
          if(eid=="")
          {
            alert("please enter Email id");
            return false;
          }
          if(r.test(eid))
          {
            alert("invalid email");
            return false;
          }
          if(dob=="")
          {
            alert("please enter date of birth");
            return false;
          }
        $.ajax({
            url:"/php/task/php1/mongoinsert.php",
            type:"post",
            data:$("#p1").serialize(),
            success:function(res)
            { 
                alert(res);
                $("#p1")[0].reset();
                window.location.href="/php/task/html/login.html";
            }
        });
    });
});



