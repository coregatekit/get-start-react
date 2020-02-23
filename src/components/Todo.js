import React, { Component, Fragment } from 'react';

class Todo extends Component {

    onRandom = () => {
        this.props.random(Math.random())
    }

    render() {
        return (
            <Fragment>
                <p>This is Todo Component</p>
                <ul>
                    <li>{this.props.title}</li>
                    <li>{this.props.count}</li>
                    <li>{this.props.body}</li>
                </ul>
                <button onClick={this.onRandom}>Random</button>
            </Fragment>
        )
    }
}

export default Todo;