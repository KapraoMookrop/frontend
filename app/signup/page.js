'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Page() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-taupe-one.vercel.app/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });

      if (res.ok) {
        // แสดง SweetAlert เมื่อการสมัครสำเร็จ
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: 'You have successfully signed up!',
        });
      } else {
        const result = await res.json();
        // แสดง SweetAlert เมื่อการสมัครล้มเหลว
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: result.error || 'An unexpected error occurred',
        });
      }
    } catch (error) {
      // แสดง SweetAlert เมื่อมีข้อผิดพลาดที่ไม่คาดคิด
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred',
      });
      console.error('Error during fetch:', error);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-primary text-white">
            SignUp Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-fill"></i></span>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-key-fill"></i></span>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary"><i className="bi bi-box-arrow-right"></i> Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
