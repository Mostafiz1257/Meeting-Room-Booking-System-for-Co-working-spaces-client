
import 'animate.css'; 

const ContactSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#003580] mb-6 animate__animated animate__fadeIn">Contact Information</h2>
                    <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                        For any inquiries or support, feel free to reach out to us through the following contact details. We're here to help you with any questions or issues you may have.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                    <div className="w-full max-w-xs mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        <h3 className="text-xl font-semibold text-[#003580] mb-4">Email</h3>
                        <p className="text-gray-700">support@example.com</p>
                    </div>
                    <div className="w-full max-w-xs mx-auto animate__animated animate__fadeIn animate__delay-3s">
                        <h3 className="text-xl font-semibold text-[#003580] mb-4">Phone</h3>
                        <p className="text-gray-700">(123) 456-7890</p>
                    </div>
                    <div className="w-full max-w-xs mx-auto animate__animated animate__fadeIn animate__delay-4s">
                        <h3 className="text-xl font-semibold text-[#003580] mb-4">Office Address</h3>
                        <p className="text-gray-700">123 Business St, Suite 456, City, State, ZIP</p>
                    </div>
                </div>
                
                {/* Additional Essential Information */}
                <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-[#003580] mb-6 text-center animate__animated animate__fadeIn">Additional Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-4">
                        <li>Business Hours: Monday - Friday, 9 AM - 5 PM</li>
                        <li>Emergency Contact: (123) 456-7891</li>
                        <li>Follow us on social media: <a href="https://facebook.com" className="text-[#003580] hover:underline">Facebook</a>, <a href="https://twitter.com" className="text-[#003580] hover:underline">Twitter</a>, <a href="https://linkedin.com" className="text-[#003580] hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
