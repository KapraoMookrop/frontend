"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ตรวจสอบว่ามี token ใน localStorage หรือไม่
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // แปลงให้เป็น Boolean ถ้ามี token จะเป็น true, ถ้าไม่มีจะเป็น false
  }, []);

  const handleLogout = () => {
    // ลบ token ออกจาก localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false); // เปลี่ยนสถานะเป็นยังไม่ล็อกอิน
    router.push('/'); // เปลี่ยนเส้นทางไปที่หน้าแรกหรือหน้าที่ต้องการหลังจากออกจากระบบ
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="/img/logo.png" alt="Logo" width="100" className="d-inline-block align-text-center" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/"><i className="fa-solid fa-house me-1" aria-hidden="true"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/about"><i className="fa-solid fa-circle-info me-1" aria-hidden="true"></i>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/service"><i className="fa-solid fa-list-ul me-1 me-1" aria-hidden="true"></i>Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact"><i className="fa-solid fa-message me-1" aria-hidden="true"></i>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/user"><i className="fa-solid fa-user me-1" aria-hidden="true"></i>Edit User</Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <button type="button" className="btn btn-outline-danger me-2" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket me-1" aria-hidden="true"></i>Logout
              </button>
            ) : (
              <>
                <Link type="button" className="btn btn-primary me-2" href="/signup">
                  <i className="fa-solid fa-user-plus me-1" aria-hidden="true"></i>Sign Up
                </Link>
                <Link type="button" className="btn btn-outline-success me-2" href="/signin">
                  <i className="fa-solid fa-right-to-bracket me-1" aria-hidden="true"></i>Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
