import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Bars = ({bars}) => {

    return (
        <div>
            {bars.map((bar)=><ProgressBar
                key={bar}
                animated
                now={bar>100?100:bar}
                variant={bar>100?'danger':'info'}
                label={`${bar}%`} />)}
        </div>
    )
}

Bars.propTypes = {
    bars: PropTypes.array,

};
export default Bars;
