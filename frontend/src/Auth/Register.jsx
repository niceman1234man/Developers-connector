import React,{useState} from "react";


function Register() {
const initialData={
  name:'',
  email:'',
  password:'',
  password2:''
}
  const [formData,setFormData]=useState(initialData);

  const changeHandle=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const onSubmitHandle=(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData(initialData);
  }
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mx-auto">
        <div className="p-4 mx-auto">
          <h1 className="p-1 text-2xl font-bold">Sign Up</h1>
          <p className="text-xl font-semibold">
            Create your DevConnector account
          </p>
        </div>
        <div className="w-[40%]">
          <form className="flex flex-col" onSubmit={onSubmitHandle}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandle}
              className="p-2 mt-4 outline-blue-500 border-black border-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={changeHandle}
              className="p-2  mt-4  border-black border-2"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={changeHandle}
              className="p-2  mt-4  border-black border-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={formData.password2}
              onChange={changeHandle}
              className="p-2  mt-4  border-black border-2"
            />
            <button type="submit" className="p-2 mt-4 bg-blue-400 mb-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
