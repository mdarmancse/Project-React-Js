<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{

    function ProjectList(){
        $result=ProjectModel::get();
        //  dd($result);
        return $result;
    }

    function ProjectDelete(Request $request){
        $id=$request->input('id');

        $img_one=ProjectModel::where('id',$id)->get(['img_one']);
        $img_two=ProjectModel::where('id',$id)->get(['img_two']);

        $imageOne=explode('/',$img_one[0]['img_one'])[4];
        $imageTwo=explode('/',$img_two[0]['img_two'])[4];

        Storage::delete('public/'.$imageOne);
        Storage::delete('public/'.$imageTwo);

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
