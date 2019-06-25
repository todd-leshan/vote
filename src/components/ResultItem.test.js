import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from './ResultItem';

describe('ResultItem', () => {
  it('should render result item with proper width and height', () => {
    const maximum = 100;
    const index = '1';
    const result = 78;
    const name = 'option 1';

    const wrapper = shallow(<ResultItem 
      maximum={maximum}
      index={index}
      result={result}
      name={name}
    />);

    const resultBar = wrapper.find('.result-item__chart-inner');
    expect(resultBar.prop('style').width).toEqual('78%');
    expect(resultBar.prop('style').height).toEqual('78%');
  });
});