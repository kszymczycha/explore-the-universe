import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../scss/item.scss';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgBgClasses: 'displayBgImage',
            imgClasses: 'imgHide'
        }
    }

    handleImageLoaded(e) {
        this.setState({
            imgBgClasses: 'hideBgImage',
            imgClasses: 'imgShow'
        })
    }

    render() {
        return (
            <li>
                <div className="imgContainer">
                    <div className={this.state.imgBgClasses}>
                        <img className={this.state.imgClasses} src={this.props.img} onLoad={this.handleImageLoaded.bind(this)} />
                    </div>
                    <hr />
                    <p>{ReactHtmlParser(this.props.description)}</p>
                </div>
            </li>
        )
    }
}

export default Item;
