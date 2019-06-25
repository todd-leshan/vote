import React from 'react';
import PropTypes from 'prop-types';

const QuestionOption = (props) => {
    const {id, name, index, label, onSelect} = props;
    return (
        <div className="form-field form-field__checkbox">
            <input type="radio" name={name} id={id} onChange={onSelect} value={label} />
            <label htmlFor={id}>{`${index}. ${label}`}</label>   
        </div>
    );
};

QuestionOption.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default QuestionOption;