import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import App from './App';
import * as http from './utils/http';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div);
    }, 1);
  });
});