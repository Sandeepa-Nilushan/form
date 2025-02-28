"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          city: "",
          state: "",
        });
      } else {
        setResponseMessage(data.error);
      }
    } catch (error) {
      setResponseMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] py-8 rounded-lg bg-white flex flex-col items-center justify-center px-6 gap-3"
      >
        <h1 className="text-black text-2xl font-bold">Submission</h1>
        <Input name="firstName" placeholder="First Name" type="text" value={formData.firstName} onChange={handleChange} required />
        <Input name="lastName" placeholder="Last Name" type="text" value={formData.lastName} onChange={handleChange} required />
        <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
        <Input name="phoneNumber" placeholder="Phone Number" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
        <Input name="address" placeholder="Address" type="text" value={formData.address} onChange={handleChange} required />
        <Input name="city" placeholder="City" type="text" value={formData.city} onChange={handleChange} required />
        <Input name="state" placeholder="State" type="text" value={formData.state} onChange={handleChange} required />
        <Button type="submit" className="text-white bg-black w-full">
          Submit
        </Button>
        {responseMessage && <p className="text-red-500">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default Page;






import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !city ||
      !state
    ) {
      alert("Evey field must be filled!");
      return;
    }

    try {
      const res = await fetch("http://loacalhost/api/submitForm" , {
        method:"POSt",
        headers: {"Content-type": "application/Json"},
        body: JSON.stringify({})
      })
    } catch (error) {
      
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="w-[400px] py-8 rounded-lg bg-white flex flex-col items-center justify-center px-6 gap-3">
        <h1 className="text-black text-2xl font-bold">Submission</h1>
        <Input placeholder="First Name" type="text" className="text-black" />
        <Input placeholder="Last Name" type="text" className="text-black" />
        <Input placeholder="Email" type="email" className="text-black" />
        <Input placeholder="Phone Number" type="tel" className="text-black" />
        <Input placeholder="Address" type="text" className="text-black" />
        <Input placeholder="City" type="text" className="text-black" />
        <Input placeholder="State" type="text" className="text-black" />
        <Button className="text-white bg-black w-full" variant="outline">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default page;
