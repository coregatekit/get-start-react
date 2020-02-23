import React, { Component, Fragment } from 'react';
import Todo from './Todo';

class AddTodo extends Component {

    state = {
        title: "",
        count: 0,
        body: "",
        num: []
    }

    // titleHandler = (e) => {
    //     this.setState({
    //         title: e.target.value
    //     })
    // }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onChangeHandler = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onRandomNumber = (e) => {
        this.setState({
            num: [...this.state.num, e]
        })
        console.log(this.state.num)
    }

    render() {
        const { title, count, body, num } = this.state
        return (
            <Fragment>
                <Todo title={title} count={count} body={body} random={this.onRandomNumber} />
                <br />
                <br />
                <ul>
                    {
                        num.map(n => {
                            return <li>{n}</li>
                        })
                    }
                </ul>
                <form>
                    <label>Title</label>
                    <input onChange={this.onChangeHandler} name="title" value={title} />
                    <label>Body</label>
                    <input onChange={this.onChangeHandler} name="body" value={body} />
                </form>
                <button onClick={this.increment} >+</button>
            </Fragment>
        )
    }
}

export default AddTodo;