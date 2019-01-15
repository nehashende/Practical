import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function BoilingPointVerdict(props)
{
    if(props.name === 'neha')
    {
        return <p>Hey Neha!</p>;
    }
    return <p>You're not known</p>;
}

class AdvancedTopic extends Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temp: ''}
    }

    handleChange(e)
    {
        this.setState({temp: e.target.value});
    }

    render()
    {
        const temp = this.state.temp;
        return (
            <fieldset>
                <legend>Enter Name : </legend>
                <input
                    value = {temp}
                    onChange = {this.handleChange}
                />
                <BoilingPointVerdict
                    name = {(temp)} />

                {/* <React.Fragment> */}
                    <td>Hello</td>
                    <td>World</td>
                {/* </React.Fragment> */}
                
            </fieldset>
        );
    }
}

export default AdvancedTopic;