import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

class Item extends Component {
    render() {
        return (
            <li>
                <img src={this.props.img} alt={this.props.description}/>
                <p>{ReactHtmlParser(this.props.description)}</p>
            </li>
        )
    }
}

export default Item;
