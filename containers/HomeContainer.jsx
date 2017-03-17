import React, {Component} from 'react';
import { connect } from 'react-redux';
//import Home from '../components/Home.jsx';
import SmallArticle from '../components/SmallArticle.jsx';
import Message from '../components/Message.jsx';
import Navbar from '../components/Navbar.jsx';

class HomeContainer extends Component{
constructor(props) {
    super(props);
    this.state = {
        articleOne : {
            title: "Article 1",
            date: "August 8, 2013",
            content: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam"             
        },
         articleTwo : {
            title: "Article 2",
            date: "August 14, 2013",
            content: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam"             
        },
         articleThree : {
            title: "Article 3",
            date: "August 21, 2013",
            content: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam"           
        }
    }
    this.handleDownload = this.handleDownload.bind(this);
  }
    handleDownload(e){
        alert('Downloading')
    }

    render(){
        return (
        <div>
            <div className="logo">
                <h3>designory.</h3>
            </div>
            <div>
                <Navbar/>
            </div>
            <div className="message">
                <Message handleDownload={this.handleDownload}/>
            </div>
            <div>
            </div>
            <div className="article-1">
                <SmallArticle article={this.state.articleOne}/>
            </div>
            <div className="article-2">
                <SmallArticle article={this.state.articleTwo}/>
            </div>
            <div className="article-3">
                <SmallArticle article={this.state.articleThree}/>
            </div>
        </div>
        )
    }
}

export default HomeContainer;




