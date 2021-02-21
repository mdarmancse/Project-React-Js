<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseTable;
use App\Models\ContactTable;
use App\Models\ClientReview;
use App\Models\ProjectModel;
use App\Models\ServicesModel;

class HomeController extends Controller
{
    function countSummery(){
        $contact=ContactTable::count();
        $course=CourseTable::count();
        $project=ProjectModel::count();
        $service=ServicesModel::count();
        $review=ClientReview::count();

        $totalCount=array(
            'review'=>$review,
            'contact'=>$contact,
            'service'=>$service,
            'project'=>$project,
            'course'=>$course,
                                        ) ;

        return json_encode($totalCount);

    }


}
