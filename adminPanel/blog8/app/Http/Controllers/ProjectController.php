<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    function ProjectList(){
        $result=ProjectModel::get();
        //  dd($result);
        return $result;
    }

    function ProjectDelete(Request $request){
        $id=$request->input('id');
        $result=ProjectModel::where('id',$id)->delete();
        return $result;

    }

    function AddProject(Request $request){

        $title=$request->input('project_name');
        $des=$request->input('short_des');
        $feature=$request->input('project_feature');
        $link=$request->input('live_preview');
        $photoOnePath=$request->file('img_one')->store('Public');
        $photoTwoPath=$request->file('img_two')->store('Public');
        $photoOneName=explode("/",$photoOnePath)[1];
        $photoTwoName=explode("/",$photoTwoPath)[1];



        $photoOneUrl ="http://".$_SERVER['HTTP_HOST']. "/storage/" . $photoOneName;
        $photoTwoUrl ="http://".$_SERVER['HTTP_HOST']. "/storage/" . $photoTwoName;
        $result = ProjectModel::insert([

            'project_name' => $title,
            'short_des' => $des,
            'project_feature' => $feature,
            'live_preview' => $link,
            'img_one' => $photoOneUrl,
            'img_two' => $photoTwoUrl,

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
