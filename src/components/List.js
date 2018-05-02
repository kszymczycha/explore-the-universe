import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class List extends Component {

    render() {

        console.log(this.props.items);

        const items = this.props.items.map((item, key) => 
            <Item key={key} description={item.data[0].description} img={item.links[0].href} />
        );

        return(
            <div>
                <ul>{items}</ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

List.defaultProps = {
    items: []
}

export default connect(mapStateToProps, null)(List);