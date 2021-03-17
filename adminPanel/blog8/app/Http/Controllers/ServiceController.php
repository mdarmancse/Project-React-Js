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

    function AddService(Request $request)
    {

        $title = $request->input('service_name');
        $des = $request->input('service_des');
        $photoPath = $request->file('service_logo')->store('Public');
        $photoName = explode("/", $photoPath)[1];


        $photoUrl ="/storage/" . $photoName;
        $result = ServicesModel::insert([

            'service_name' => $title,
            'service_des' => $des,
            'service_logo' => $photoUrl

        ]);

        if ($result = true) {
            return 1;
        } else {
            return 0;
        }
        //  return $result;

    }
}
