import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import '../scss/progress.scss';

class Progress extends Component {
    render () {
        return(
            <div className="progressBar">
                <div style={{width: this.props.progress + '%'}}></div>
            </div>
        );
    }
}

export default Progress;