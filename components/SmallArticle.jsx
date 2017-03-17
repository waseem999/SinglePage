import React, {Component} from 'react';

const SmallArticle = (props) => (
        <div>
          <div className="innerbox">
          </div>
          <div>
              <h2>{`${props.article.title}`}</h2>
          </div>
        </div>
    )

export default SmallArticle;