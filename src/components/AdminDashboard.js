// src/components/AdminDashboard.js
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const mockApplications = [
  // Ini seharusnya datang dari backend Anda
  {
    id: 1,
    name: 'John Doe',
    nik: '123456789',
    vehicleBrand: 'Toyota',
    vehicleModel: 'Camry',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Jane Doe',
    nik: '987654321',
    vehicleBrand: 'Honda',
    vehicleModel: 'Civic',
    status: 'Pending',
  },
];

function AdminDashboard() {
  const [applications, setApplications] = useState(mockApplications);

  const handleApprove = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Approved' } : app));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
  };

  return (
    <div>
      <h2>Dashboard Admin</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIK</th>
            <th>Merek Kendaraan</th>
            <th>Model Kendaraan</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.nik}</td>
              <td>{app.vehicleBrand}</td>
              <td>{app.vehicleModel}</td>
              <td>{app.status}</td>
              <td>
                {app.status === 'Pending' && (
                  <>
                    <Button variant="success" onClick={() => handleApprove(app.id)}>Setujui</Button>{' '}
                    <Button variant="danger" onClick={() => handleReject(app.id)}>Tolak</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
