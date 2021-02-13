<?php

namespace App\Http\Controllers;

use App\Models\ServicesModel;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    function ServiceList(){
        $result=ServicesModel::get();
        //  dd($result);
        return $result;
    }

    function ServiceDelete(Request $request){
        $id=$request->input('id');
        $result=ServicesModel::where('id',$id)->delete();
        return $result;

    }
}
