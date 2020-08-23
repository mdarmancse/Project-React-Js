<?php

namespace App\Http\Controllers;

use App\InformationTable;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function onSelect(){

        $result=InformationTable::all();
        return $result;
    }
}
