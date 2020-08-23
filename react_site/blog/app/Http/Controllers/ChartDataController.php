<?php

namespace App\Http\Controllers;

use App\ChartData;
use Illuminate\Http\Request;

class ChartDataController extends Controller
{
    function onSelect(){

        $result=ChartData::all();
        return $result;
    }
}
