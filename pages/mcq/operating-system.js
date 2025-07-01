import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const mb = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What is the main purpose of an operating system?',
            options: [
              { label: 'A', text: 'To provide a user interface for interacting with the computer' },
              { label: 'B', text: 'To manage hardware resources and provide services to applications', isCorrect: true },
              { label: 'C', text: 'To run software applications on the computer' },
              { label: 'D', text: 'To provide security for the computer system' },
            ],
          },
          {
            id: 2,
            question: 'What is a process in the context of operating systems?',
            options: [
              { label: 'A', text: 'A program that is currently executing' , isCorrect: true },
              { label: 'B', text: 'A file system structure used to organize data' },
              { label: 'C', text: 'A peripheral device connected to the computer' },
              { label: 'D', text: 'A data structure used for communication between processes' },
            ],
          },
          {
            id: 3,
            question: 'What is virtual memory in operating systems?',
            options: [
              { label: 'A', text: 'A memory management technique that uses physical memory only' },
              { label: 'B', text: 'A memory management technique that allows processes to use more memory than is physically available', isCorrect: true },
              { label: 'C', text: 'A type of memory used by virtual machines to store snapshots of the system state' },
              { label: 'D', text: 'A memory protection mechanism that prevents unauthorized access to memory locations' },
            ],
          },
          {
            id: 4,
            question: 'What is a thread in the context of operating systems?',
            options: [
              { label: 'A', text: 'A sequence of instructions executed by a processor' },
              { label: 'B', text: 'A data structure used for organizing files on disk' },
              { label: 'C', text: 'A lightweight process that shares the same address space with other threads within the same process', isCorrect: true },
              { label: 'D', text: 'A mechanism for synchronizing access to shared resources between processes' },
            ],
          },
          {
            id: 5,
            question: 'What is a deadlock in operating systems?',
            options: [
              { label: 'A', text: 'A situation where a process is waiting indefinitely for a resource held by another process', isCorrect: true },
              { label: 'B', text: 'A mechanism for preventing unauthorized access to memory locations' },
              { label: 'C', text: 'A type of error that occurs when a program attempts to access an invalid memory address' },
              { label: 'D', text: 'A condition where multiple processes are competing for the same CPU resource' },
            ],
          },
          {
            id: 6,
            question: 'What is the difference between multi-tasking and multi-processing?',
            options: [
              { label: 'A', text: 'Multitasking allows multiple processes to run concurrently on a single CPU, while multiprocessing involves multiple CPUs executing tasks simultaneously', isCorrect: true },
              { label: 'B', text: 'Multitasking and multiprocessing are the same concepts with different names' },
              { label: 'C', text: 'Multitasking refers to the ability to switch between different tasks quickly, while multiprocessing refers to the ability to execute multiple tasks simultaneously' },
              { label: 'D', text: 'Multitasking is used in single-user systems, while multiprocessing is used in multi-user systems' },
            ],
          },
          {
            id: 7,
            question: 'What is the role of the scheduler in an operating system?',
            options: [
              { label: 'A', text: 'To allocate memory resources to running processes' },
              { label: 'B', text: 'To manage input and output devices' },
              { label: 'C', text: 'To control access to the CPU and decide which process to execute next', isCorrect: true },
              { label: 'D', text: 'To manage the file system and organize files on disk' },
            ],
          },
          {
            id: 8,
            question: 'What is a file system in an operating system?',
            options: [
              { label: 'A', text: 'A mechanism for managing files and directories on disk', isCorrect: true },
              { label: 'B', text: 'A process that manages communication between hardware devices and software applications' },
              { label: 'C', text: 'A protocol used for transferring files over a network' },
              { label: 'D', text: 'A set of instructions that tells the computer how to boot up and load the operating system' },
            ],
          },
          {
            id: 9,
            question: 'What is the purpose of device drivers in an operating system?',
            options: [
              { label: 'A', text: 'To manage memory resources and allocate space for running processes' },
              { label: 'B', text: 'To provide a user interface for interacting with the computer' },
              { label: 'C', text: 'To facilitate communication between the operating system and hardware devices', isCorrect: true },
              { label: 'D', text: 'To control access to the CPU and decide which process to execute next' },
            ],
          },
          {
            id: 10,
            question: 'What is a shell in the context of operating systems?',
            options: [
              { label: 'A', text: 'A protective layer that prevents unauthorized access to system resources' },
              { label: 'B', text: 'A hardware component responsible for processing input and output operations' },
              { label: 'C', text: 'A command-line interface for interacting with the operating system', isCorrect: true },
              { label: 'D', text: 'A file system structure used to organize data on disk' },
            ],
          },
          {
            id: 11,
            question: 'What is the difference between kernel mode and user mode in operating systems?',
            options: [
              { label: 'A', text: 'Kernel mode allows direct access to hardware resources, while user mode restricts access to only authorized operations', isCorrect: true },
              { label: 'B', text: 'User mode provides higher privileges than kernel mode' },
              { label: 'C', text: 'Kernel mode is used for executing user applications, while user mode is used for executing system processes' },
              { label: 'D', text: 'Kernel mode is used for multitasking, while user mode is used for multiprocessing' },
            ],
          },
          {
            id: 12,
            question: 'What is the role of the interrupt handler in an operating system?',
            options: [
              { label: 'A', text: 'To manage input and output devices' },
              { label: 'B', text: 'To handle errors that occur during program execution' },
              { label: 'C', text: 'To respond to hardware interrupts and invoke the appropriate interrupt service routine', isCorrect: true },
              { label: 'D', text: 'To allocate memory resources to running processes' },
            ],
          },
          {
            id: 13,
            question: 'What is the purpose of a page table in virtual memory management?',
            options: [
              { label: 'A', text: 'To store the contents of the CPU registers during context switching' },
              { label: 'B', text: 'To manage the allocation and deallocation of memory pages' },
              { label: 'C', text: 'To translate virtual addresses to physical addresses', isCorrect: true },
              { label: 'D', text: 'To synchronize access to shared resources between processes' },
            ],
          },
          {
            id: 14,
            question: 'What is a deadlock in the context of operating systems?',
            options: [
              { label: 'A', text: 'A situation where a process is waiting indefinitely for a resource held by another process', isCorrect: true },
              { label: 'B', text: 'A mechanism for preventing unauthorized access to memory locations' },
              { label: 'C', text: 'A type of error that occurs when a program attempts to access an invalid memory address' },
              { label: 'D', text: 'A condition where multiple processes are competing for the same CPU resource' },
            ],
          },
          {
            id: 15,
            question: 'What is the role of the file allocation table (FAT) in file systems?',
            options: [
              { label: 'A', text: 'To store the contents of files in a hierarchical structure' },
              { label: 'B', text: 'To manage access permissions for files and directories' },
              { label: 'C', text: 'To map file names to file data locations on disk', isCorrect: true },
              { label: 'D', text: 'To manage the allocation and deallocation of disk blocks' },
            ],
          },
          {
            id: 16,
            question: 'What is context switching in operating systems?',
            options: [
              { label: 'A', text: 'Switching between different user interfaces' },
              { label: 'B', text: 'Changing from one type of file system to another' },
              { label: 'C', text: 'The process of saving the state of one process and loading the state of another', isCorrect: true },
              { label: 'D', text: 'Switching between different network protocols' },
            ],
          },
          {
            id: 17,
            question: 'What is the function of the memory management unit (MMU)?',
            options: [
              { label: 'A', text: 'To manage the allocation of CPU resources' },
              { label: 'B', text: 'To translate virtual addresses to physical addresses', isCorrect: true },
              { label: 'C', text: 'To manage input and output devices' },
              { label: 'D', text: 'To handle file system operations' },
            ],
          },
          {
            id: 18,
            question: 'What is the primary purpose of a bootloader?',
            options: [
              { label: 'A', text: 'To initialize hardware and load the operating system kernel into memory', isCorrect: true },
              { label: 'B', text: 'To manage system updates and patches' },
              { label: 'C', text: 'To provide a graphical user interface for the operating system' },
              { label: 'D', text: 'To handle user login and authentication' },
            ],
          },
          {
            id: 19,
            question: 'What is the difference between paging and segmentation in memory management?',
            options: [
              { label: 'A', text: 'Paging divides memory into fixed-size pages, while segmentation divides memory into variable-size segments', isCorrect: true },
              { label: 'B', text: 'Paging uses logical addresses, while segmentation uses physical addresses' },
              { label: 'C', text: 'Paging is used for managing disk storage, while segmentation is used for managing RAM' },
              { label: 'D', text: 'Paging requires hardware support, while segmentation does not' },
            ],
          },
          
          
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
            <title>Operating System Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on operating system , covering key concepts and features. Test your knowledge and deepen your understanding of operating system with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/operating-system"
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
          content=" Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on operating system , covering key concepts and features. Test your knowledge and deepen your understanding of operating system with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Operating System Multiple Choice Question</h1>
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

export default mb;