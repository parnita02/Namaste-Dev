import React from "react";

function ContactUs() {
  return (
    <div className="my-7">
      <h1 className="w-44 font-bold pl-2 pr-14 text-lg py-1 rounded-tl-lg rounded-bl-lg mx-4 bg-gradient-to-r from-yellow-500 to-white">
        ContactUs
      </h1>
      <form>
        <div className="m-4">
          Name:
          <input
            type="text"
            placeholder="Full name"
            className="border border-black  px-1 py-0.5 w-64"
          />
        </div>
        <div className="m-4">
          {" "}
          Email:{" "}
          <input
            type="text"
            placeholder="email"
            className="border border-black  px-1 py-0.5 w-64"
          />
        </div>
        <div>
          <textarea
            placeholder="Write your query here..."
            className="border border-black mx-2 w-80 h-48 px-1.5"
          />
        </div>

        <button className="mx-3 bg-yellow-500 px-3 py-1 rounded-full text-white shadow-lg shadow-gray-400 hover:scale-105 hover:shadow-slate-500 hover:bg-yellow-600 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
