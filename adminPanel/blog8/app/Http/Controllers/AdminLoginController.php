<?php

namespace App\Http\Controllers;

use App\Models\AdminLogin;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
{
    function LoginPage(){

        return view('login');

    }

    function onLogin(Request $request){

        $userName=$request->UserName;
        $password=$request->Password;

        $count=AdminLogin::where('user_name',$userName)->where('password',$password)->count();

        if ($count==1){
                $request->session()->put('userNameKey',$userName);
                return "1";

        }else{
            return "0";

        }



    }

    function onLogout(Request $request){

        $request->session()->flash('userNameKey');
        return redirect('/login');


    }
}
