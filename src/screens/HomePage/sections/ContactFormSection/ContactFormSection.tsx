import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { toast } from "react-hot-toast";

// Icons
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import mail from '../../../../assets/mail.png';
import phone from '../../../../assets/phone.png';
import office from '../../../../assets/office.png';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbyGg0x3qLftAqW03Of1BOREmYkZhvKdXagSGcABM1doB9mV5EAGLOVnahrpxhePoipnlQ/exec';

interface ContactFormSectionProps {
  contactusRef?: React.RefObject<HTMLElement>;
}

export const ContactFormSection = ({contactusRef} :ContactFormSectionProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new FormData();
      formBody.append('firstname', formData.firstName);
      formBody.append('lastname', formData.lastName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);
      //formBody.append('privacy', formData.privacy ? 'Yes' : 'No');

      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formBody,
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: <img src={mail} alt="Mail" className="w-10 h-10" />,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "Info@alokasoft.com",
      type: "email"
    },

   
    {
      icon: <img src={phone} alt="Phone" className="w-10 h-10" />,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "972-302-1010",
      type: "phone"
    },
     {
      icon: <img src={office} alt="Office" className="w-10 h-10" />,
      title: "Office",
      description: "Come say hello at our office HQ.",
      contact: "AlokaSoft. \n8951 Cypress Waters Blvd suite 160,Coppell,TX 75019,U.S.A.",
      type: "address"
    },
  ];

  return (
    <section className="flex flex-col items-center w-full py-8 px-8 bg-white"  style={{
               
                  paddingTop: window.innerWidth < 640 ? "0rem" : "2rem",
                }} ref={contactusRef}>
      <div className="flex flex-col items-center gap-32 max-w-[1204px] w-full">
        {/* Header Section */}
       

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full items-start
        "
         style={{
               
                  gap: window.innerWidth < 640 ? "3rem" : "6rem",
                  fontWeight: "bold",
                }}
        >
          {/* Left Side - Contact Form */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="font-heading-desktop-h1-bold text-[#343844] text-[40px] sm:text-[24px] "
              style={{
               
                   color: "#343844",
                  fontSize: window.innerWidth < 640 ? "16px" : "40px",
                  fontWeight: "bold",
                  fontFamily: "inherit"
                }}>
                Get in Touch
              </h1>
              <h2 className="font-heading-desktop-h2-bold text-[#343844] text-[20px]  sm:text-[16px] "
              style={{
               
                  fontSize: window.innerWidth < 640 ? "14px" : "20px",
                   fontWeight: "400",
                }}
              >
            We’d love to hear from you. Please fill out this form.
              </h2>
              
              <form action={GOOGLE_FORM_URL}  method="POST"  target="hidden_iframe"  onSubmit={() => setFormSubmitted(true)}  className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-body-base-medium text-[#343844]">
                      First name
                    </label>
                    <Input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#12A16B] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body-base-medium text-[#343844]">
                      Last name
                    </label>
                    <Input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#12A16B] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#12A16B] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Phone number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#12A16B] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="p-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#12A16B] focus:ring-1 focus:ring-[#387ff5] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-1 border border-[#d0d5dd] rounded bg-white checked:bg-[#12A16B ] checked:border-[#12A16B] focus:ring-1 focus:ring-[#12A16B]"
                  />
                  <label htmlFor="privacy" className="font-body-base-regular text-[#667085]">
                    You agree to our friendly{" "}
                    <a href="#" className="underline text-[#12A16B]">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#12A16B] text-white rounded-lg font-button-base-bold hover:bg-[#12A16B ]/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
              <iframe
  name="hidden_iframe"
  id="hidden_iframe"
  style={{ display: 'none' }}
  onLoad={() => {
    if (formSubmitted) {
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacy: false,
      });
      setFormSubmitted(false);
    }
  }}
></iframe>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col gap-8">
             <div className="flex flex-col gap-6">
              <h1
                style={{
                  color: "#343844",
                  fontSize: window.innerWidth < 640 ? "16px" : "40px",
                  fontWeight: "bold",
                  fontFamily: "inherit"
                }}
              >
                We’d love to hear from you
              </h1>
             
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 flex-col">
                  <div className="w-10 h-10 mt-1 flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f9fafb] rounded-lg flex items-center justify-center border border-[#eaecf0]">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h4 className="font-body-base-semibold text-[#101828]">
                      {info.title}
                    </h4>
                    <p className="font-body-base-regular text-[#667085]">
                      {info.description}
                    </p>
                    {info.type === 'email' && (
                      <a href={`mailto:${info.contact}`} className="font-body-base-semibold text-[#12A16B]">
                        {info.contact}
                      </a>
                    )}
                    {info.type === 'phone' && (
                      <a  className="font-body-base-semibold text-[#12A16B]">
                        {info.contact}
                      </a>
                    )}
                    {info.type === 'address' && (
                      <address className="font-body-base-semibold text-[#12A16B] not-italic whitespace-pre-line text-[12px]">
                        {info.contact}
                      </address>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};