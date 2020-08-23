<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientReview extends Model
{
    protected $table='client_review';
    protected $primaryKey='id';
    public $incrementing=true;
    protected $keyType='int';
    public $timestamps=false;
}
