import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import SmallArticle from "./SmallArticle.jsx";


export default function(props) {
    return (
        <div>
            <div className="logo">
                <h3>designory</h3>
            </div>
                <Navbar/>
            <div className="articleone">
                <SmallArticle/>
            </div>
            <div className="articletwo">
                <SmallArticle/>
            </div>
            <div className="articletwo">
                <SmallArticle/>
            </div>
            <div className="articlethree">
                <SmallArticle/>
            </div>
        </div>
    )
}

