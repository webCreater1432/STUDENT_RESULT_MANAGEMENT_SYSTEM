import React, { useEffect, useState } from 'react'
import axios from "axios"
const StudentDashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get('/api/student/1')
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Student Dashboard</h1>
      {student ? (
        <>
          <h3 className="text-xl font-semibold">{student.name}</h3>
          <p className="text-gray-600">Roll No: {student.rollNo}</p>
          <h4 className="mt-4 font-bold">Results</h4>
          <ul className="mt-2 space-y-2">
            {/* {student.results.map((result, idx) => (
              <li key={idx} className="border-b pb-1">
                {result.subject}: <span className="font-semibold">{result.score}</span>
              </li>
            ))} */}
          </ul>
        </>
      ) : (
        <p className="text-gray-500">Loading student data...</p>
      )}
    </div>
  )
}

export default StudentDashboard