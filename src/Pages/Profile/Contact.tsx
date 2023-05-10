import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './Contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editorContent, setEditorContent] = useState('');

    const handleSubmit = () => {
        if (name && isValidEmail(email) && editorContent) {
            toast.success('Form submitted successfully!');
            setName('');
            setEmail('');
            setEditorContent('');
        } else {
            toast.error('Please fill in all required fields!');
        }
    };

    const isValidEmail = (email: string): boolean => {
        // Check for valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const contactInfo = [
        {
            label: 'Email',
            value: 'nguyenvantanphat.it@gmail.com'
        },
        {
            label: 'Github',
            value: 'nguyenvantanphatit'
        },
        {
            label: 'Phone',
            value: '(+84) 374 225 294'
        },
        {
            label: 'Address',
            value: '35/5 Street No. 4 Truong Tho Ward, Thu Duc'
        }

    ];
    return (
        <div className="contact-container">
            <h1><PhoneOutlined />  Contact Me</h1>
            <Row gutter={16}>
                <Col span={12}>
                    <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                        <Form.Item label="Name">
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Message">
                            <Editor
                                apiKey="2iva6gh26oyhux1m2qrw0kyfhqj6ef2ier123op3gxqpskfn"
                                value={editorContent}
                                onEditorChange={setEditorContent}
                                init={{
                                    height: 300,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount',
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                }}
                            />
                        </Form.Item>
                        <ToastContainer />
                        <Form.Item wrapperCol={{ span: 24, offset: 8 }}>
                            <Button type="primary" htmlType="submit" style={{ width: 200, background: 'red' }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <div className="contact-info">
                        {contactInfo.map((info, index) => (
                            <div className="contact-item" key={index}>
                                <span>{info.label}:</span>
                                <p>{info.value}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact
