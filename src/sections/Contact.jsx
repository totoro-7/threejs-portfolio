import { useState } from "react";
import { useRef } from "react";
import ContactExperience from "../components/Models/ContactExperience";
import TitleHeader from "../components/TitleHeader"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here

        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )

            // Reset form after submission
            setFormData({ name:'', email: '', message: ''});
        } catch(error) {
            console.log('EMAILJS ERROR,', error)
        } finally {
            setLoading(false)
            console.log('Form submitted:', formData);
        }
    }

    return(
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get In Touch - Let's Connect"
                    sub="Contact Information"
                />

                <div className="mt-16 grid-12-cols">
                    {/* Contact Form for Left Side */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref={formRef}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name">Message</label>
                                    <textarea
                                        type="message"
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button min-w-fit px-6 py-3 md:w-80 md:h-16 type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                    <div className="bg-circle" />
                                        <p className="text">{loading ? 'Sending...' : 'Send'}</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 3js Design for Right Side */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#8475a1] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

    )
}

export default Contact;
