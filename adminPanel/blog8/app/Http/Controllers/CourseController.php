<?php

namespace App\Http\Controllers;

use App\Models\CourseTable;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function CourseList(){
        $result=CourseTable::get();
        //  dd($result);
        return $result;
    }

    function CourseDelete(Request $request){
        $id=$request->input('id');
        $result=CourseTable::where('id',$id)->delete();
        return $result;

    }
}
