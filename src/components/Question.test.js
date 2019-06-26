import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('Question', () => {
  it('should render question properly', () => {
    const question = 'question name';
    const choices = {
      1: 'option 1',
      2: 'option 2'
    };
    const onVote = () => {};
    const onViewResult = () => {};

    const wrapper = shallow(<Question 
      question={question}
      choices={choices}
      onVote={onVote}
      onViewResult={onViewResult}
    />);

    const questionLegend = wrapper.find('legend');
    expect(questionLegend.text()).toEqual(`Question: ${question}`);

    const questionOptions = wrapper.find('QuestionOption');
    expect(questionOptions.length).toEqual(2);

    const voteButton = wrapper.find('Button').filterWhere(node => node.prop('value') === 'vote');
    expect(voteButton.prop('disabled')).toBeTruthy();
  });

  it('should select option 1 and submit', () => {
    const question = 'question name';
    const choices = {
      1: 'option 1',
      2: 'option 2'
    };
    const onVote = jest.fn();
    const onViewResult = jest.fn();

    const wrapper = shallow(<Question 
      question={question}
      choices={choices}
      onVote={onVote}
      onViewResult={onViewResult}
    />);

    const option1 = wrapper.find('QuestionOption#option-1');
    expect(option1.length).toEqual(1);

    option1.dive().find('input').simulate('change', { target: { value: choices[1]}});

    wrapper.update();

    const button = wrapper.find('Button').filterWhere(node => node.prop('value') === 'vote');

    expect(button.prop('disabled')).toBeFalsy();

    wrapper.simulate('submit', { preventDefault: () => {}});

    expect(onVote).toHaveBeenCalledTimes(1);
    expect(onVote).toHaveBeenCalledWith(choices[1]);
  });
});