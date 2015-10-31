import React, { Component } from 'react';
import ExampleWidget from './ExampleWidget';

class ExampleApp extends Component {
    render () {
        return (
            <div className="example-app">
                <h2>Hello World</h2>
                <p>This is an example application powered by React.</p>
                <br />
                <ExampleWidget />
            </div>
        );
    }
}

export default ExampleApp;