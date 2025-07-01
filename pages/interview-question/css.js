import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Link from "next/link";

const GlossaryTable = () => {
  const termsData = [
    {
      que: "What is the difference between padding and margin in CSS?",
      ans: "Padding is the space inside an element between the element's content and its border, while margin is the space outside the element, between the element's border and surrounding elements.",
    },

    {
      que: "Explain the 'box model' in CSS.",
      ans: "The box model is a fundamental concept in CSS that describes how elements are rendered on a web page. It consists of content, padding, border, and margin, which collectively determine the element's total size and appearance.",
    },

    {
      que: "What is the difference between inline and block elements?",
      ans: "Inline elements flow within the content and do not force a line break after them, while block elements take up the full width available and create a new line before and after them by default.",
    },

    {
      que: "What is the CSS 'float' property used for?",
      ans: "The 'float' property is used to specify whether an element should float to the left, right, or none. It's commonly used for creating layouts where elements can be positioned side by side.",
    },

    {
      que: "What is the purpose of CSS preprocessors like SASS and LESS?",
      ans: "CSS preprocessors extend CSS with features like variables, nesting, and mixins, making CSS more maintainable and efficient to write. They allow for modular and reusable code, speeding up development.",
    },

    {
      que: "Explain the difference between 'em' and 'rem' units in CSS.",
      ans: "'em' units are relative to the font size of the parent element, while 'rem' units are relative to the font size of the root element (usually the <html> element). 'rem' units provide a more predictable and consistent way to size elements.",
    },
    {
      que: "What is the CSS specificity and how does it work?",
      ans: "CSS specificity determines which style rules are applied to an element when multiple conflicting rules exist. It is calculated based on the selector's type, class, ID, and inline styles, with more specific selectors overriding less specific ones.",
    },

    {
      que: "How can you vertically center an element in CSS?",
      ans: "You can vertically center an element by setting its parent container's display property to flex and using the align-items and justify-content properties with a value of 'center', or by using the 'transform' property with 'translateY(-50%)' combined with absolute positioning and a top value of 50%.",
    },

    {
      que: "What is the 'box-sizing' property in CSS?",
      ans: "The 'box-sizing' property controls how the width and height of an element are calculated. The default value is 'content-box', where the width and height only include the content. Setting it to 'border-box' includes the padding and border in the element's total size.",
    },

    {
      que: "What is the difference between 'display: none' and 'visibility: hidden'?",
      ans: "'display: none' removes the element from the document flow, making it invisible and not taking up any space, while 'visibility: hidden' hides the element but still reserves its space in the layout.",
    },

    {
      que: "How do you create a responsive website in CSS?",
      ans: "You can create a responsive website by using media queries to apply different styles based on the viewport size, employing fluid layouts with percentages or viewport units, and optimizing images and other media for various devices.",
    },

    {
      que: "What are CSS pseudo-elements?",
      ans: "CSS pseudo-elements are keywords that allow you to style certain parts of an element, such as ::before and ::after, which insert content before and after the element's content, respectively. They are used to add decorative elements or generate content dynamically.",
    },

    {
      que: "Explain the 'z-index' property in CSS.",
      ans: "The 'z-index' property controls the stacking order of positioned elements along the z-axis. Elements with a higher 'z-index' value appear above elements with a lower value. It only applies to positioned elements (position: absolute, position: relative, position: fixed).",
    },

    {
      que: "What is the CSS 'transition' property used for?",
      ans: "The 'transition' property allows you to smoothly animate the changes in CSS properties over a specified duration. It's commonly used to create effects like hover states, fade-ins, and slide transitions.",
    },

    {
      que: "How can you include CSS in your HTML document?",
      ans: "You can include CSS in your HTML document using the <link> element to link an external CSS file, or by using the <style> element to embed CSS directly within the HTML document. Additionally, you can apply inline styles directly to HTML elements using the 'style' attribute.",
    },

    {
      que: "What is the difference between 'normalize.css' and 'reset.css'?",
      ans: "'normalize.css' is a CSS file that aims to make the default styles consistent across different browsers, providing a baseline for styling, while 'reset.css' aims to reset all styles to a consistent baseline, removing default browser styling completely.",
    },
    {
      que: "What is the 'flexbox' layout model in CSS?",
      ans: "Flexbox is a layout model in CSS that allows you to create flexible and responsive layouts more easily. It enables you to align and distribute space among items within a container, making it ideal for building dynamic and complex layouts.",
    },

    {
      que: "What is the purpose of CSS grid layout?",
      ans: "CSS grid layout is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides precise control over the placement and sizing of elements, making it well-suited for designing responsive web pages.",
    },

    {
      que: "Explain the concept of 'media queries' in CSS.",
      ans: "Media queries in CSS allow you to apply different styles based on the characteristics of the device or viewport, such as screen size, resolution, and orientation. They enable you to create responsive designs that adapt to various devices and screen sizes.",
    },

    {
      que: "What are CSS sprites and how are they used?",
      ans: "CSS sprites are a technique used to combine multiple images into a single image file and then use CSS to display specific parts of the image as needed. This reduces the number of server requests, improving website performance and loading times.",
    },

    {
      que: "How do you create a fixed navigation bar in CSS?",
      ans: "You can create a fixed navigation bar by setting the position property of the navigation element to 'fixed' and specifying its top, bottom, left, or right position. This will keep the navigation bar fixed in place as the user scrolls down the page.",
    },

    {
      que: "What is the CSS 'transform' property used for?",
      ans: "The 'transform' property in CSS allows you to apply various transformations to an element, such as scaling, rotating, skewing, and translating (moving). It's commonly used for creating visual effects and animations on web pages.",
    },

    {
      que: "What is the purpose of the 'currentColor' keyword in CSS?",
      ans: "The 'currentColor' keyword in CSS is used to refer to the value of the 'color' property of the element on which it's used. It's particularly useful for setting the color of an element's border, background, or text to match its font color dynamically.",
    },

    {
      que: "Explain the concept of 'CSS variables' (custom properties).",
      ans: "CSS variables, also known as custom properties, allow you to define reusable values that can be used throughout your CSS code. They provide a way to store and reuse values like colors, sizes, and font families, making CSS more maintainable and easier to update.",
    },

    {
      que: "What is the 'will-change' property in CSS and when should it be used?",
      ans: "The 'will-change' property in CSS allows you to hint to the browser that an element is going to change in a specific way, such as its position or opacity, enabling the browser to optimize its rendering performance. It should be used sparingly and only on elements that are expected to undergo significant changes.",
    },

    {
      que: "How do you create a responsive image gallery in CSS?",
      ans: "You can create a responsive image gallery by using CSS grid or flexbox to layout the images in a grid, setting their width to a percentage or viewport unit, and applying media queries to adjust the layout and size of the images based on the viewport size.",
    },

    {
      que: "What is the 'clip-path' property in CSS?",
      ans: "The 'clip-path' property in CSS allows you to specify a clipping region for an element, defining which parts of the element are visible and which are hidden. It's commonly used for creating non-rectangular shapes and image masks.",
    },

    {
      que: "Explain the difference between 'inline-block' and 'inline' display properties in CSS.",
      ans: "'inline-block' elements are displayed as inline elements but behave like block-level elements, allowing you to set a width, height, margins, and padding. 'inline' elements, on the other hand, only take up as much width as necessary and do not allow setting a width or height.",
    },

    {
      que: "What is the 'currentColor' keyword in CSS?",
      ans: "The 'currentColor' keyword in CSS is used to refer to the computed value of the 'color' property. It allows for dynamic styling, where an element's border, background, or other properties can automatically inherit the current text color.",
    },

    {
      que: "How do you create a diagonal gradient background in CSS?",
      ans: "You can create a diagonal gradient background in CSS by using the 'linear-gradient' function and specifying the angle of the gradient. By setting the background to a linear gradient with appropriate color stops, you can achieve a diagonal gradient effect.",
    },

    {
      que: "What are vendor prefixes in CSS and why are they used?",
      ans: "Vendor prefixes are prefixes added to CSS property names to identify which browser vendor (e.g., -webkit- for WebKit-based browsers like Chrome and Safari) implemented the property. They are used to apply experimental or non-standard CSS features that haven't been standardized yet, allowing developers to use them while ensuring backward compatibility.",
    },
    {
      que: "What is the CSS 'filter' property used for?",
      ans: "The 'filter' property in CSS allows you to apply graphical effects like blur, grayscale, brightness adjustment, and more to elements. It's commonly used for creating visual effects and enhancing images or backgrounds.",
    },

    {
      que: "Explain the concept of 'CSS specificity' and its importance in styling.",
      ans: "CSS specificity determines which style rules take precedence when multiple conflicting rules are applied to an element. It's calculated based on the selector's type, class, ID, and inline styles, and understanding it is crucial for writing maintainable and predictable CSS.",
    },

    {
      que: "What is the purpose of the 'display: flex' property value in CSS?",
      ans: "The 'display: flex' property value in CSS is used to create a flex container, enabling flexbox layout mode for its child elements. It allows for easy alignment and distribution of space along the main axis and cross axis of the container.",
    },

    {
      que: "Explain the difference between 'margin: auto' and 'text-align: center' for centering elements horizontally.",
      ans: "'margin: auto' centers a block-level element horizontally within its containing block by evenly distributing the available space on its left and right margins, while 'text-align: center' centers inline or inline-block elements within their parent element along the horizontal axis.",
    },

    {
      que: "What is the 'content-visibility' property in CSS and how does it improve performance?",
      ans: "The 'content-visibility' property in CSS allows you to control whether an element's content is rendered immediately or deferred until it's needed. It improves performance by reducing rendering and layout costs for off-screen or hidden content, particularly useful for large datasets or dynamically generated content.",
    },

    {
      que: "How do you create a responsive navbar with dropdown menus in CSS?",
      ans: "You can create a responsive navbar with dropdown menus by using a combination of HTML for the structure, CSS for styling and positioning, and JavaScript for interactivity. Media queries can be used to adjust the layout and appearance for different screen sizes.",
    },

    {
      que: "What is the CSS 'counter' property used for?",
      ans: "The 'counter' property in CSS is used in conjunction with the 'counter-increment' and 'counter-reset' properties to create and manipulate counters, which are used to generate and display custom numerical or string values for elements, such as numbered lists or section headings.",
    },

    {
      que: "Explain the purpose of the 'will-change' property in CSS.",
      ans: "The 'will-change' property in CSS is used to inform the browser of an element's expected changes, allowing it to optimize rendering performance by preparing resources or allocating memory in advance. It's particularly useful for elements that are expected to undergo significant changes or animations.",
    },

    {
      que: "What is the 'overflow' property in CSS and how is it used?",
      ans: "The 'overflow' property in CSS controls how content that exceeds the dimensions of an element's box is handled. It can be set to 'visible' (default), 'hidden', 'scroll', or 'auto', determining whether content is clipped, shown with a scrollbar, or automatically displayed based on the container's dimensions.",
    },

    {
      que: "What is the purpose of the 'aspect-ratio' property in CSS?",
      ans: "The 'aspect-ratio' property in CSS allows you to specify the aspect ratio of an element's box, ensuring that it maintains a particular width-to-height ratio even as its size changes. It's useful for creating responsive designs with consistent aspect ratios for images, videos, or containers.",
    },

    {
      que: "Explain the concept of 'CSS variables' and their benefits.",
      ans: "CSS variables, also known as custom properties, allow you to define reusable values that can be used throughout your CSS code. They provide a way to store and reuse values like colors, sizes, and font families, making CSS more maintainable and easier to update.",
    },

    {
      que: "How do you create a sticky footer in CSS?",
      ans: "You can create a sticky footer in CSS by setting the footer element's position to 'fixed' or 'absolute' and then using appropriate values for 'bottom', 'left', 'right', or 'margin'. This ensures that the footer remains at the bottom of the viewport or container, regardless of the content height.",
    },

    {
      que: "What is the purpose of the 'unicode-bidi' property in CSS?",
      ans: "The 'unicode-bidi' property in CSS controls the direction of text and its handling of bidirectional text, such as text containing both left-to-right and right-to-left scripts. It's commonly used in multilingual or internationalized web pages to ensure proper text rendering and readability.",
    },
    {
      que: "What is the 'mask' property in CSS used for?",
      ans: "The 'mask' property in CSS is used to apply an image or SVG element as a mask to another element, defining which parts of the element are visible and which are hidden. It's commonly used for creating complex shapes, image effects, and revealing content dynamically.",
    },

    {
      que: "Explain the concept of 'pointer-events' property in CSS.",
      ans: "The 'pointer-events' property in CSS controls whether an element can be the target of pointer events like mouse clicks and touches. It can be set to 'none' to make an element non-interactive or 'auto' to restore its default behavior.",
    },

    {
      que: "What is the purpose of the 'mix-blend-mode' property in CSS?",
      ans: "The 'mix-blend-mode' property in CSS allows you to specify how an element's content should blend with the content of its parent element or the content behind it. It's commonly used for creating artistic effects, overlays, and visual enhancements.",
    },

    {
      que: "How do you create a custom checkbox or radio button in CSS?",
      ans: "You can create a custom checkbox or radio button in CSS by hiding the default input element and styling its associated label or using pseudo-elements like ::before or ::after to create custom visuals. CSS techniques like transitions and animations can be applied to enhance the user experience.",
    },

    {
      que: "What is the 'isolation' property in CSS and how is it used?",
      ans: "The 'isolation' property in CSS controls how an element's content is rendered in relation to the rest of the document, allowing you to create stacking contexts and manage the rendering order of overlapping elements. It's particularly useful for controlling the visibility and interaction of elements in complex layouts.",
    },

    {
      que: "Explain the concept of 'aspect-ratio' in CSS and how it's used.",
      ans: "The 'aspect-ratio' property in CSS allows you to specify the aspect ratio of an element's box, ensuring that it maintains a particular width-to-height ratio even as its size changes. It's useful for creating responsive designs with consistent aspect ratios for images, videos, or containers.",
    },

    // Add more terms as needed
  ];
  return (
    <>
      <Head>
        <title>
          Top CSS Interview Questions with Answers | Unstop Computer
        </title>
        <meta
          name="description"
          content="Explore the most asked CSS interview questions with detailed answers. Perfect for beginners and experienced developers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="CSS interview questions, CSS answers, frontend interview, web development, Unstop Computer"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/interview-question/css"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="CSS Interview Questions and Answers | Unstop Computer"
        />
        <meta
          property="og:description"
          content="Crack your next frontend interview with these essential CSS questions and detailed answers. Curated by Unstop Computer."
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:url"
          content="https://unstopcomputer.tech/interview-question/css"
        />
        <meta property="og:type" content="website" />
      </Head>

      <QueLayout>
        <section id="content-wrapper" className="py-12 bg-white">
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
                  <span className="text-blue-900">CSS</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-4">
              CSS Interview Questions and Answers
            </h1>
            <p className="text-center text-blue-700  max-w-2xl mx-auto mb-12">
              These are commonly asked CSS interview questions you should know.
              Master them and get confident for your frontend interviews!
            </p>

            {/* Content Stats */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
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
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
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
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
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
