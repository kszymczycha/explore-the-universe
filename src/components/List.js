import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import Progress from './Progress';
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
        const items = this.props.items.map((item, key) => 
            <Item key={key} description={item.data[0].description} img={item.links[0].href} />
        );
        return(
            <div>
                {this.state.itemCurrentNumber > 0 && this.state.progress < 100 ? <Progress progress={this.state.progress}/> : null}
                <ul>{items}</ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
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

List.defaultProps = {
    items: [],
    count: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(List);