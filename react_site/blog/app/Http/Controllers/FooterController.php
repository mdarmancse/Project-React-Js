<?php

namespace App\Http\Controllers;

use App\FooterTable;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    function onSelect(){

        $result=FooterTable::all();
        return $result;
    }
}
