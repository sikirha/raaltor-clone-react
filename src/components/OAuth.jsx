import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button className="transition ease-in-out hover:shadow-lg shadow-md rounded hover:bg-red-800 active:bg-red-900 py-3 font-semibold bg-red-600 text-white uppercase w-full flex items-center justify-center">
      <FcGoogle className="text-2xl bg-white rounded-full mr-1" />
      Continue with Google
    </button>
  );
}
