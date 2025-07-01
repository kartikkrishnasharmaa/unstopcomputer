import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HtmlSidebar = () => {
    const [toggle, setToggle] = useState(false)
    const openNav = () => {
        const $button = document.querySelector('#sidebar-toggle');
        const $wrapper = document.querySelector('#wrapper');
        $wrapper.classList.add('toggled');
    }

    const closeNav = () => {
        const $button = document.querySelector('#sidebar-toggle');
        const $wrapper = document.querySelector('#wrapper');
        $wrapper.classList.remove('toggled');
    }

    useEffect(() => {
        toggle ? openNav() : closeNav();
    }, [toggle])
    return (
        <div>
            <div id="wrapper">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <h2>HTML Tutorial</h2>
                    </div>
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/html-tutorial">
                                <i className="fa fa-home" />
                                HTML Home
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-introduction">
                                HTML Introduction
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-setup">
                                HTML Setup
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-heading">
                                HTML Heading
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-element">
                                HTML Element
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-text-formatting">
                                HTML Text
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-line-break">
                                HTML Line Break
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-paragraph">
                                HTML Paragraph
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-comment">
                                HTML Comment
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-link-and-url">
                                HTML Link & URL
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-table">
                                HTML Tables
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-image">
                                HTML Image
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-color">
                                HTML Color
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-form">
                                HTML Form
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-intractive-element">
                                HTML Intractive Element
                            </Link>
                        </li>   <li>
                            <Link href="../html-tutorial/html-list">
                                HTML List
                            </Link>
                        </li><li>
                            <Link href="../html-tutorial/html-styles">
                                HTML Style
                            </Link>
                        </li><li>
                            <Link href="../html-tutorial/html-favicon">
                                HTML Favicon
                            </Link>
                        </li><li>
                            <Link href="../html-tutorial/html-semantics">
                                HTML Semantics
                            </Link>
                        </li><li>
                            <Link href="../html-tutorial/html-symbol">
                                HTML Symbol
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-emoji">
                                HTML Emoji
                            </Link>
                        </li>
                        <li className="active font-bold text-blue-700">
                            HTML Multimedia
                        </li>  <li>
                            <Link href="../html-tutorial/html-audio">
                                HTML Audio
                            </Link>
                        </li>   <li>
                            <Link href="../html-tutorial/html-video">
                                HTML Video
                            </Link>
                        </li>   <li>
                            <Link href="../html-tutorial/html-canvas">
                                HTML Canvas
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-youtube">
                                HTML Youtube
                            </Link>
                        </li>
                        <li className="active font-bold text-blue-700">
                            Advanced HTML 5
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-editable-content">
                                Editable Content
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-spelling-mistake">
                                Check Spelling Mistake
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-client-side-storage">
                                Client Side Storage
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-drag-drop-feature">
                                Drag & Drop Feature
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-desktop-notification">
                                Desktop Notification
                            </Link>
                        </li>  <li>
                            <Link href="../html-tutorial/html-2d-and-3d-graphics">
                                2D & 3D Graphics
                            </Link>
                        </li>
                        <li>
                            <Link href="../html-tutorial/html-geolocation-api">
                                Geolocation API
                            </Link>
                        </li>
                        <li></li>
                        <li>.</li>
                        <li>.</li>
                        <li></li>
                    </ul>
                </aside>
                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <Link href="#" className="" id="sidebar-toggle" onClick={() => setToggle(!toggle)}>
                                <i className="bi bi-list" />
                            </Link>
                        </div>
                    </nav>
                </div>

            </div>

        </div>
    )
}

export default HtmlSidebar

