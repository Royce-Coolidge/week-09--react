import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClickIncrement = this.handleClickIncrement.bind(this);
        this.handleClickDecrement = this.handleClickDecrement.bind(this);
    }

    handleClickDecrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            });
        }
    }

    handleClickIncrement() {
        if (this.state.count < this.props.max) {
            this.setState({
                count: this.state.count + 1,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <p className="well">{ this.state.count }</p>
                <button onClick={ this.handleClickDecrement } className="btn btn-primary">-</button>
                <button onClick={ this.handleClickIncrement } className="btn btn-primary">+</button>
            </React.Fragment>
        );
    }
}

Counter.defaultProps = {
    max: 100,
};

export default Counter;
