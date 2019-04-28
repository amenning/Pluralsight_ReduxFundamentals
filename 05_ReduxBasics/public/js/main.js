import React from 'react';
import ReactDOM from 'react-dom';

import Conversion from './components/Conversion.js';

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Conversion />
            </div>
        )
    }
}


ReactDOM.render(<MainComponent />, document.getElementById('container'));
