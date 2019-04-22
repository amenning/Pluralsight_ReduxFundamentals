import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

class Loading extends React.Component {
    render() {
        return (
            <span>
                Loading...
            </span>
        );
    }
}

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // temp: '0'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            $.ajax({
                url: "https://n89i8xbcal.execute-api.us-west-2.amazonaws.com/prod/getReduxTemp",
            }).done(response => {
                this.setState({
                    temp: response.temp.value
                })
            });
        }, 3000);
    }

    render() {
        if (this.state.temp) {
            var temp = (9/5) * (this.state.temp - 273) + 32; // convert from Kelvin to Fahrenheit
        } else {
            return <Loading />;
        }

        return (
            <div>
                <h2>Current weather</h2>
                Current temp in {this.props.zipCode} is <strong>{temp.toFixed(2)}&#8457;</strong>
            </div>
        )
    }
}

Weather.propTypes = {
    zipCode: PropTypes.number.isRequired
}

var el = document.getElementById('three');
ReactDOM.render(<Weather zipCode="95123" />, el);
