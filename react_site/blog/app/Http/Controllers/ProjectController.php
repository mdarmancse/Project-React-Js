<?php

namespace App\Http\Controllers;

use App\ProjectModel;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    function onSelectThree(){
        $result=ProjectModel::limit(3)->get();
        return $result;


    }
    function onSelectAll(){

        $result=ProjectModel::all();
        return $result;

    }
    function onSelectDetails(Request $request){

        $id=$request->input('id');
        $result=ProjectModel::where('id',$id)->get();
        return $result;
    }
}
