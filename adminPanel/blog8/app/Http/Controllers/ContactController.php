<?php

namespace App\Http\Controllers;

use App\Models\ContactTable;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function ContactList(){
        $result=ContactTable::all();
        return $result;
    }


}
