import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.fetchData(this.state.search);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Search:</label>
                    <br />
                    <input type="text" name="search" value={this.state.search} onChange={this.onChange}/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (formData) => {
            fetch('https://images-api.nasa.gov/search?q=' + formData + '&media_type=image')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'FETCH_DATA',
                payload: data.collection.items
            }));
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);

