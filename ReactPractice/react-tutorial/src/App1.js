import React, {Component} from 'react';

class App1 extends Component {
    state = {
        //Props (read-only)
        count : 0,
        arr : ["opt1", "opt2", "opt3"]
    }

    styles = {
        backgroundColor: "beige",
        margin: "100px",
        padding: "50px"
    }

    countFunction()
    {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    render() {
        return (
            <div style={this.styles}>
                <h5>Hey! Have a great day!!</h5>
                <span>The count is : {this.countFunction()} </span>
                <ul>{this.state.arr.map(ar => <li key={ar}>{ar}</li>)}</ul>
            </div>
        );
    }
}

export default App1;