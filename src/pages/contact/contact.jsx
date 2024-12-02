import React, { useState } from 'react';
import { Button, Input, message } from "antd";
import { MdPhone } from "react-icons/md";
import Footer from "../home/footer";

const { TextArea } = Input;

function Contact(props) {
    const data = [
        {
            title: "PRODUCT INQUIRIES",
            description: "Have questions about our products or need help choosing the right one? Get in touch for assistance or more information."
        },
        {
            title: "ORDER SUPPORT",
            description: "Need help with your online order or shipment? Let us know, and we'll assist you with tracking, returns, or any issues you encounter.",
            phone: "512-588-5720",
            icon: <MdPhone />
        },
        {
            title: "GENERAL FEEDBACK",
            description: "We value your opinion! Share your thoughts about our services or products, and help us improve your experience."
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.subject) formErrors.subject = "Subject is required";
        if (!formData.message) formErrors.message = "Message is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const token = '7059302754:AAGChb5bbs0nbJSlON7Wus1VADd9YOGZ418'; // replace with your bot token
            const chat_id = '1736820935'; // replace with your chat ID

            const text = `
                From Coffee Online Shop\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}
            `;

            try {
                const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chat_id,
                        text: text,
                    }),
                });

                if (response.ok) {
                    message.success("Message sent successfully!");
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    message.error("Failed to send the message.");
                }
            } catch (error) {
                message.error("An error occurred while sending the message.");
            }
        } else {
            message.error("Please fill in all required fields.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div className="forNavbar w-full h-[18vh] fixed z-40"></div>
            <div className="w-full h-[18vh]"></div>
            <div className="contactPage p-[10%] font-poppins flex flex-wrap">
                <div className="w-full text-[#AF6343] text-center">
                    <h1 className="font-[700] text-[40px] mb-10">Contact Us</h1>
                </div>
                <div className="sm:w-full lg:w-[30%] text-[#AF6343]">
                    {data.map((item, index) => (
                        <div className="my-5 font-[500]" key={index}>
                            <h3 className="text-[21px]">{item.title}</h3>
                            <p className="text-[12px] my-5">{item.description}</p>
                            <span className="flex items-center gap-3 text-[12px]">
                                <span className="text-[15px]">{item.icon}</span>
                                {item.phone}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="sm:w-full lg:w-[70%] sm:pl-0 lg:pl-[10%]">
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name *"
                        className={`border-[#BA6E4E87] bg-[#FFFEFE94] p-5 my-3 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className={`border-[#BA6E4E87] bg-[#FFFEFE94] p-5 my-3 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                    <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is the subject of your message?"
                        className={`border-[#BA6E4E87] bg-[#FFFEFE94] p-5 my-3 ${errors.subject ? 'border-red-500' : ''}`}
                    />
                    {errors.subject && <p className="text-red-500">{errors.subject}</p>}

                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className={`border-[#BA6E4E87] bg-[#FFFEFE94] pt-5 pl-5 pb-[20%] my-3 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}

                    <Button onClick={handleSubmit} className="bg-[#BA6E4ED1] text-white font-[500] p-5 my-3" type="dark">
                        Send Us An Email
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Contact;
