import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import Progress from './Progress';
import Woops from './Woops';
import '../scss/list.scss';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            itemCurrentNumber: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        let progress = parseInt((props.count/props.items.length) * 100, 10);
        if (progress >= 100) {
            props.resetLoadedImagesCount();
        } 
        return {
            progress: progress,
            itemCurrentNumber: props.count
        };
    }

    render() {

        if (this.props.submit && this.props.items.length === 0) {
            return(<Woops />)
        }

        const items = this.props.items.map((item, key) => 
            <Item key={key} description={item.data[0].description} img={item.links[0].href} />
        );
        return(
            <div>
                {this.state.itemCurrentNumber > 0 && this.state.progress < 100 ? <Progress progress={this.state.progress}/> : null}
                <div className='wrapper'>
                    {items}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        submit: state.items.submit,
        count: state.images.imagesCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetLoadedImagesCount:() => {
            dispatch({
                type: 'RESET_LOADED_IMAGES_COUNT'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);