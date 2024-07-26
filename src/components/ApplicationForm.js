// src/components/ApplicationForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplicationForm.css'; // Import file CSS yang baru

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    birthDate: '',
    maritalStatus: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleType: '',
    vehicleColor: '',
    vehiclePrice: '',
    downPayment: '',
    loanDuration: '',
    monthlyInstallment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Aplikasi Diajukan!');
  };

  return (
    <div className="form-container">
      <h2>Formulir Pengajuan Kredit Kendaraan</h2>
      <Form onSubmit={handleSubmit} className="form-grid">
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formNik">
          <Form.Label>NIK</Form.Label>
          <Form.Control type="text" name="nik" value={formData.nik} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formBirthDate">
          <Form.Label>Tanggal Lahir</Form.Label>
          <Form.Control type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formMaritalStatus">
          <Form.Label>Status Perkawinan</Form.Label>
          <Form.Control type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formVehicleBrand">
          <Form.Label>Merek Kendaraan</Form.Label>
          <Form.Control type="text" name="vehicleBrand" value={formData.vehicleBrand} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formVehicleModel">
          <Form.Label>Model Kendaraan</Form.Label>
          <Form.Control type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formVehicleType">
          <Form.Label>Tipe Kendaraan</Form.Label>
          <Form.Control type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formVehicleColor">
          <Form.Label>Warna Kendaraan</Form.Label>
          <Form.Control type="text" name="vehicleColor" value={formData.vehicleColor} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formVehiclePrice">
          <Form.Label>Harga Kendaraan</Form.Label>
          <Form.Control type="number" name="vehiclePrice" value={formData.vehiclePrice} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formDownPayment">
          <Form.Label>Uang Muka</Form.Label>
          <Form.Control type="number" name="downPayment" value={formData.downPayment} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formLoanDuration">
          <Form.Label>Lama Kredit (bulan)</Form.Label>
          <Form.Control type="number" name="loanDuration" value={formData.loanDuration} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formMonthlyInstallment">
          <Form.Label>Angsuran Bulanan</Form.Label>
          <Form.Control type="number" name="monthlyInstallment" value={formData.monthlyInstallment} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajukan Kredit
        </Button>
      </Form>
    </div>
  );
}

export default ApplicationForm;
