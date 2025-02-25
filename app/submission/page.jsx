import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const page = () => {
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
        <Button className="text-white bg-black w-full" variant="outline">Submit</Button>

      </div>
    </div>
  );
};

export default page;
