import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {type, value, classes, disabled, onClick} = props;

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick}>{value}</button>
    );
};

Button.defaultProps = {
    disabled: false,
    onClick: () => {},
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;