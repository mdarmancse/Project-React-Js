<?php

namespace App\Http\Controllers;

use App\Models\ClientReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function ReviewList(){
        $result=ClientReview::get();
        //  dd($result);
        return $result;
    }

    function ReviewDelete(Request $request){
        $id=$request->input('id');
        $result=ClientReview::where('id',$id)->delete();
        return $result;

    }
}
