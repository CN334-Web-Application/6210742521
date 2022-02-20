<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function index(){
        return Profile::all();
    }

    public function update(Request $request, $id) {

        $request->validate([
            'name' => 'required',
            ]);
            $profile = Profile::find($id);
            $profile->name = $request->name;
            $profile->save();
            // return response()->json(['status' => $Education->save()]);
    }
}
