/* @flow */
import React, { Component } from 'react';
import ExampleWidget from './ExampleWidget.jsx';
import sleep from './sleep.jsx';

class ExampleApp extends Component {
    /**
     * @param {Object} props
     * @constructor
     */
    constructor (props: object) {
        super(props);
        this.state = { ready: false };
        this.init();
    }

    /**
     * Sleeps for a second before setting the 'ready' state to true.
     */
    async init () {
        await sleep(1000);
        this.setState({ ready: true });
    }

    /**
     * Render the app, conditionally renders the widget based on the 'ready' state.
     *
     * @returns {*}
     */
    render () {
        return (
            <div className="example-app">
                <h2>Hello World</h2>
                <p>This is an example application powered by React.</p>
                {this.state.ready ? <ExampleWidget /> : 'Loading'}
                <p>Hello World</p>
            </div>
        );
    }
}

export default ExampleApp;