<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminLogin extends Model
{
    protected $table='admin_login';
    protected $primaryKey='id';
    public $incrementing=true;
    protected $keyType='int';
    public $timestamps=false;
}
