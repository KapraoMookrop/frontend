'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Page() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
      return;
    }

    getUsers(); // Fetch users when the component mounts

    const interval = setInterval(getUsers, 30000); // Fetch users every 30 seconds
    return () => clearInterval(interval);
  }, [router]);

  // Define getUsers before using it in handleDelete
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
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        await getUsers();  // Fetch the updated user list after deletion

        // Show SweetAlert success notification
        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        const result = await res.json();
        // Show SweetAlert error notification
        Swal.fire({
          title: 'Error!',
          text: result.error || 'Failed to delete user.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      // Show SweetAlert error notification for network or unexpected errors
      Swal.fire({
        title: 'Error!',
        text: error.message || 'An unexpected error occurred.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
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
