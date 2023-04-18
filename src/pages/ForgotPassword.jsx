import React, { useState } from "react";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className=" justify-center flex flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1671493286575-5215b2ad5b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="key"
            className="rounded-2xl w-full"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="mb-8 w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition ease-in-out"
              type="text"
              id="email"
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="px-2 mt-8 flex justify-between">
              <div className="flex">
                <p>Don't have an account?</p>
                <Link
                  className="ml-3 transition ease-in-out text-red-500 hover:scale-105 hover:text-red-600"
                  to="/sign-up"
                >
                  Register
                </Link>
              </div>
              <Link
                className="transition ease-in-out text-blue-500  hover:text-blue-700"
                to="/sign-in"
              >
                Sign in instead
              </Link>
            </div>
            <button
              className="transition ease-in-out shadow-md hover:shadow-lg rounded uppercase mt-8 p-3 w-full active:bg-blue-900 bg-blue-500 hover:bg-blue-700 text-white font-bold"
              type="submit"
            >
              Send Email
            </button>
            <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
