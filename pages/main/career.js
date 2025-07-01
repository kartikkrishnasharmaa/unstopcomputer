import Image from 'next/image';
import Head from 'next/head';

const career = () => {
    return (
        <div>
            <Head>
                <title>Career Page | Unstop Computer</title>
                <meta name="description" content="We are creating a new way of learning.A new way of understanding. And we're doing it together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="Keywords" content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />
        <link rel="canonical" href="https://unstopcomputer.tech/main/career" />
                <meta property="og:image" content="https://unstopcomputer.tech/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Career Page | Unstop Computer" />
        <meta property="og:description" content="Are you looking for a way to reach thousands of coding enthusiasts who are eager to learn new skills and technologies." />
            </Head>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto px-5 py-12 flex md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700">Join Our Team</h1>
                        <p className="mb-8 leading-relaxed">We are creating a new way of learning.A new way of understanding. And we're doing it together. So if you're ready for a challenge,  we're ready for you. </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" width={ 250 } height={ 200 } src="/Images/tutorial.png" />
                    </div>
                </div>
            </section>
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">Our Five Step Recruit Process</h1>
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 h-full border" style={ { left: "50 %" } }></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold  text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Review</h3>
                            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Applicants are reviewed to ensure a good fit.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">👋 Initial Interview</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">We want to get to know you better!
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Mini Project</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">A project for the team you’re applying for is distributed.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Final Interview</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">This Final interview is conducted with team lead.</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Career Launch</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Blast off into the future of productivity and unlimited possibility !</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="antialiased text-gray-600">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Current Opportunities</h1>
                    <div className="w-full max-w-1xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-white bg-blue-700">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">S.No.</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Post</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Job Type</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Location</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Total Post</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center"></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        <tr>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-bold">1</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-grey-600">React.Js Developer</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">Internship</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">Remote</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">6</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">View Details</div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-bold">2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-grey-600">MERN Stack Developer</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">Internship</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">Remote</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">3</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">View Details</div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-bold">3</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-grey-600">Java Developer</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">Internship</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">Remote</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">2</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">View Details</div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-bold">4</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-grey-600">Python Developer</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">Internship</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">Remote</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">1</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">View Details</div>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-bold">5</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-grey-600">Social Media Manager Intern</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">Internship</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">Hybrid</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-left">1</div>
                                            </td> <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">View Details</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className='title-font sm:text-2xl text-center text-xl mt-6 mb-2 font-medium text-blue-700'>If you are interented to join us , Please send your resume at <b>UnstopComputers.in@gmail.com</b></h3>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default career;