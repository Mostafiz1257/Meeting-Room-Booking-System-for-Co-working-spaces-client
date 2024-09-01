import { useState } from "react";
import { toast } from "sonner";
import ContactSection from "./ContactSection";

const ContractUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      toast.success("Message sent");
      // You can also clear the form after submitting
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <>
      <ContactSection />
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#003580] mb-6 text-center animate__animated animate__fadeIn">
              Get in Touch
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate__animated animate__fadeIn animate__delay-1s">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
                  />
                </div>
                <div className="animate__animated animate__fadeIn animate__delay-2s">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
                  />
                </div>
              </div>
              <div className="animate__animated animate__fadeIn animate__delay-3s">
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
                />
              </div>
              <div className="animate__animated animate__fadeIn animate__delay-4s">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`px-8 py-3 font-semibold rounded-lg shadow-md transition-colors ${
                    isFormValid
                      ? "bg-[#003580] text-white hover:bg-[#00245d]"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractUs;
