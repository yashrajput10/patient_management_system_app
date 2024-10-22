import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { Button, Table, Input, Modal, Form } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const initialDoctors = [
  { id: 1, name: 'Dr. Marcus Philips', gender: 'Male', qualification: 'MBBS', specialty: 'Internal Medicine', workingTime: '6 Hour', checkUpTime: '4 Hour', breakTime: '1 Hour' },
  { id: 2, name: 'Dr. Haylie Schleifer', gender: 'Female', qualification: 'BDS', specialty: 'Anesthesiology', workingTime: '5 Hour', checkUpTime: '4 Hour', breakTime: '2 Hour' },
  { id: 3, name: 'Dr. Roger Carder', gender: 'Male', qualification: 'B.U.M.S.', specialty: 'Surgery', workingTime: '8 Hour', checkUpTime: '5 Hour', breakTime: '2 Hour' },
  { id: 4, name: 'Dr. Wilson Culhane', gender: 'Male', qualification: 'MBBS', specialty: 'Physical Therapy', workingTime: '2 Hour', checkUpTime: '1 Hour', breakTime: '1 Hour' },
  { id: 5, name: 'Dr. Chance Vaccaro', gender: 'Male', qualification: 'BDS', specialty: 'Pathology', workingTime: '6 Hour', checkUpTime: '3 Hour', breakTime: '2 Hour' },
];

function DoctorManagement() {

  const [doctors, setDoctors] = useState(initialDoctors);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    { title: 'Doctor Name', dataIndex: 'name', key: 'name' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Qualification', dataIndex: 'qualification', key: 'qualification' },
    { title: 'Specialty', dataIndex: 'specialty', key: 'specialty' },
    { title: 'Working Time', dataIndex: 'workingTime', key: 'workingTime' },
    { title: 'Patient Check Up Time', dataIndex: 'checkUpTime', key: 'checkUpTime' },
    { title: 'Break Time', dataIndex: 'breakTime', key: 'breakTime' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </div>
      ),
    },
  ];

  const handleEdit = (doctor) => {
    setCurrentDoctor(doctor);
    form.setFieldsValue(doctor);
    setModalVisible(true);
  };

  const handleView = (doctor) => {
    setCurrentDoctor(doctor);
    form.setFieldsValue(doctor);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  const handleAddNew = () => {
    setCurrentDoctor(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (currentDoctor) {
        setDoctors(doctors.map(doctor => doctor.id === currentDoctor.id ? { ...doctor, ...values } : doctor));
      } else {
        setDoctors([...doctors, { ...values, id: doctors.length + 1 }]);
      }
      setModalVisible(false);
    });
  };

  const handleSearch = (value) => {
    const filteredDoctors = initialDoctors.filter(doctor => 
      doctor.name.toLowerCase().includes(value.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(value.toLowerCase())
    );
    setDoctors(filteredDoctors);
  };

  return (
    <div className="flex h-screen ">
      <Sidebar /> 
      <div className="flex-grow bg-gray-100 overflow-auto"> 
        <div className="sticky top-0 z-10">
        <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Doctor Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Patient"
            className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none"
          />
          <div >    
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAddNew}
        >
          Add New Doctor
        </Button>
       
      </div>
        </div>
      </div>
      <Table columns={columns} dataSource={doctors} />
      <Modal
        title={currentDoctor ? 'Edit Doctor' : 'Add New Doctor'}
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="qualification" label="Qualification" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="specialty" label="Specialty" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="workingTime" label="Working Time" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="checkUpTime" label="Check Up Time" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="breakTime" label="Break Time" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

    </div>
        </div>
      </div>
    </div>
    
  );
}

export default DoctorManagement;
