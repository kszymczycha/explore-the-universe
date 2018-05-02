import React, { Component } from 'react'
import Form from './Form';
import List from './List';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Form />
                    <List />
                </div>
           </Provider>
        )
    }
}

export default App;

