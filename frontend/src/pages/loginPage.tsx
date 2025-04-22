import React, { useState } from "react";

import vetkim from "../assets/vetkim1.jpg";
import logo from "../assets/vetkim-logo.jpg";
import "../css/loginpage.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/appSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json(); // yanıt JSON ise

      if (res.ok) {
        localStorage.setItem("token", data.token);
        dispatch(login());
        navigate("/");
      } else {
        alert(data.error || "Giriş başarısız!");
      }

      // localStorage.setItem("token", res.data.token);
      // Navigate işlemi vs. burada yapılabilir
    } catch (err: any) {
      console.error("Giriş hatası:", err.response?.data);
      alert(err.response?.data?.error || "Bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pb-10">
      <div className="w-8/12 lg:w-4/12">
        <img src={vetkim} alt="" />
        <p className="text-3xl lg:text-5xl">
          A Great <span className="a">way</span> to
        </p>
        <p className="text-3xl font-bold lg:text-5xl">
          find a veterinary clinic for your <span className="b">friends</span>
        </p>
      </div>
      <div className="border-2 border-black px-5 py-10 w-8/12 md:5/12 lg:w-4/12 ">
        <div className="flex flex-row justify-center">
          <img className="mr-2" src={logo} alt="" />
          <p className="font-semibold">VETKİM</p>
        </div>
        <div className="flex flex-col justify-between gap-6 my-5">
          <input
            className="bg-gray-100 px-2 py-1 rounded"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-gray-100 px-2 py-1 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-400 py-1.5 rounded-xl cursor-pointer"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
        <div>
          <p className="or">or</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-center opacity-50">Forgot password?</p>
          <p className="text-center opacity-50">
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
