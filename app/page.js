// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="flex flex-col justify-center items-center w-screen h-screen gap-6">
//       <h1 className="">My Submission Form</h1>
//       <div className="flex gap-4">
//         <Button type="Add" className="text-black bg-yellow-200 px-8 py-6">
//           Add Data
//         </Button>
//         <Button type="View" className="text-black bg-yellow-200 px-8 py-6">
//           View Data
//         </Button>
//         <Button type="Update" className="text-black bg-yellow-200 px-8 py-6">
//           Update Data
//         </Button>
//         <Button type="Delete" className="text-black bg-yellow-200 px-8 py-6">
//           Delete Data
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-6">
      <h1 className="">My Submission Form</h1>
      <div className="flex gap-4">
        <Button
          onClick={() => router.push("/submission")} // Navigates to submission page
          className="text-black bg-yellow-200 px-8 py-6"
        >
          Add Data
        </Button>
        <Button
          onClick={() => router.push("/details")} // Navigates to details page
          className="text-black bg-yellow-200 px-8 py-6"
        >
          View Data
        </Button>
        <Button className="text-black bg-yellow-200 px-8 py-6">
          Update Data
        </Button>
        <Button className="text-black bg-yellow-200 px-8 py-6">
          Delete Data
        </Button>
      </div>
    </div>
  );
}
