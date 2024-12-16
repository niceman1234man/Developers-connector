import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="h-[80vh]">
      <div className="flex flex-col justify-center items-center mx-auto mt-8">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Developer Connector</h1>
        <p className="text-xl font-semibold">Create a developer profile/portfolio share posts and get help from other developers</p>
        </div>
        <div className="flex justify-center items-center ">
         <ul className="flex items-center">
            <li className="p-2"> <Link className="bg-teal-400 p-2 rounded-sm" to='/register'>SignUp</Link></li>
            <li > <Link className="bg-red-400 p-2 rounded-sm" to='/login'>Login</Link></li>
         </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
