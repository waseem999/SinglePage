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
            content: "blah blah blah"             
        },
         articleTwo : {
            title: "Article 2",
            date: "August 14, 2013",
            content: "blah blah blah"             
        },
         articleThree : {
            title: "Article 3",
            date: "August 21, 2013",
            content: "blah blah blah"             
        }
    }
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
                <Message/>
            </div>
            <div>
            </div>
            <div className="articleone">
                <SmallArticle article={this.state.articleOne}/>
            </div>
            <div className="articletwo">
                <SmallArticle article={this.state.articleTwo}/>
            </div>
            <div className="articlethree">
                <SmallArticle article={this.state.articleThree}/>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);




