import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const multimedia = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What does the acronym "RGB" stand for in the context of multimedia?',
            options: [
                { label: 'A', text: 'Red, Green, Blue', isCorrect: true },
                { label: 'B', text: 'Read, Green, Black' },
                { label: 'C', text: 'Radio, Gaming, Browsing' },
                { label: 'D', text: 'Raster, Gradient, Binary' },
            ],
        },
        {
            id: 2,
            question: 'Which of the following image file formats supports transparency?',
            options: [
                { label: 'A', text: 'JPEG' },
                { label: 'B', text: 'GIF', isCorrect: true },
                { label: 'C', text: 'PNG' },
                { label: 'D', text: 'BMP' },
            ],
        },
        {
            id: 3,
            question: 'What is the purpose of compression in multimedia?',
            options: [
                { label: 'A', text: 'To increase file size' },
                { label: 'B', text: 'To decrease file size', isCorrect: true },
                { label: 'C', text: 'To improve image resolution' },
                { label: 'D', text: 'To reduce image quality' },
            ],
        },
        {
            id: 4,
            question: 'Which of the following is a lossless compression algorithm used in multimedia?',
            options: [
                { label: 'A', text: 'JPEG' },
                { label: 'B', text: 'MP3' },
                { label: 'C', text: 'FLAC', isCorrect: true },
                { label: 'D', text: 'MPEG' },
            ],
        },
        {
            id: 5,
            question: 'What does the acronym "MP4" stand for in the context of multimedia?',
            options: [
                { label: 'A', text: 'Multimedia Picture 4' },
                { label: 'B', text: 'MPEG-4 Part 4', isCorrect: true },
                { label: 'C', text: 'Multipurpose Portable 4' },
                { label: 'D', text: 'Media Player 4' },
            ],
        },
        {
            id: 6,
            question: 'Which of the following is a container format used for multimedia files?',
            options: [
                { label: 'A', text: 'MP3' },
                { label: 'B', text: 'MPEG', isCorrect: true },
                { label: 'C', text: 'FLV' },
                { label: 'D', text: 'WAV' },
            ],
        },
        {
            id: 7,
            question: 'Which multimedia format is commonly used for streaming videos over the internet?',
            options: [
                { label: 'A', text: 'AVI' },
                { label: 'B', text: 'FLV' },
                { label: 'C', text: 'MP4', isCorrect: true },
                { label: 'D', text: 'WMV' },
            ],
        },
        {
            id: 8,
            question: 'What does the acronym "JPEG" stand for in the context of multimedia?',
            options: [
                { label: 'A', text: 'Joint Photographic Experts Group', isCorrect: true },
                { label: 'B', text: 'Java Picture Encoding Group' },
                { label: 'C', text: 'Just Print Every Graph' },
                { label: 'D', text: 'JavaScript Programming Encapsulation' },
            ],
        },
        {
            id: 9,
            question: 'Which of the following audio formats is commonly used for high-quality music?',
            options: [
                { label: 'A', text: 'MP3' },
                { label: 'B', text: 'WAV' },
                { label: 'C', text: 'FLAC', isCorrect: true },
                { label: 'D', text: 'AAC' },
            ],
        },
        {
            id: 10,
            question: 'What is the purpose of a codec in multimedia?',
            options: [
                { label: 'A', text: 'To convert analog signals to digital signals' },
                { label: 'B', text: 'To compress and decompress multimedia data', isCorrect: true },
                { label: 'C', text: 'To play multimedia files' },
                { label: 'D', text: 'To store multimedia files' },
            ],
        },
        {
            id: 11,
            question: 'Which multimedia format is commonly used for vector graphics?',
            options: [
                { label: 'A', text: 'JPEG' },
                { label: 'B', text: 'SVG', isCorrect: true },
                { label: 'C', text: 'PNG' },
                { label: 'D', text: 'GIF' },
            ],
        },
        {
            id: 12,
            question: 'Which of the following is NOT a video codec?',
            options: [
                { label: 'A', text: 'H.264' },
                { label: 'B', text: 'MPEG-4' },
                { label: 'C', text: 'FLAC', isCorrect: true },
                { label: 'D', text: 'VP9' },
            ],
        },
        {
            id: 13,
            question: 'What is the purpose of a keyframe in video compression?',
            options: [
                { label: 'A', text: 'To define the beginning of a video clip' },
                { label: 'B', text: 'To mark important frames for efficient compression and decompression', isCorrect: true },
                { label: 'C', text: 'To add special effects to the video' },
                { label: 'D', text: 'To adjust the brightness and contrast of the video' },
            ],
        },
        {
            id: 14,
            question: 'Which multimedia format is commonly used for storing animations?',
            options: [
                { label: 'A', text: 'JPEG' },
                { label: 'B', text: 'GIF', isCorrect: true },
                { label: 'C', text: 'PNG' },
                { label: 'D', text: 'TIFF' },
            ],
        },
        {
            id: 15,
            question: 'What is the purpose of metadata in multimedia files?',
            options: [
                { label: 'A', text: 'To store multimedia data' },
                { label: 'B', text: 'To describe and provide information about the multimedia content', isCorrect: true },
                { label: 'C', text: 'To compress multimedia files' },
                { label: 'D', text: 'To play multimedia files' },
            ],
        }
        
        // Add more questions here...
    ] );

    const [ selectedAnswers, setSelectedAnswers ] = useState( {} );
    const [ showAnswer, setShowAnswer ] = useState( {} );

    const handleOptionSelect = ( questionId, selectedOptionLabel ) => {
        setSelectedAnswers( {
            ...selectedAnswers,
            [ questionId ]: selectedOptionLabel,
        } );
    };
    return (
        <McqLayout>
            <Head>
            <title>Multimedia Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on multimedia , covering key concepts and features. Test your knowledge and deepen your understanding of multimedia  with our curated list." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/mcq/multimedia-mca"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Multimedia Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on multimedia, covering key concepts and features. Test your knowledge and deepen your understanding of multimedia with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Multimedia Multiple Choice Question</h1>
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                            { questions.map( ( question ) => (
                                <div key={ question.id }>
                                    <p className="font-bold"> Question : { question.id }  { question.question }</p>
                                    <ul className="space-y-4">
                                        { question.options.map( ( option ) => (
                                            <li key={ option.label } className="flex items-center">
                                                <div className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2">
                                                    <h1 className="mx-auto font-semibold bg-blue-700 rounded-full text-lg text-white text-center">
                                                        { option.label }
                                                    </h1>
                                                </div>
                                                <p className="ml-4">{ option.text }</p>
                                                {/* Remove the select button for each option */ }
                                            </li>
                                        ) ) }
                                    </ul>
                                    { selectedAnswers[ question.id ] && (
                                        <div className="px-5 py-3 border border-blue-700 text-sm mt-3">
                                            Your answer: { selectedAnswers[ question.id ] }
                                        </div>
                                    ) }
                                    <details className="open:duration-300">
                                        <summary
                                            className="bg-gray-200 mt-4 px-5 py-3 text-lg cursor-pointer"
                                            onClick={ () => setShowAnswer( { ...showAnswer, [ question.id ]: true } ) }
                                        >
                                            Answer:
                                        </summary>
                                        { showAnswer[ question.id ] && (
                                            <div className="px-5 py-3 border border-blue-700 text-sm">
                                                { question.options.find( ( opt ) => opt.isCorrect )?.text }
                                            </div>
                                        ) }
                                    </details>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </div>
            </section>
        </McqLayout>
    );
};

export default multimedia;