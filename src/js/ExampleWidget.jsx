/* @flow */
import React, { Component } from 'react';

class ExampleWidget extends Component {
    /**
     * @constructor
     */
    constructor (props: object) {
        super(props);
        this.state = { value: 0 };
    }

    /**
     * Modifies the value by x.
     *
     * @param {Number} mod
     * @private
     */
    _updateBy (mod: number) {
        this.setState({ value: this.state.value + mod });
    }

    /**
     * Renders the component.
     *
     * @returns {*}
     */
    render () {
        return (
            <div className="example-widget">
                <button onClick={() => this._updateBy(-5)}>-5</button>
                <button onClick={() => this._updateBy(-1)}>-1</button>
                <input value={this.state.value} readOnly />
                <button onClick={() => this._updateBy(1)}>+1</button>
                <button onClick={() => this._updateBy(5)}>+5</button>
            </div>
        );
    }
}

export default ExampleWidget;