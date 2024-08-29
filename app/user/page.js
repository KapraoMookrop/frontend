'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  const router = useRouter(); // ใช้ useRouter ในการเปลี่ยนเส้นทาง

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
    const token = localStorage.getItem('token');
    if (!token) {
      // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปที่หน้า login
      router.push('/signin');
      return;
    }

    // ฟังก์ชันในการดึงข้อมูลผู้ใช้
    async function getUsers() {
      try {
        const res = await fetch('https://backend-taupe-one.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 30000);
    return () => clearInterval(interval);
  }, [router]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const res = await fetch(`https://backend-taupe-one.vercel.app/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // ส่ง token ไปพร้อมกับการลบข้อมูล
        },
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <div className="card-header">Users List</div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="col-md-2 text-center">#</th>
                    <th className="col-md-4">Firstname</th>
                    <th className="col-md-4">Lastname</th>
                    <th className="col-md-1">Edit</th>
                    <th className="col-md-1">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>
                        <Link href={`/user/edit/${item.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
