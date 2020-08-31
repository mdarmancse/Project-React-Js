<?php

namespace App\Http\Controllers;

use App\CourseTable;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function onSelectFour(){
        $result=CourseTable::limit(4)->get();
        return $result;


    }
    function onSelectAll(){

        $result=CourseTable::all();
        return $result;

    }
    function onSelectDetails($courseID){

        $id=$courseID;
        $result=CourseTable::where('id',$id)->get();
        return $result;
    }
}
