import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [profile, setProfile] = useState();
  const navigate = useNavigate();

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
    seterror("");
  };

  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
    seterror("");
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const Login2 = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      seterror("Invalid email format");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful");
      navigate("/login");
    } catch (e) {
      console.log(e);
      seterror(e.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-2 py-4 md:w-[50vw] xl:w-[28vw] sm:w-[15vw] lg:w-[28vw] ">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full text-center text-xl font-medium max-w-[100px]">
            Parijat
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            login
          </Link>
        </p>
        {error ? (
          <p className="text-red-600 mt-8 text-center">{error}</p>
        ) : null}
        <form onSubmit={Login2} className="mt-8 flex justify-start">
          <div className="space-y-5 gap-2 w-full">
            <input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className="rounded p-2 w-full"
              value={email}
              onChange={handleEmailchange}
            />
            <br />

            <input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              className="rounded p-2 w-full"
              value={password}
              onChange={handlePasswordchange}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfile(e.target.files[0])}
              name=""
              id=""
            />
            <br />

            <button type="submit" className="w-full">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
