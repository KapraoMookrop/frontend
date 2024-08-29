"use client";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation"; // ใช้ useRouter จาก next/navigation

export default function Page({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [user_id, setId] = useState("");

  const router = useRouter(); // สร้างตัวแปร router
  

  useEffect(() => {

    // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
    const token = localStorage.getItem('token');
    if (!token) {
      // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปที่หน้า login
      router.push('/signin');
      return;
    }
    
    async function getUsers() {
      try {
        const res = await fetch(`https://backend-taupe-one.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);

        // Set initial form values when data is fetched
        if (data.length > 0) {
          const item = data[0];
          setId(item.id);
          setFirstName(item.firstname);
          setLastName(item.lastname);
          setUserName(item.username);
          setPassWord(item.password);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("https://backend-taupe-one.vercel.app/api/users", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, firstname, lastname, username, password }),
      });

      if (res.status === 204) {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'The user information has been updated successfully.',
        }).then(() => {
          router.push("../"); // เปลี่ยนเส้นทางหลังจาก submit สำเร็จ
        });
      } else if (res.ok) {
        const result = await res.json();
        console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'The user information has been updated successfully.',
        }).then(() => {
          router.push("../"); // เปลี่ยนเส้นทางหลังจาก submit สำเร็จ
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'There was a problem updating the user information. Please try again.',
        });
        console.error('Failed to update:', res.statusText);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during the update process. Please try again.',
      });
      console.error('Error during fetch:', error);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form
          </div>
          <div className="card-body">
            {items.map((item) => (
              <form className="row g-3" onSubmit={handleSubmit} key={item.id}>
                <input
                  type="hidden"
                  className="form-control"
                  value={user_id} // Use value instead of defaultValue
                  onChange={(e) => setId(e.target.value)}
                  required
                />
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">
                    FirstName
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <i className="bi bi-person-vcard"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname} // Use value instead of defaultValue
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">
                    LastName
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <i className="bi bi-person-vcard-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname} // Use value instead of defaultValue
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <i className="bi bi-person-vcard"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={username} // Use value instead of defaultValue
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <i className="bi bi-person-vcard-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      value={password} // Use value instead of defaultValue
                      onChange={(e) => setPassWord(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-box-arrow-right"></i> Edit
                  </button>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
