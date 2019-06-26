import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionOption from './QuestionOption';
import Button from './Button';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectOption: '',
            hasSelectedOption: false
        };
    }

    handleOptionSelect = (e) => {
        this.setState({
            selectOption: e.target.value,
            hasSelectedOption: true
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onVote(this.state.selectOption);
    };

    render() {
        const {question, choices} = this.props;
        if(question === null || question === '' || question === undefined) {
            return null;
        }

        return (  
            <form action="#" onSubmit={this.handleFormSubmit}>
                <fieldset>
                    <legend>Question: {question}</legend>
                    {
                        Object.keys(choices).map((id) => {
                            return (<QuestionOption 
                                key={`option-${id}`}
                                id={`option-${id}`}
                                name='screen-time'
                                index={id}
                                label={choices[id]}
                                onSelect={this.handleOptionSelect}
                            />);
                        })
                    }
                    <div className="form__submit">
                        <Button 
                            type='submit'
                            value='vote'
                            classes='btn btn--orange'
                            disabled={!this.state.hasSelectedOption}
                        />
                        <Button 
                            type='button'
                            value='view result'
                            classes='btn btn--orange'
                            onClick={this.props.onViewResult}
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    choices: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
    onViewResult: PropTypes.func.isRequired,
};

export default Question;