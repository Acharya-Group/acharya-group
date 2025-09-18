"use client"
import React, { useState } from "react";
import Button from "../ui/Button";

const ValidateLetter = () => {
  const [refNumber, setRefNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refNumber.trim() === "") {
      alert("Please enter a reference number!");
      return;
    }
    // For now just log it
    console.log("Reference Number:", refNumber);
    alert(`Reference Number submitted: ${refNumber}`);
  };

  return (
    <div className="flex items-center justify-center container mx-auto px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col sm:flex-row justify-center gap-3 items-center rounded-2xl  w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Enter Reference Number"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
          className="w-full px-4 py-3 min-w-[300px] border rounded-lg"
        />

       <Button
  type="submit"
  content="Submit"
  className="px-3 py-2 max-w -[100px] mt-2 sm:mt-0"
/>

      </form>
    </div>
  );
};

export default ValidateLetter;
