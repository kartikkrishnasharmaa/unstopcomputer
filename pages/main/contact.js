import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
const contact = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            // Simulate form submission (replace with your actual backend logic)
            console.log('Form submitted:', formData);
    
            // Display success message (you can use a modal or toast notification library here)
            alert('Form submitted successfully!');
    
            // Clear form fields
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        };
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

    return (
        <>
            <Head>
                <title>Contact Us | Unstop Computer</title>
                <meta name="description" content="Contact us today to get in touch with our team of experts. Whether you need help with a project, have a question, or want to share your feedback." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="Keywords" content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />
        <link rel="canonical" href="https://unstopcomputer.tech/main/contact" />
                <meta property="og:image" content="https://unstopcomputer.tech/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Contact us | Unstop Computer" />
        <meta property="og:description" content="Are you looking for a way to reach thousands of coding enthusiasts who are eager to learn new skills and technologies." />
                <link rel="icon" href="/Images/favicon.ico" type="image/x-icon"></link>
            </Head>
            <div className="flex w-full min-h-screen justify-center items-center">
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-700">Contact Us</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Don't be shy - contact us and let's get started."</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button
                        type="submit"
                        className="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                    >
                        SEND
                    </button>
                </div>
            </form>
        </div>

                        </div>
                        </section>
                        </div>
                        <div>
                                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a class="text-blue-700">kartik.thedeveloper@gmail.com</a>
                                    <p class="leading-normal my-5">
                                    🇮🇳 India
                                    </p>
                                    <span class="inline-flex">

                        
                                        <Link href="https://www.instagram.com/UnstopComputer" className="ml-3">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </Link>
                                

                                    </span>
                                </div>
                            </div>
        </>
    );
};

export default contact;