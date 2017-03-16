import React, {Component} from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home.jsx';


class SignupContainer extends Component{
    render(){
        return (
            <div>
              <Home />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);




