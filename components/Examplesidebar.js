import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Examplesidebar = () => {
    const [ toggle, setToggle ] = useState( false );
    const openNav = () => {
        const $button = document.querySelector( '#sidebar-toggle' );
        const $wrapper = document.querySelector( '#wrapper' );
        $wrapper.classList.add( 'toggled' );
    };

    const closeNav = () => {
        const $button = document.querySelector( '#sidebar-toggle' );
        const $wrapper = document.querySelector( '#wrapper' );
        $wrapper.classList.remove( 'toggled' );
    };

    useEffect( () => {
        toggle ? openNav() : closeNav();
    }, [ toggle ] );
    return (
        <div>
            <div id="wrapper">
                <aside id="sidebar-wrapper">
                
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/examples">
                                <i className="fa fa-home" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/c-example">
                                C Programs
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/c-example">
                                C++ Programs
                            </Link>
                        </li> */}
                    </ul>
                </aside>
                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <Link href="#" className="" id="sidebar-toggle" onClick={ () => setToggle( !toggle ) }>
                                <i className="bi bi-list" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Examplesidebar

