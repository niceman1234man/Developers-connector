import React from "react";

function Login() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mx-auto">
        <div className="p-4 mx-auto">
          <h1 className="p-1 text-2xl font-bold">Login</h1>
          <p className="text-xl font-semibold">Create your DevConnector account</p>
        </div>
        <div className="w-[40%]">
          <form className="flex flex-col" >
            <input type="email" placeholder="Email" className="p-2  mt-4  border-black border-2"/>
            <input type="password" placeholder="password" className="p-2  mt-4  border-black border-2" />
            <button type="submit" className="p-2 mt-4 bg-blue-400 mb-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
