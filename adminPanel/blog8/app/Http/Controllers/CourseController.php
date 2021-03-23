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
    function AddCourse(Request $request){

        $title=$request->input('short_title');
        $des=$request->input('short_des');
        $long_title=$request->input('long_title');
        $long_des=$request->input('long_des');
        $lecture=$request->input('total_lecture');
        $student=$request->input('total_student');
        $skill=$request->input('skill_all');
        $video=$request->input('video_url');
        $course=$request->input('courses_link');
        $photoOnePath=$request->file('small_img')->store('Public');

        $photoOneName=explode("/",$photoOnePath)[1];




        $photoOneUrl = "http://".$_SERVER['HTTP_HOST']."/storage/" . $photoOneName;

        $result = CourseTable::insert([

            'short_title' => $title,
            'short_des' => $des,
            'long_title' => $long_title,
            'long_des' => $long_des,
            'total_lecture' => $lecture,
            'total_student' => $student,
            'skill_all' => $skill,
            'video_url' => $video,
            'courses_link' => $course,
            'small_img' => $photoOneUrl,

        ]);

        //dd($result);

        if ($result=true){
            return  1;
        }else{
            return 0;
        }
        //  return $result;

    }
}
