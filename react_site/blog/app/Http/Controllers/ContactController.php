<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactTable;

class ContactController extends Controller
{
    function onContactSend(Request $request){

        $name=$request->input('name');
        $email=$request->input('email');
        $message=$request->input('message');

        $result=ContactTable::insert(
            [
                'name'=>$name,
                'email'=>$email,
                'message'=>$message,
            ]
        );

        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }
}
