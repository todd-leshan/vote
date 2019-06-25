import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = (props) => {
    const {maximum, index, result, name} = props;
    const ratio = Number(result) / Number(maximum) * 100;

    const chartStyle = {
        width: ratio + '%',
        height: ratio + '%',
    };

    const chartClasses = 'result-item__chart-inner fill'+index;

    return (
        <div className="result-item">
            <div className="result-item__chart">
                <div className="result-item__counter">{result}</div>
                <div className={chartClasses} style={chartStyle}></div>
            </div>
            <div className="result-item__label">{name}</div>
        </div>
    );
};

ResultItem.propTypes = {
    maximum: PropTypes.number.isRequired,
    index: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default ResultItem;