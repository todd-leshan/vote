import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultItem from './ResultItem';
import Button from './Button';

class Result extends Component {

    findHighestVote = (votes) => {
        let max = 0;
        Object.keys(votes).forEach((key) => {
            const vote = Number(votes[key]);
            max = vote > max ? vote : max;
        });

        return max;
    }

    render() {
        const {question, votes, choices, onBTQbtnClick} = this.props;
        const highestVote = this.findHighestVote(votes);
        
        return(
            <div>
                <h2>Question: {question}</h2>
                <h3>Result</h3>
                <div className="result">
                    
                    {
                        Object.keys(votes).map((id) => {
                            return (<ResultItem 
                                key={`result-${id}`}
                                index={id}
                                name={choices[id]}
                                result={votes[id]}
                                maximum={highestVote}
                            />);
                        })
                    }
                </div>
                <div>
                    <Button 
                        type='button'
                        value='Back to Question'
                        classes='btn btn--orange'
                        onClick={onBTQbtnClick}
                    />
                </div>
            </div>
        );
    }
}

Result.defaultProps = {
    onBTQbtnClick: () => {},
};

Result.propTypes = {
    question: PropTypes.string.isRequired,
    choices: PropTypes.object.isRequired,
    votes: PropTypes.object.isRequired,
    onBTQbtnClick: PropTypes.func,
};

export default Result;