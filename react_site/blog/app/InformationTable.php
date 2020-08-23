<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InformationTable extends Model
{
    protected $table='information_etc';
    protected $primaryKey='id';
    public $incrementing=true;
    protected $keyType='int';
    public $timestamps=false;
}
