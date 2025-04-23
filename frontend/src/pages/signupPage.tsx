import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/appSlice";
import vetkim from "../assets/vetkim1.jpg";
import logo from "../assets/vetkim-logo.jpg";
import "../css/loginpage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    const userData = { email, full_name: fullName, password };

    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Kayıt işlemi başarısız.");
      }

      const result = await response.json();
      
      localStorage.setItem("token", result.token || ""); 
      dispatch(login());
      setMessage("Kayıt başarılı! Ana sayfaya yönlendiriliyorsunuz...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Kayıt hatası:", error);
      
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      setMessage(errorMessage || "Sunucu hatası oluştu.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pb-10">
      <div className="w-8/12 lg:w-4/12">
        <img src={vetkim} alt="" />
        <p className="text-3xl lg:text-5xl">A Great <span className="a">way</span> to</p>
        <p className="text-3xl font-bold lg:text-5xl">
          find a veterinary clinic for your <span className="b">friends</span>
        </p>
      </div>
      <div className="border-2 border-black px-5 py-10 w-8/12 md:5/12 lg:w-4/12">
        <div className="flex flex-row justify-center">
          <img className="mr-2" src={logo} alt="" /> <p className="font-semibold">VETKİM</p>
        </div>
        <div className="flex flex-col gap-6 my-5">
          <input 
            type="text" placeholder="Email" 
            className="bg-gray-100 px-2 py-1 rounded" 
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input 
            type="text" placeholder="Full name" 
            className="bg-gray-100 px-2 py-1 rounded" 
            value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input 
            type="password" placeholder="Password" 
            className="bg-gray-100 px-2 py-1 rounded" 
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-purple-400 py-1.5 rounded-xl cursor-pointer" 
                  onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        {message && <p className="text-center text-red-500">{message}</p>}
        <div><p className="or">or</p></div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-center opacity-50">Forgot password?</p>
          <p className="text-center opacity-50">Have an account? Log in</p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
