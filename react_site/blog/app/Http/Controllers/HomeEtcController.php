<?php

namespace App\Http\Controllers;

use App\HomeEtc;
use Illuminate\Http\Request;

class HomeEtcController extends Controller
{
    function homeTop(){

        $result=HomeEtc::select('home_title','home_subtitle')->get();
        return $result;
    }

    function techDes(){

        $result=HomeEtc::select('tech_des')->get();
        return $result;
    }

    function projectClient(){

        $result=HomeEtc::select('total_project','total_client')->get();
        return $result;
    }

    function video(){

        $result=HomeEtc::select('video_des','video_url')->get();
        return $result;
    }
}
