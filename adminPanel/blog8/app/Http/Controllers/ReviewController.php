<?php

namespace App\Http\Controllers;

use App\Models\ClientReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function ReviewList()
    {
        $result = ClientReview::get();
        //  dd($result);
        return $result;
    }

    function ReviewDelete(Request $request)
    {
        $id = $request->input('id');
        $result = ClientReview::where('id', $id)->delete();
        return $result;

    }

    function AddReview(Request $request)
    {

        $title = $request->input('title');
        $des = $request->input('des');
        $photoPath = $request->file('photo')->store('Public');
        $photoName = explode("/", $photoPath)[1];


        $photoUrl ="http://".$_SERVER['HTTP_HOST']."/storage/" . $photoName;
        $result = ClientReview::insert([

            'client_title' => $title,
            'cliet_des' => $des,
            'client_img' => $photoUrl

        ]);

        if ($result = true) {
            return 1;
        } else {
            return 0;
        }
        //  return $result;

    }
}
