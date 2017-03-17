import React, {Component} from 'react';

const SmallArticle = (props) => (
        <div>
          <div className="articleinnerbox">
          </div>
          <div>
              <h2>{`${props.article.title}`}</h2>
              <h6>{`${props.article.date}`}</h6>
              <p>{`${props.article.content}`}</p>
          </div>
        </div>
    )

export default SmallArticle;