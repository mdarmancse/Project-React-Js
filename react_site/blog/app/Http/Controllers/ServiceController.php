<?php

namespace App\Http\Controllers;

use App\ServicesModel;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    function onSelect(){

        $result=ServicesModel::all();
        return $result;
    }
}
