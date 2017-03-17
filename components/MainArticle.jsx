
import React, {Component} from 'react';

const MainArticle = (props) => (
        <div>
          <div className="main-articlebox">
              <div className="main-innerbox"></div>
          </div>
          <div>
              <h2>{`${props.article.title}`}</h2>
              <h4>{`${props.article.subheading}`}</h4>
              <p>{`${props.article.content}`}</p>
              <button className="button-style" onClick={props.handleDownload}>DOWNLOAD NOW</button>
          </div>
        </div>
    )

export default MainArticle;