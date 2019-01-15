import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function boilingPointVerdict(props)
    {
        if(props.celcius >= 100)
        {
            return <p>Boiling</p>
        }
        return <p>Not boiling</p>
    }

class AdvancedTopics extends Component
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
                <legend>Enter temperature : </legend>
                <input
                    value = {temp}
                    onChange = {this.handleChange}
                />
                <boilingPointVerdict
                    celcius = {parseFloat(temp)}
                />
            </fieldset>
        );
    }
}

export default AdvancedTopics;