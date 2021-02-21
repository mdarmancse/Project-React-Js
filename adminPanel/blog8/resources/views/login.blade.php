<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>Admin Login</title>
</head>
<body>

<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-center mt-5">
            <div class="card">
                <div class="card-body">
                    <h3>Admin Login</h3><hr>

                    <input id="UserName" class="form-control" type="text" placeholder="User Name" name="user"><br>
                    <input id="Password" class="form-control" type="password" placeholder="Password" name="password"><br>
                    <button id="LoginBtn" onclick="AdminLogin()" class="btn normal-btn btn-block" >Login</button>

            </div>


            </div>

        </div>

    </div>
</div>






<script type="text/javascript">

    function AdminLogin() {
        var username=document.getElementById('UserName').value;
        var password=document.getElementById('Password').value;

        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function () {
            if(this.readyState=4 && this.status==200){

               if(this.responseText=='1') {

                  window.location.href="/";
               }else{


               }
            }

        }
        xhttp.open("GET","/onLogin/"+username+"/"+password,true)
        xhttp.send();

    }


</script>

</body>
</html>
