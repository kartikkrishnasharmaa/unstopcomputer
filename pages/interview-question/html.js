import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";

const GlossaryTable = () => {
  const termsData = [
    {
        "que": "What is the purposee of the `<!DOCTYPE html>` declaration?",
        "ans": "The `<!DOCTYPE html>` declaration defines the document type and version of HTML. It helps the browser to render the web page correctly according to HTML5 standards."
      },
      {
        "que": "Explain the difference between `id` and `class` attributes in HTML.",
        "ans": "The `id` attribute is used to uniquely identify a single element, while the `class` attribute is used to define a group of elements that can be styled similarly. An `id` must be unique within a document, whereas multiple elements can share the same `class`."
      },
      {
        "que": "How do you embed a video in an HTML document?",
        "ans": "You can embed a video in an HTML document using the `<video>` tag. For example: `<video width='320' height='240' controls> <source src='movie.mp4' type='video/mp4'> Your browser does not support the video tag. </video>`."
      },
      {
        "que": "What is the purpose of the `alt` attribute in the `<img>` tag?",
        "ans": "The `alt` attribute in the `<img>` tag provides alternative text for an image if the image cannot be displayed. It improves accessibility and helps search engines understand the content of the image."
      },
      {
        "que": "Describe the function of the `<meta>` tag in HTML.",
        "ans": "The `<meta>` tag provides metadata about the HTML document, such as the character set, description, keywords, author, and viewport settings. This information is used by browsers and search engines."
      },
      {
        "que": "What is the difference between `<div>` and `<span>` tags?",
        "ans": "The `<div>` tag is a block-level element used to group other block-level elements, while the `<span>` tag is an inline element used to group inline elements. `<div>` typically controls larger sections of content, whereas `<span>` is used for smaller portions."
      },
      {
        "que": "Explain the use of the `data-*` attributes in HTML.",
        "ans": "The `data-*` attributes are used to store custom data private to the page or application. They are useful for passing information to JavaScript and can be accessed using the `dataset` property."
      },
      {
        "que": "How can you create a hyperlink that opens in a new tab?",
        "ans": "To create a hyperlink that opens in a new tab, use the `target='_blank'` attribute in the `<a>` tag. For example: `<a href='https://www.example.com' target='_blank'>Example</a>`."
      },
      {
        "que": "What is semantic HTML, and why is it important?",
        "ans": "Semantic HTML uses HTML5 elements that clearly describe their meaning in a human- and machine-readable way. Examples include `<article>`, `<section>`, and `<nav>`. It improves accessibility, SEO, and maintainability of web pages."
      },
      {
        "que": "How do you include a CSS file in an HTML document?",
        "ans": "You can include a CSS file in an HTML document using the `<link>` tag within the `<head>` section. For example: `<link rel='stylesheet' href='styles.css'>`."
      },
      {
        "que": "What is the purpose of the `<script>` tag in HTML?",
        "ans": "The `<script>` tag is used to embed or reference JavaScript code within an HTML document. It can be placed in the `<head>` or `<body>` section, but best practices recommend placing it before the closing `</body>` tag to ensure the page loads faster."
      },
      {
        "que": "Explain the role of the `<form>` tag in HTML.",
        "ans": "The `<form>` tag is used to create an HTML form for user input. It contains form elements like `<input>`, `<textarea>`, `<button>`, and others. Forms are used to collect user data and send it to a server for processing."
      },
      {
        "que": "What are HTML entities, and why are they used?",
        "ans": "HTML entities are used to represent reserved characters or characters that cannot be easily typed. For example, `&lt;` represents `<`, and `&amp;` represents `&`. They ensure that the characters are displayed correctly in the browser."
      },
      {
        "que": "How do you create a list in HTML?",
        "ans": "You can create an unordered list using the `<ul>` tag and list items with `<li>`, or an ordered list using the `<ol>` tag and list items with `<li>`. Example: `<ul><li>Item 1</li><li>Item 2</li></ul>` for an unordered list."
      },
      {
        "que": "What is the purpose of the `<title>` tag in HTML?",
        "ans": "The `<title>` tag defines the title of the HTML document, which is displayed in the browser's title bar or tab. It is also used by search engines to understand the content of the page."
      },
      {
        "que": "What is the `<canvas>` element used for in HTML?",
        "ans": "The `<canvas>` element is used to draw graphics on a web page via scripting (usually JavaScript). It can be used for rendering graphs, game graphics, or other visual images dynamically."
      },
      {
        "que": "How can you make a responsive image in HTML?",
        "ans": "To make a responsive image, you can use the `srcset` attribute in the `<img>` tag or CSS media queries. The `srcset` attribute provides different image sources for different device widths."
      },
      {
        "que": "What is the difference between the `<b>` and `<strong>` tags?",
        "ans": "The `<b>` tag makes text bold without implying any extra importance, whereas the `<strong>` tag indicates that the text is of strong importance, which browsers typically render as bold."
      },
      {
        "que": "Explain the difference between the `<i>` and `<em>` tags.",
        "ans": "The `<i>` tag is used for text that is stylistically different from normal text, such as a technical term or a phrase in another language. The `<em>` tag emphasizes text with stress, usually rendered in italics."
      },
      {
        "que": "How do you create a table in HTML?",
        "ans": "You create a table using the `<table>` tag, along with `<tr>` for table rows, `<th>` for table headers, and `<td>` for table data cells. Example: `<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>`."
      },
      {
        "que": "What is the purpose of the `placeholder` attribute in the `<input>` tag?",
        "ans": "The `placeholder` attribute provides a short hint that describes the expected value of the input field. It is displayed inside the input field before the user enters a value."
      },
      {
        "que": "Describe the `<fieldset>` and `<legend>` tags and their usage.",
        "ans": "The `<fieldset>` tag is used to group related elements in a form, and the `<legend>` tag defines a caption for the `<fieldset>`. This helps to improve the organization and accessibility of the form."
      },
      {
        "que": "What is the purpose of the `required` attribute in form elements?",
        "ans": "The `required` attribute specifies that an input field must be filled out before submitting the form. It helps ensure that users do not leave the field blank."
      },
      {
        "que": "How do you create a dropdown list in HTML?",
        "ans": "You can create a dropdown list using the `<select>` tag along with `<option>` tags. Example: `<select><option value='1'>Option 1</option><option value='2'>Option 2</option></select>`."
      },
      {
        "que": "What is an HTML `<iframe>` and how is it used?",
        "ans": "An `<iframe>` (inline frame) is used to embed another HTML document within the current document. It is often used to embed content from another source, such as a video or a map."
      },
      {
        "que": "Explain the use of the `download` attribute in the `<a>` tag.",
        "ans": "The `download` attribute in the `<a>` tag is used to specify that the target will be downloaded when the hyperlink is clicked. The attribute can also provide a suggested filename for the downloaded file."
      },
      {
        "que": "How do you define a section of navigation links in HTML?",
        "ans": "You can define a section of navigation links using the `<nav>` tag. This semantic element indicates that the enclosed links are for navigation purposes."
      },
      {
        "que": "What is the purpose of the `<progress>` tag in HTML?",
        "ans": "The `<progress>` tag represents the completion progress of a task, such as a download or a file upload. It displays a progress bar that shows how much of the task has been completed."
      },
      {
        "que": "How can you include audio in an HTML document?",
        "ans": "You can include audio using the `<audio>` tag. Example: `<audio controls> <source src='audiofile.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>`."
      },
      {
        "que": "Explain the purpose of the `srcdoc` attribute in an `<iframe>`.",
        "ans": "The `srcdoc` attribute in an `<iframe>` is used to specify the HTML content to display within the `<iframe>`, instead of loading an external document via the `src` attribute."
      },
      {
        "que": "What is the purpose of the `<mark>` tag?",
        "ans": "The `<mark>` tag is used to highlight or mark text that is relevant or important. Browsers typically render the content inside `<mark>` with a yellow background."
      },
      {
        "que": "How do you create an email link in HTML?",
        "ans": "You create an email link using the `<a>` tag with the `mailto:` protocol. Example: `<a href='mailto:example@example.com'>Send Email</a>`."
      },
      {
        "que": "What are the global attributes in HTML?",
        "ans": "Global attributes are attributes that can be used on any HTML element. Examples include `class`, `id`, `style`, `title`, `data-*`, `hidden`, `tabindex`, and `aria-*`."
      },
      {
        "que": "How can you specify that a link should open in a parent frame?",
        "ans": "You can specify that a link should open in a parent frame using the `target='_parent'` attribute in the `<a>` tag. This is useful for breaking out of iframes."
      },
      {
        "que": "Explain the use of the `<details>` and `<summary>` tags.",
        "ans": "The `<details>` tag is used to create a collapsible content section that can be toggled open or closed. The `<summary>` tag provides a visible heading for the `<details>` content, which users can click to expand or collapse."
      },
      {
        "que": "What is the purpose of the `lang` attribute in the `<html>` tag?",
        "ans": "The `lang` attribute in the `<html>` tag specifies the language of the document's content. It helps search engines and screen readers to understand and process the language correctly."
      },
      {
        "que": "Explain the difference between the `<script>` tag's `defer` and `async` attributes.",
        "ans": "The `defer` attribute ensures that the script is executed after the document has been fully parsed. The `async` attribute allows the script to be executed as soon as it is available, without blocking document parsing."
      },
      {
        "que": "What is the `<template>` tag used for?",
        "ans": "The `<template>` tag is used to hold client-side content that is not rendered when the page loads. It can be used for JavaScript to clone and insert into the DOM as needed."
      },
      {
        "que": "How do you specify the character encoding for an HTML document?",
        "ans": "You specify the character encoding for an HTML document using the `<meta>` tag with the `charSet` attribute. Example: `<meta charSet='UTF-8'>`."
      },
      {
        "que": "What is the `autofocus` attribute, and how is it used?",
        "ans": "The `autofocus` attribute is used on an `<input>` element to specify that the input field should automatically get focus when the page loads."
      },
      {
        "que": "Explain the purpose of the `autocomplete` attribute in form elements.",
        "ans": "The `autocomplete` attribute specifies whether a form or an input field should have autocomplete enabled. It can take values such as 'on' or 'off'."
      },
      {
        "que": "What is the difference between `<link>` and `<a>` tags?",
        "ans": "The `<link>` tag is used to link external resources like stylesheets, whereas the `<a>` tag is used to create hyperlinks that navigate to other pages or resources."
      },
      {
        "que": "How do you include external JavaScript files in an HTML document?",
        "ans": "You include external JavaScript files using the `<script>` tag with the `src` attribute. Example: `<script src='script.js'></script>`."
      },
      {
        "que": "What is the purpose of the `<noscript>` tag?",
        "ans": "The `<noscript>` tag provides alternate content for users whose browsers do not support JavaScript or have it disabled."
      },
      {
        "que": "How can you create a checkbox in an HTML form?",
        "ans": "You create a checkbox using the `<input>` tag with `type='checkbox'`. Example: `<input type='checkbox' id='subscribe' name='subscribe' value='newsletter'>`."
      },
      {
        "que": "What is the use of the `srcset` attribute in the `<img>` tag?",
        "ans": "The `srcset` attribute provides a list of possible image sources for the `<img>` tag, allowing the browser to choose the most appropriate image based on the device's screen size and resolution."
      },
      {
        "que": "Explain the purpose of the `<picture>` element in HTML.",
        "ans": "The `<picture>` element allows you to define multiple `<source>` elements for an image, enabling different images to be displayed based on media queries, screen sizes, or device capabilities."
      },
      {
        "que": "What is the `contenteditable` attribute, and how is it used?",
        "ans": "The `contenteditable` attribute specifies whether the content of an element is editable. Setting it to 'true' makes the element's content editable by the user."
      },
      {
        "que": "How do you define a footer for a document or section in HTML?",
        "ans": "You define a footer using the `<footer>` tag. It typically contains metadata about the document or section, such as author information, links, or copyright data."
      },
      {
        "que": "What is the `rel` attribute in the `<link>` tag used for?",
        "ans": "The `rel` attribute specifies the relationship between the current document and the linked resource. Common values include 'stylesheet' for CSS files and 'icon' for favicon links."
      },
      {
        "que": "Explain the difference between `target='_self'` and `target='_blank'` in the `<a>` tag.",
        "ans": "The `target='_self'` attribute opens the linked document in the same tab or window, while `target='_blank'` opens the linked document in a new tab or window."
      },
      {
        "que": "What is the purpose of the `spellcheck` attribute in HTML?",
        "ans": "The `spellcheck` attribute specifies whether the element's content should be checked for spelling errors. It can be set to 'true' or 'false'."
      },
      {
        "que": "How do you create a radio button in an HTML form?",
        "ans": "You create a radio button using the `<input>` tag with `type='radio'`. Each radio button in a group must have the same `name` attribute to ensure only one can be selected. Example: `<input type='radio' name='gender' value='male'>`."
      },
      {
        "que": "What is the purpose of the `<main>` element in HTML?",
        "ans": "The `<main>` element is used to specify the main content of a document. It should contain the content that is unique to the document and not include repeated content like headers, footers, or navigation links."
      },
      {
        "que": "Explain the use of the `hidden` attribute in HTML.",
        "ans": "The `hidden` attribute is used to hide an element from view. The element will not be displayed on the page, but it remains in the DOM and can be shown using JavaScript or CSS."
      },
      {
        "que": "What is the purpose of the `meta` tag with the `viewport` attribute?",
        "ans": "The `meta` tag with the `viewport` attribute is used to control the layout on mobile browsers. It allows you to set the width and scaling of the viewport, which helps make web pages responsive. Example: `<meta name='viewport' content='width=device-width, initial-scale=1.0'>`."
      },
      {
        "que": "How do you make a text input field read-only in HTML?",
        "ans": "You make a text input field read-only by adding the `readonly` attribute to the `<input>` tag. This prevents the user from modifying the value of the input field but allows the field to be focused and its value to be copied."
      },
      {
        "que": "What is the purpose of the `accesskey` attribute in HTML?",
        "ans": "The `accesskey` attribute specifies a shortcut key to activate or focus an element. This enhances the accessibility of the web page by allowing users to navigate through elements using the keyboard. Example: `<button accesskey='s'>Save</button>`."
      },
      {
        "que": "Explain the purpose and usage of the `aria-label` attribute.",
        "ans": "The `aria-label` attribute is used to define a string that labels an element, which improves accessibility for screen reader users. It provides an invisible label that can be read by assistive technologies, enhancing the usability of interactive elements."
      },
      {
        "que": "How can you create an ordered list with custom numbers in HTML?",
        "ans": "You can create an ordered list with custom numbers by using the `value` attribute in the `<li>` tags. This attribute allows you to set a specific number for each list item. Example: `<ol><li value='3'>Item 3</li><li value='5'>Item 5</li></ol>`."
      },
      {
        "que": "What is the purpose of the `draggable` attribute in HTML?",
        "ans": "The `draggable` attribute specifies whether an element is draggable. When set to `true`, it allows the element to be dragged using the mouse. This attribute can be used to implement drag-and-drop interfaces in web applications."
      },
      {
        "que": "How do you include a favicon in an HTML document?",
        "ans": "You include a favicon in an HTML document using the `<link>` tag with the `rel='icon'` attribute. This tag should be placed in the `<head>` section. Example: `<link rel='icon' href='favicon.ico' type='image/x-icon'>`."
      },
      {
        "que": "Explain the purpose of the `pre` tag in HTML.",
        "ans": "The `<pre>` tag is used to define preformatted text. Text inside this tag is displayed in a fixed-width font and preserves both spaces and line breaks. It is useful for displaying code snippets or formatted text exactly as written."
      },
      {
        "que": "What is the `sandbox` attribute in the `<iframe>` tag used for?",
        "ans": "The `sandbox` attribute is used to apply extra restrictions to the content in an `<iframe>`. It enhances security by controlling features like running scripts, submitting forms, and accessing the top-level browsing context. Example: `<iframe src='example.html' sandbox='allow-scripts'></iframe>`."
      },
      {
        "que": "How do you create a tooltip in HTML?",
        "ans": "You create a tooltip by using the `title` attribute on an HTML element. When the user hovers over the element, the text specified in the `title` attribute is displayed as a tooltip. Example: `<button title='Save changes'>Save</button>`."
      },
      {
        "que": "What is the `pattern` attribute in the `<input>` tag used for?",
        "ans": "The `pattern` attribute is used to specify a regular expression that the input field's value must match for form validation. It helps enforce specific formats for user input, such as phone numbers or email addresses."
      },
      {
        "que": "Explain the difference between the `button`, `submit`, and `reset` values in the `type` attribute of the `<button>` tag.",
        "ans": "The `button` type creates a clickable button with no default behavior. The `submit` type submits the form data to the server, while the `reset` type resets all form fields to their default values. Each type serves a distinct purpose in form handling."
      },
      {
        "que": "How can you specify a default value for an `<input>` field?",
        "ans": "You specify a default value for an `<input>` field using the `value` attribute. This value will be pre-filled in the input field when the page loads. Example: `<input type='text' value='Default Text'>`."
      },
      {
        "que": "What is the `autoplay` attribute in the `<video>` tag, and how is it used?",
        "ans": "The `autoplay` attribute in the `<video>` tag specifies that the video should start playing automatically when the page loads. This attribute is useful for auto-playing videos, but it can also be disruptive if overused."
      },
      {
        "que": "Explain the difference between `localStorage` and `sessionStorage` in HTML5.",
        "ans": "`localStorage` stores data with no expiration date, meaning it persists even after the browser is closed. `sessionStorage` stores data for the duration of the page session, which is cleared when the page or browser is closed. Both are used for client-side storage."
      },
      {
        "que": "How do you create a multiline text input field in an HTML form?",
        "ans": "You create a multiline text input field using the `<textarea>` tag. This tag allows users to enter and edit multiple lines of text. Example: `<textarea rows='4' cols='50'>Default text</textarea>`."
      },
      {
        "que": "What is the `inputmode` attribute in HTML, and how is it used?",
        "ans": "The `inputmode` attribute specifies what kind of input mode (keyboard type) should be used by a device when editing the element's value. It can enhance user experience by presenting a suitable keyboard layout for different types of input, such as numeric or email."
      },
      {
        "que": "Explain the purpose of the `datalist` element in HTML.",
        "ans": "The `<datalist>` element provides a list of predefined options for an `<input>` element. It enhances user input by allowing users to select from a dropdown list of suggested values while still being able to enter other values."
      },
      {
        "que": "What is the `formnovalidate` attribute, and when would you use it?",
        "ans": "The `formnovalidate` attribute is used on a `<button>` or `<input type='submit'>` to prevent form validation when submitting. It is useful when you want to allow form submission without validating the inputs, such as for cancel or skip actions."
      },
      {
        "que": "How do you create an inline frame (iframe) that is responsive?",
        "ans": "To create a responsive inline frame, you can use CSS to set the `width` to 100% and use a height that adjusts based on the content or viewport. You can also use the `aspect-ratio` CSS property to maintain the frame's aspect ratio. Example: `<iframe src='example.html' style='width: 100%; height: 200px;'></iframe>`."
      },
      {
        "que": "What is the purpose of the `<aside>` element in HTML?",
        "ans": "The `<aside>` element represents a section of a document with content tangentially related to the content around it. This could be sidebars, pull quotes, or advertisements. It improves semantic structure and accessibility."
      },
      {
        "que": "How do you create a progress bar in HTML?",
        "ans": "You create a progress bar using the `<progress>` tag, which displays the progress of a task. You can specify the `value` and `max` attributes to represent the completion status. Example: `<progress value='70' max='100'></progress>`."
      },
      {
        "que": "What is the `aria-describedby` attribute used for in HTML?",
        "ans": "The `aria-describedby` attribute identifies the element (or elements) that describe the object. This is useful for providing additional context to screen reader users, linking descriptions to the interactive elements they describe."
      },
      {
        "que": "Explain the use of the `<figcaption>` tag in HTML.",
        "ans": "The `<figcaption>` tag is used to provide a caption for the `<figure>` element. It is typically used to add a description or explanation for the image, chart, or illustration contained within the `<figure>`."
      },
      {
        "que": "How can you create an accessible form in HTML?",
        "ans": "To create an accessible form, use `<label>` elements to associate text labels with form controls. Use `aria` attributes to enhance accessibility, ensure proper tab order, and provide feedback for error messages. Also, consider using fieldsets and legends for grouped form elements."
      },
      {
        "que": "What is the purpose of the `<time>` element in HTML?",
        "ans": "The `<time>` element is used to represent a specific period in time, such as a date, time, or duration. It can include the `datetime` attribute to specify a machine-readable value. This element helps search engines and browsers understand and display time-related information."
      },
      {
        "que": "How do you define a document's base URL in HTML?",
        "ans": "You define a document's base URL using the `<base>` tag inside the `<head>` section. The `href` attribute of the `<base>` tag specifies the base URL for all relative URLs in the document. Example: `<base href='https://www.example.com/'>`."
      },
      {
        "que": "Explain the use of the `aria-live` attribute.",
        "ans": "The `aria-live` attribute indicates that an element will be updated and that those updates should be communicated to assistive technologies. It can have values like 'polite', 'assertive', or 'off', dictating how updates are announced to users."
      },
      {
        "que": "What is the purpose of the `formaction` attribute in HTML?",
        "ans": "The `formaction` attribute specifies the URL to which the form data will be sent when the form is submitted. This attribute can be used on `<button>` or `<input type='submit'>` elements to override the form's `action` attribute."
      },
      {
        "que": "How do you create a collapsible section in HTML?",
        "ans": "You create a collapsible section using the `<details>` and `<summary>` elements. The `<summary>` element provides a summary or label for the collapsible content, which is enclosed in the `<details>` element. Example: `<details><summary>More Info</summary><p>This is the collapsible content.</p></details>`."
      },
      {
        "que": "What is the purpose of the `<bdi>` element in HTML?",
        "ans": "The `<bdi>` (Bi-Directional Isolation) element is used to isolate a span of text that might be formatted in a different direction than the surrounding text. It ensures that the text inside it does not interfere with the surrounding text direction."
      },
      {
        "que": "Explain the use of the `list` attribute in the `<input>` tag.",
        "ans": "The `list` attribute in the `<input>` tag is used to bind the input field to a `<datalist>` element, which provides a list of predefined options for the user to select from. This enhances user experience by offering suggestions while typing."
      },
      {
        "que": "How do you create a responsive table in HTML?",
        "ans": "To create a responsive table, you can use CSS to make the table scrollable horizontally on smaller screens. This can be done by wrapping the `<table>` in a `<div>` with `overflow-x: auto;` and setting the table to `width: 100%;`. Alternatively, using CSS frameworks like Bootstrap can help achieve responsive tables more easily."
      },
      {
        "que": "What is the `contenteditable` attribute, and how is it used?",
        "ans": "The `contenteditable` attribute specifies whether the content of an element is editable by the user. When set to `true`, the user can modify the element's content directly in the browser. Example: `<div contenteditable='true'>This is editable text.</div>`."
      },
      {
        "que": "Explain the purpose of the `<output>` element in HTML.",
        "ans": "The `<output>` element is used to represent the result of a calculation or user action. It is commonly used in conjunction with JavaScript to display dynamic results based on user inputs or other interactions within a form."
      },
      {
        "que": "How do you create a hidden form field in HTML?",
        "ans": "You create a hidden form field using the `<input>` tag with `type='hidden'`. This field is not visible to the user but its value is submitted with the form. It is useful for storing data that should be sent to the server but not shown to the user."
      },
      {
        "que": "What is the `spellcheck` attribute, and how is it used?",
        "ans": "The `spellcheck` attribute specifies whether the element's content should be checked for spelling errors. When set to `true`, the browser will highlight misspelled words and suggest corrections. This attribute can be used on text input fields and editable elements."
      },
      {
        "que": "Explain the use of the `<s>` tag in HTML.",
        "ans": "The `<s>` (strikethrough) tag is used to indicate text that is no longer accurate or relevant, often displayed with a strikethrough effect. It is commonly used to show edits, deletions, or changes in content."
      },
      {
        "que": "How do you create an accessible image link in HTML?",
        "ans": "To create an accessible image link, use an `<a>` tag with an `<img>` tag inside it and include appropriate `alt` text for the image. The `alt` text ensures that screen readers can describe the link's purpose. Example: `<a href='https://example.com'><img src='image.jpg' alt='Description of the link'></a>`."
      },
      {
        "que": "What is the purpose of the `<small>` element in HTML?",
        "ans": "The `<small>` element is used to represent side comments, fine print, or less important text. It typically renders the text in a smaller font size, helping to differentiate it from the main content."
      },
      {
        "que": "What is the purpose of the `lang` attribute in the `<html>` tag?",
        "ans": "The `lang` attribute in the `<html>` tag specifies the language of the document's content. This helps search engines and screen readers process the content correctly, improving accessibility and SEO. Example: `<html lang='en'>`."
      },
      {
        "que": "How do you create a form that allows users to upload files?",
        "ans": "To create a form that allows file uploads, use the `<input>` tag with `type='file'`. Ensure the form's `enctype` attribute is set to `multipart/form-data` to handle file data correctly. Example: `<form enctype='multipart/form-data'><input type='file' name='fileUpload'></form>`."
      },
      {
        "que": "What is the `novalidate` attribute in a form element?",
        "ans": "The `novalidate` attribute disables form validation when the form is submitted. It allows the form to be submitted even if there are invalid inputs. This can be useful for testing or specific use cases where validation is handled server-side."
      },
      {
        "que": "Explain the use of the `<map>` and `<area>` elements in HTML.",
        "ans": "The `<map>` element defines an image map, which is an image with clickable areas. The `<area>` elements within the `<map>` specify the coordinates and shapes of these clickable areas. The `usemap` attribute on the `<img>` tag links to the map. Example: `<img src='image.jpg' usemap='#mapname'><map name='mapname'><area shape='rect' coords='34,44,270,350' href='link.html'></map>`."
      },
      {
        "que": "How do you use the `autocomplete` attribute in form elements?",
        "ans": "The `autocomplete` attribute specifies whether a form or input field should have autocomplete enabled, allowing browsers to suggest previously entered values. It can be set to 'on' or 'off'. Example: `<input type='text' name='username' autocomplete='on'>`."
      },
      {
        "que": "What is the `tabindex` attribute and how is it used?",
        "ans": "The `tabindex` attribute specifies the tab order of an element when the 'Tab' key is used for navigation. A positive value sets the element's position in the tab order, `0` includes the element in the natural tab order, and `-1` removes it from the tab order but makes it focusable via script. Example: `<input type='text' tabindex='1'>`."
      },
      {
        "que": "Explain the use of the `<code>` and `<pre>` elements.",
        "ans": "The `<code>` element represents a fragment of computer code and is typically displayed in a monospace font. The `<pre>` element represents preformatted text, which preserves whitespace and line breaks, making it ideal for displaying code blocks. Example: `<pre><code>let x = 10;</code></pre>`."
      },
      {
        "que": "What is the `srcset` attribute in the `<img>` tag, and how does it work?",
        "ans": "The `srcset` attribute allows you to define a list of different image sources and their corresponding sizes. The browser selects the most appropriate image based on the device's screen size and resolution. Example: `<img srcset='image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 1500w' src='image-large.jpg' alt='Responsive image'>`."
      },
      {
        "que": "How do you create a definition list in HTML?",
        "ans": "A definition list is created using the `<dl>` element, with `<dt>` for definition terms and `<dd>` for definition descriptions. It is used to present a list of terms and their corresponding definitions. Example: `<dl><dt>HTML</dt><dd>Hypertext Markup Language</dd></dl>`."
      },
      {
        "que": "Explain the use of the `placeholder` attribute in input elements.",
        "ans": "The `placeholder` attribute provides a short hint that describes the expected value of an input field. The placeholder text is displayed inside the input field when it is empty, guiding users on what to enter. Example: `<input type='text' placeholder='Enter your name'>`."
      },
      {
        "que": "What is the `srcdoc` attribute in the `<iframe>` tag?",
        "ans": "The `srcdoc` attribute specifies the HTML content to be displayed in the `<iframe>` directly within the element. It is an alternative to the `src` attribute and allows embedding HTML content without an external URL. Example: `<iframe srcdoc='<p>Embedded content</p>'></iframe>`."
      },
      {
        "que": "How do you create a table with a caption in HTML?",
        "ans": "You create a table with a caption by using the `<caption>` element inside the `<table>` element. The `<caption>` element provides a title or description for the table, enhancing its accessibility. Example: `<table><caption>Monthly Sales Data</caption><tr><th>Month</th><th>Sales</th></tr><tr><td>January</td><td>$10,000</td></tr></table>`."
      },
      {
        "que": "Explain the use of the `aria-hidden` attribute in HTML.",
        "ans": "The `aria-hidden` attribute indicates whether an element and its children are perceivable to assistive technologies. Setting it to 'true' hides the element from screen readers, which can be useful for content that is visually hidden but still present in the DOM."
      },
      {
        "que": "What is the purpose of the `<mark>` element?",
        "ans": "The `<mark>` element is used to highlight text that is relevant or important in the context of the document. It typically displays text with a yellow background, making it stand out from the surrounding content. Example: `<p>This is a <mark>highlighted</mark> word.</p>`."
      },
      {
        "que": "How do you create a navigation menu using HTML5 elements?",
        "ans": "You create a navigation menu using the `<nav>` element, which represents a section of navigation links. Inside the `<nav>`, you can use an unordered list (`<ul>`) with list items (`<li>`) containing anchor tags (`<a>`) for each menu item. Example: `<nav><ul><li><a href='#home'>Home</a></li><li><a href='#about'>About</a></li><li><a href='#contact'>Contact</a></li></ul></nav>`."
      },
      {
        "que": "What is the `ping` attribute in an `<a>` tag?",
        "ans": "The `ping` attribute specifies a space-separated list of URLs to be notified if the user follows the hyperlink. This can be used for tracking purposes. When the link is clicked, the browser sends a POST request to the specified URLs. Example: `<a href='https://example.com' ping='https://tracker.com/log'>Link</a>`."
      },
      {
        "que": "Explain the difference between the `<strong>` and `<b>` tags.",
        "ans": "The `<strong>` tag indicates that the enclosed text has strong importance or urgency, and is often displayed in bold. The `<b>` tag simply makes the text bold without implying any additional importance. Using `<strong>` is preferred for semantic HTML, while `<b>` is more for visual styling."
      },
      {
        "que": "How do you use the `download` attribute in an `<a>` tag?",
        "ans": "The `download` attribute in an `<a>` tag prompts the browser to download the linked resource rather than navigating to it. You can optionally specify a filename for the downloaded file. Example: `<a href='file.pdf' download='custom_name.pdf'>Download PDF</a>`."
      },
      {
        "que": "What is the purpose of the `<wbr>` element?",
        "ans": "The `<wbr>` (Word Break Opportunity) element represents a position within text where the browser can optionally break a line. It helps control word wrapping in long strings, improving the readability of text in narrow containers. Example: `super<wbr>califragilistic<wbr>expialidocious`."
      },
      {
        "que": "Explain the use of the `<abbr>` element in HTML.",
        "ans": "The `<abbr>` element is used to represent an abbreviation or acronym, providing an optional `title` attribute to specify the full expansion. This helps users and assistive technologies understand the meaning of the abbreviation. Example: `<abbr title='Hypertext Markup Language'>HTML</abbr>`."
      }
      
      
      
      
      
      

    // Add more terms as needed
  ];

  return (
    <>
      <Head>
      <title>HTML Interview Question | Unstop Computer</title>
        <meta name="description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms." />

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
          href="https://unstopcomputer.tech/interview-question/html"
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
          content="HTML Interview Question | Unstop Computer"
        />
       <meta property="og:description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms." />
      </Head>
      <QueLayout>
        <section id="content-wrapper">
          <div className="row">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left md:mb-0">
                  <div className="relative xl:container">
                    <h2 className=" text-blue-700 text-2xl sm:text-xl md:text-5xl lg:text-center xl:text-4l dark:text-blue">
                      HTML Interview Questions and Answer{" "}
                    </h2>{" "}
                    <br className="lg:block hidden" />
                  </div>
                  <p className="mt-2">
                  Here are HTML Top interview questions along with their correct answers..{" "}
                  </p>
                </div>
              </div>
              <div className="max-w-screen-lg mx-auto p-4">
                <div className="w-full table-auto">
                  {termsData.map((term, index) => (
                    <div
                      key={index + 1}
                      class="flex flex-col gap-4 p-3 mt-6 shadow-xl"
                    >
                      <div class="flex justify justify-between">
                        <div class="flex gap-auto">
                          <div class="w-7 h-7 text-center rounded-full bg-blue-700 mr-6 text-white">
                            {index + 1}
                          </div>
                          <span className="font-bold">{term.que}</span>
                        </div>
                      </div>
                      <div className="m-3">
                        Ans.
                        <span className="ml-2">{term.ans}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
        </section>
      </QueLayout>
    </>
  );
};

export default GlossaryTable;
