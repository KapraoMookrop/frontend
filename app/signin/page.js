"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-taupe-one.vercel.app/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        // ถ้าเกิดข้อผิดพลาด แสดง SweetAlert2 พร้อมข้อความแสดงข้อผิดพลาด
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.error || "An unexpected error occurred",
        });
      } else {
        // เก็บ token ไว้ใน localStorage
        localStorage.setItem("token", result.token);

        // แสดง SweetAlert2 พร้อมข้อความสำเร็จ
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        }).then(() => {
          // เปลี่ยนเส้นทางไปหน้าหลักหลังจากล็อกอินสำเร็จ
          window.location.href = "/";
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
      console.error("Fetch error:", err);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">SignIn Form</div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-12">
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
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
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
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
