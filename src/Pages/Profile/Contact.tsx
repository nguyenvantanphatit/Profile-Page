import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
import TextArea from "antd/es/input/TextArea";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editorContent, setEditorContent] = useState("");

    const handleSubmit = () => {
        if (name && isValidEmail(email) && editorContent) {
            toast.success("Form submitted successfully!");
            setName("");
            setEmail("");
            setEditorContent("");
        } else {
            toast.error("Please fill in all required fields!");
        }
    };
    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <div className="contact-desc" data-aos="fade-left" id='contact'>
                <h3>Contact</h3>
                <h4>Get In Touch</h4>
            </div>
            <Row className="contact-container" data-aos="fade-left">
                <Col span={12} xl={12} lg={12} md={12} xs={24}>
                    <Form
                        onFinish={handleSubmit}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Form.Item label="Name">
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Message">
                            <TextArea
                                value={editorContent}
                                onChange={(e) => setEditorContent(e.target.value)}
                            />
                        </Form.Item>
                        <ToastContainer />
                        <Form.Item className="button-contact">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="send-contact"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Contact;
