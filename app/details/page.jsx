"use client";
import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch("/api/submitForm");
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <Table>
        <TableCaption>A list of submitted user details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {details.length > 0 ? (
            details.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="7" className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
