import React, { useEffect, useState } from 'react'
import axios from "axios"
const AdminPanel = () => {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Admin Panel</h1>
      <h2 className="font-semibold text-gray-700">All Students</h2>
      <ul className="mt-3 divide-y divide-gray-300">
        {/* {Students.map((student) => (
          <li key={student._id} className="py-2">
            <span className="font-medium">{student.name}</span> — Roll No: {student.rollNo}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default AdminPanel