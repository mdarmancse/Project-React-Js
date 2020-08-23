<?php

namespace App\Http\Controllers;

use App\ClientReview;
use Illuminate\Http\Request;

class ClientReviewController extends Controller
{
    function onSelect(){

        $result=ClientReview::all();
        return $result;
    }
}
