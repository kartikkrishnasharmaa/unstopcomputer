import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Link from "next/link";

const GlossaryTable = () => {
  const termsData = [
    {
      que: "What is Android?",
      ans: "Android is an open-source operating system developed by Google primarily for touchscreen mobile devices such as smartphones and tablets. It is based on the Linux kernel and is designed for user-friendly interaction and customization.",
    },
    {
      que: "Explain the Android application architecture.",
      ans: "The Android application architecture consists of four main components: Activities, Services, Broadcast Receivers, and Content Providers. These components are bound together by the Android Manifest file and interact with each other to create a cohesive user experience.",
    },
    {
      que: "What is an Activity in Android?",
      ans: "An Activity in Android represents a single screen with a user interface. It serves as the entry point for interacting with the user and typically corresponds to a single window or layout.",
    },
    {
      que: "What is a Service in Android?",
      ans: "A Service in Android is a component that performs long-running operations in the background without a user interface. It is used for tasks such as playing music, handling network requests, or performing data processing.",
    },
    {
      que: "Explain the concept of Intents in Android.",
      ans: "Intents in Android are messaging objects used to request an action from another app component, such as starting an Activity, broadcasting a message, or delivering a command to a Service. They facilitate communication between different components of an Android application and between different applications.",
    },
    {
      que: "What is a Broadcast Receiver in Android?",
      ans: "A Broadcast Receiver in Android is a component that responds to system-wide broadcast messages, such as the device booting up, network connectivity changes, or the battery level becoming low. It allows applications to receive and react to events even when they are not currently running.",
    },
    {
      que: "Explain the role of Content Providers in Android.",
      ans: "Content Providers in Android manage access to a structured set of data. They are used to share data between different applications or to allow applications to securely access and manipulate data stored by other applications.",
    },
    {
      que: "What is the Android Manifest file?",
      ans: "The Android Manifest file (AndroidManifest.xml) is an XML file that provides essential information about an Android application to the Android system, such as the app's package name, permissions it requires, components it contains, and hardware and software features it supports.",
    },
    {
      que: "Explain the concept of Fragments in Android.",
      ans: "Fragments in Android represent reusable portions of user interface or behavior that can be combined within an Activity to create a multi-pane UI or support different screen sizes and orientations. They are often used to build flexible and modular UIs.",
    },
    {
      que: "What are the different types of layouts available in Android?",
      ans: "Android provides several types of layouts, including LinearLayout, RelativeLayout, FrameLayout, ConstraintLayout, and GridLayout, each with its own way of arranging UI elements on the screen.",
    },
    {
      que: "Explain the purpose of RecyclerView in Android.",
      ans: "RecyclerView in Android is a more flexible and efficient version of ListView for displaying large datasets in a scrollable list or grid format. It improves performance by recycling views that are no longer visible instead of creating new views for each item.",
    },
    {
      que: "What is the purpose of the AsyncTask class in Android?",
      ans: "The AsyncTask class in Android is used for performing background operations and updating the UI on the main thread. It provides methods for executing code asynchronously and reporting progress and results back to the UI thread.",
    },
    {
      que: "Explain the concept of Services in Android and their lifecycle.",
      ans: "Services in Android are background components that perform long-running operations without a user interface. They have a lifecycle similar to Activities but can continue running even when the user switches to another app. The lifecycle methods include onCreate(), onStartCommand(), and onDestroy().",
    },
    {
      que: "What is the purpose of the SQLite database in Android?",
      ans: "The SQLite database in Android is a lightweight, embedded relational database engine that provides a way to store and retrieve structured data. It is commonly used for storing application data locally on the device.",
    },
    {
      que: "Explain the concept of SharedPreferences in Android.",
      ans: "SharedPreferences in Android provide a way to store and retrieve simple data as key-value pairs. They are commonly used for storing user preferences, settings, or other small amounts of data that need to persist across application restarts.",
    },
    {
      que: "What is the purpose of the ActionBar in Android?",
      ans: "The ActionBar in Android is a UI component typically located at the top of an Activity's layout. It provides navigation options, action buttons, and branding/logo for the app. It can be customized to suit the app's design and functionality.",
    },
    {
      que: "Explain the concept of Intent Filters in Android.",
      ans: "Intent Filters in Android are declarations in the AndroidManifest.xml file that specify the types of intents a component can respond to and the types of data it can handle. They allow components to advertise their capabilities to the Android system and other applications.",
    },
    {
      que: "What is the purpose of the Gradle build system in Android?",
      ans: "The Gradle build system in Android is used to automate the process of building, testing, and packaging Android applications. It allows developers to define dependencies, customize build configurations, and manage project dependencies efficiently.",
    },
    {
      que: "Explain the concept of ProGuard in Android development.",
      ans: "ProGuard is a tool used in Android development to shrink, optimize, and obfuscate Java bytecode. It helps reduce the size of the APK file, optimize performance, and make it more difficult for attackers to reverse-engineer the code.",
    },
    {
      que: "What is the purpose of the Support Library in Android development?",
      ans: "The Support Library in Android development provides backward compatibility for newer features introduced in the Android framework. It allows developers to use the latest APIs on older versions of Android devices and ensures a consistent experience across different devices.",
    },
    {
      que: "Explain the concept of Activities and their lifecycle in Android.",
      ans: "Activities in Android represent individual screens with a user interface. They have a lifecycle that includes methods like onCreate(), onStart(), onResume(), onPause(), onStop(), and onDestroy(). These methods are called at different stages of the Activity's lifecycle, allowing developers to manage resources and state.",
    },
    {
      que: "What is the purpose of the ViewHolder pattern in Android development?",
      ans: "The ViewHolder pattern in Android development is used to improve the performance of RecyclerView by caching references to views within each item layout. It reduces the number of calls to findViewById() and improves scrolling performance.",
    },
    {
      que: "Explain the concept of Dependency Injection in Android development.",
      ans: "Dependency Injection in Android development is a design pattern used to improve code maintainability and testability by decoupling classes and providing dependencies externally rather than creating them internally. Popular DI frameworks in Android include Dagger and Koin.",
    },
    {
      que: "What is the purpose of the AsyncTaskLoader class in Android?",
      ans: "The AsyncTaskLoader class in Android is used to load data asynchronously and manage the lifecycle of background tasks. It provides a way to perform long-running operations without blocking the UI thread and handles configuration changes gracefully.",
    },
    {
      que: "Explain the concept of Fragments and their lifecycle in Android.",
      ans: "Fragments in Android represent reusable portions of user interface or behavior. They have a lifecycle similar to Activities, including methods like onCreate(), onCreateView(), onStart(), onResume(), onPause(), onStop(), and onDestroy(). They are often used to create flexible and modular UIs.",
    },
    {
      que: "What is the purpose of the RecyclerView.Adapter class in Android?",
      ans: "The RecyclerView.Adapter class in Android is used to bind data to the views displayed in a RecyclerView. It provides methods for creating view holders, binding data to views, and handling view recycling, thereby improving performance when displaying large datasets.",
    },
    {
      que: "Explain the purpose of the SharedPreferences.Editor interface in Android.",
      ans: "The SharedPreferences.Editor interface in Android is used to modify the contents of a SharedPreferences object. It provides methods for adding, removing, and updating key-value pairs stored in SharedPreferences.",
    },
    {
      que: "What is the purpose of the Intent.ACTION_SEND action in Android?",
      ans: "The Intent.ACTION_SEND action in Android is used to send data to another application, typically for sharing content such as text, images, or files. It allows users to choose from a list of available apps capable of handling the shared content.",
    },
    {
      que: "Explain the concept of Broadcast Receivers in Android and their lifecycle.",
      ans: "Broadcast Receivers in Android are components used to respond to system-wide broadcast messages or messages sent by other applications. They have a lifecycle that includes methods like onReceive(), which is called when a broadcast message is received. They can be registered dynamically or in the manifest file.",
    },
    {
      que: "What is the purpose of the ContentProvider class in Android?",
      ans: "The ContentProvider class in Android is used to manage access to a structured set of data, typically stored in a SQLite database. It provides methods for querying, inserting, updating, and deleting data, as well as controlling access permissions.",
    },
    {
      que: "Explain the purpose of the Android Support Library and its relationship with AndroidX.",
      ans: "The Android Support Library provides backward compatibility for newer Android features. AndroidX is the next evolution of the support library and includes packages with new libraries, packages, and APIs. AndroidX is a part of Jetpack, a suite of libraries, tools, and guidance to help developers write high-quality apps more easily.",
    },
    {
      que: "What are the different types of permissions in Android?",
      ans: "Android permissions are categorized into normal, dangerous, and special permissions. Normal permissions are granted automatically, dangerous permissions require user approval at runtime, and special permissions are system-level permissions granted only to privileged apps.",
    },
    {
      que: "Explain the purpose of the Android Application Package (APK) file.",
      ans: "The Android Application Package (APK) file is the package file format used to distribute and install applications on the Android operating system. It contains all the necessary components and resources required for the application to run on an Android device.",
    },
    {
      que: "What is the purpose of the Android Debug Bridge (ADB) tool?",
      ans: "The Android Debug Bridge (ADB) is a command-line tool used to communicate with an Android device or emulator. It provides various commands for installing apps, debugging, accessing the device shell, transferring files, and more.",
    },
    {
      que: "Explain the concept of Activities and Tasks in Android.",
      ans: "Activities in Android represent individual screens with a user interface, while Tasks represent a collection of Activities arranged in a stack. Tasks are used to manage the navigation history and the back stack of the application.",
    },
    {
      que: "What is the purpose of the Android Resource XML files?",
      ans: "Android Resource XML files are used to define resources such as layouts, strings, colors, dimensions, and styles used in Android applications. They provide a way to separate content from presentation and support localization, theming, and maintainability.",
    },
    {
      que: "Explain the concept of AsyncTask in Android and its limitations.",
      ans: "AsyncTask in Android is used to perform background operations and update the UI on the main thread. However, it has limitations such as poor error handling, lack of support for cancellation, and potential memory leaks, making it less suitable for complex or long-running tasks.",
    },
    {
      que: "What are some common techniques for optimizing performance in Android applications?",
      ans: "Common techniques for optimizing performance in Android applications include using efficient data structures, minimizing network and database operations, caching data, using background threads for CPU-intensive tasks, optimizing layout hierarchies, and using profiling tools to identify performance bottlenecks.",
    },
    {
      que: "Explain the purpose of the Android Asset Packaging Tool (AAPT).",
      ans: "The Android Asset Packaging Tool (AAPT) is a command-line tool used to compile resources, such as XML files, images, and fonts, into the binary format required by Android applications. It also generates the R.java file, which provides references to the compiled resources in the Java code.",
    },
    {
      que: "What is the purpose of the Android Notification Manager?",
      ans: "The Android Notification Manager is responsible for managing notifications displayed to the user. It allows applications to create, update, and cancel notifications, as well as set their priority, importance, and visibility.",
    },
    {
      que: "Explain the purpose of the Android Support Design Library.",
      ans: "The Android Support Design Library provides support for material design components and patterns introduced in Android 5.0 (API level 21) and above on devices running earlier versions of Android. It includes components such as floating action buttons, snackbar, navigation drawer, and material design themes and styles.",
    },
    {
      que: "What is the purpose of the Android ContentResolver class?",
      ans: "The Android ContentResolver class provides methods for accessing and manipulating content stored on the device or provided by other applications. It allows applications to perform operations such as querying, inserting, updating, and deleting data stored in content providers.",
    },
    {
      que: "Explain the concept of the Android Application Context.",
      ans: "The Android Application Context represents the global information about an application environment. It provides access to application-level resources, such as assets, preferences, databases, and system services, and is available throughout the entire application lifecycle.",
    },
    {
      que: "What is the purpose of the Android FragmentManager?",
      ans: "The Android FragmentManager is responsible for managing Fragments in an Activity, such as adding, removing, replacing, or showing Fragments. It allows developers to create flexible and modular UIs by combining multiple Fragments within a single Activity.",
    },
    {
      que: "Explain the concept of the Android View Binding feature.",
      ans: "Android View Binding is a feature that allows developers to interact with views in XML layouts as if they were properties of Activity or Fragment classes. It generates a binding class for each XML layout file, providing type-safe access to views and reducing the need for findViewById() calls.",
    },
    {
      que: "What is the purpose of the Android JobScheduler?",
      ans: "The Android JobScheduler is a system service introduced in Android 5.0 (API level 21) for scheduling background tasks or jobs. It allows developers to specify conditions for executing jobs, such as network connectivity, device charging status, or device idle state, to optimize battery life and improve system performance.",
    },
    {
      que: "Explain the purpose of the Android ViewModel class.",
      ans: "The Android ViewModel class is a part of the Android Architecture Components library and is used to store and manage UI-related data in a lifecycle-aware manner. It survives configuration changes such as screen rotations and provides data to the UI components, such as Activities and Fragments, even across configuration changes.",
    },
    {
      que: "What is the purpose of the Android Room Persistence Library?",
      ans: "The Android Room Persistence Library is a part of the Android Architecture Components library and is used for abstracting away the underlying SQLite database and providing an easier-to-use, object-oriented interface for performing database operations. It simplifies the process of working with SQLite databases in Android applications and supports compile-time SQL validation.",
    },
    {
      que: "Explain the purpose of the Android Data Binding Library.",
      ans: "The Android Data Binding Library is a part of the Android Jetpack library and is used to bind UI components in XML layouts directly to data sources in the app's data model. It allows developers to eliminate boilerplate code for accessing UI components and updating them with data, making data binding more efficient and reducing the chance of errors.",
    },
    {
      que: "What is the purpose of the Android ConstraintLayout?",
      ans: "The Android ConstraintLayout is a layout manager introduced in Android Studio 2.2 that allows developers to create complex user interfaces with a flat view hierarchy. It allows for flexible positioning and sizing of UI components by defining constraints between them, making it easier to create responsive and efficient layouts for different screen sizes and orientations.",
    },
    {
      que: "Explain the purpose of the Android Data Persistence options such as SharedPreferences, SQLite, and Room.",
      ans: "Android provides several options for data persistence, including SharedPreferences for storing simple key-value pairs, SQLite for relational database storage, and Room Persistence Library for a higher-level abstraction over SQLite with compile-time SQL validation and LiveData support. These options cater to different use cases and provide varying levels of complexity and performance.",
    },
    {
      que: "What is the purpose of the Android WorkManager?",
      ans: "The Android WorkManager is a part of the Android Jetpack library and is used for managing background tasks that need to run asynchronously and reliably, even if the app is killed or the device is rebooted. It provides a simplified API for deferrable and periodic tasks, handles task scheduling and execution, and ensures compatibility with different versions of Android.",
    },
    {
      que: "Explain the purpose of the Android Navigation Architecture Component.",
      ans: "The Android Navigation Architecture Component is a part of the Android Jetpack library and is used for implementing navigation between different screens or destinations in an Android app. It provides a consistent and predictable way to navigate through an app's UI, handles fragment transactions and back stack management, and simplifies the implementation of navigation patterns such as drawers, bottom navigation, and deep linking.",
    },
    {
      que: "What is the purpose of the Android LiveData class?",
      ans: "The Android LiveData class is a part of the Android Architecture Components library and is used to hold and observe data changes in a lifecycle-aware manner. It ensures that UI components, such as Activities and Fragments, only receive updates when they are in the active state, preventing memory leaks and other lifecycle-related issues.",
    },
    {
      que: "Explain the purpose of the Android ViewModelProvider class.",
      ans: "The Android ViewModelProvider class is used to create and retrieve ViewModel instances associated with Activities and Fragments. It ensures that ViewModel instances survive configuration changes such as screen rotations and allows for the separation of concerns between UI-related data and UI components, improving code maintainability and testability.",
    },
    // Add more terms as needed
  ];
  const pageTitle =
    "Top 50 Android Developer Interview Questions & Answers (2024) | Unstop Computer";
  const pageDescription =
    "Comprehensive collection of Android interview questions with detailed answers. Prepare for your Android developer job interview with these essential questions on Activities, Fragments, Services, and more.";
  const canonicalUrl =
    "https://unstopcomputer.tech/interview-question/android-developer";
  const pageImage = "https://unstopcomputer.tech/Images/logo.png";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Keywords - Improved and more focused */}
        <meta
          name="keywords"
          content="Android interview questions, Android developer interview, Android programming questions, Android job interview, Android technical interview, Android coding interview, Android developer FAQ, Android interview preparation, Android development questions, Mobile development interview"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content="Unstop Computer Logo" />
        <meta property="og:site_name" content="Unstop Computer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content="Unstop Computer Logo" />

        {/* Favicons */}
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Images/apple-touch-icon.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: termsData.map((term, index) => ({
              "@type": "Question",
              name: term.que,
              acceptedAnswer: {
                "@type": "Answer",
                text: term.ans,
              },
            })),
          })}
        </script>
      </Head>

      <QueLayout>
        <section id="content-wrapper" className="">
          <div className="container py-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <div className="inline-flex items-center space-x-1 md:space-x-3">
                <div className="inline-flex items-center">
                  <Link href="/" className="text-blue-900 hover:text-blue-800">
                    Home
                  </Link>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      href="/interview-question"
                      className="text-blue-900 hover:text-blue-800"
                    >
                      Interview Questions
                    </Link>
                  </div>
                </div>
                <div aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-blue-900">Android Developer</span>
                  </div>
                </div>
              </div>
            </nav>

            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                Android Developer Interview Questions and Answers
              </h1>
              <p className="text-lg text-blue-700">
                Comprehensive collection of frequently asked Android interview
                questions with detailed answers. Prepare for your technical
                interview with these essential questions on Activities,
                Fragments, Services, and more.
              </p>
            </div>

            {/* Content Stats */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-2 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {termsData.length}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Questions
                  </div>
                </div>
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    2025
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Updated
                  </div>
                </div>
                <div className="p-2 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Beginner to Advanced
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Levels</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Practical Answers
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-2 mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {termsData.map((term, index) => (
                  <a
                    key={index}
                    href={`#q${index + 1}`}
                    className="text-blue-600 hover:text-white dark:text-blue-400 hover:underline"
                  >
                    {index + 1}. {term.que}
                  </a>
                ))}
              </div>
            </div>

            {/* Questions Section */}
            <div className="space-y-6">
              {termsData.map((term, index) => (
                <div
                  key={index}
                  id={`q${index + 1}`}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                          {term.que}
                        </h3>
                        <div className="prose dark:prose-dark max-w-none">
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              Answer:
                            </span>{" "}
                            {term.ans}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Ready for Your Technical Interview ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Practice these questions thoroughly and boost your confidence
                for the interview. Bookmark this page for future reference and
                share with fellow developers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/interview-question"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  More Interview Questions
                </a>
              </div>
            </div>
          </div>
        </section>
      </QueLayout>
    </>
  );
};

export default GlossaryTable;
