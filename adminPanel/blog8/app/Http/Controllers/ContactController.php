<?php

namespace App\Http\Controllers;

use App\Models\ContactTable;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function ContactList(){
        $result=ContactTable::get();
      //  dd($result);
        return $result;
    }

    function ContactDelete(Request $request){
        $id=$request->input('id');
        $result=ContactTable::where('id',$id)->delete();
        return $result;

    }


}
