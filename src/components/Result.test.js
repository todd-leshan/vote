import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('Result', () => {
  it('should render question properly', () => {
    const question = 'question name';
    const choices = {
      1: 'option 1',
      2: 'option 2'
    };
    const votes = {
      1: 89,
      2: 67
    };
    const onBTQbtnClick = () => {};

    const wrapper = shallow(<Result 
      question={question}
      choices={choices}
      votes={votes}
      onBTQbtnClick={onBTQbtnClick}
    />);

    const questionName = wrapper.find('h2');
    expect(questionName.text()).toEqual(`Question: ${question}`);

    const ResultItems = wrapper.find('ResultItem');
    expect(ResultItems.length).toEqual(2);

    const bthButton = wrapper.find('Button');
    expect(bthButton.length).toEqual(1);
  });
});