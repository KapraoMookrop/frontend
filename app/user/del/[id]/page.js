"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ใช้ useRouter จาก next/navigation

export default function Page({ params }) {
  const { id } = params;
  const [user_id, setId] = useState(null);
  const router = useRouter(); // สร้างตัวแปร router

  useEffect(() => {
    async function getUsersAndDelete() {
      try {
        // Fetch the user data
        const res = await fetch(`https://backend-taupe-one.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();

        if (data.length > 0) {
          const item = data[0];
          setId(item.id); // Set user_id

          // Proceed to delete the user
          const del = await fetch("https://backend-taupe-one.vercel.app/api/users", {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: item.id }),
          });

          if (del.status === 200) {
            console.log("Delete successful, but no content returned.");
            router.push("../"); // Redirect after successful deletion
          } else if (del.ok) {
            const result = await del.json();
            console.log(result);
            router.push("../"); // Redirect after successful deletion
          } else {
            console.error('Failed to delete:', del.statusText);
          }
        }
      } catch (error) {
        console.error('Error during fetch or delete:', error);
      }
    }

    getUsersAndDelete();
  }, [id, router]);

  return null; // ไม่ต้องแสดงอะไรบนหน้าเว็บ
}
