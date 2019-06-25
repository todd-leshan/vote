import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';

import Question from './components/Question';
import Result from './components/Result';
import Error from './components/Error';
import { getQuestion, getResult, postVote } from './utils/http';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      showResult: false,
      question: '',
      choices: {},
      results: {},
      showError: false,
      errorMsg: '',
    };

    this.axiosCancelSource = axios.CancelToken.source();
    this.cancelToken = this.axiosCancelSource.token;
  }

  componentDidMount() {
    getQuestion(this.cancelToken)
      .then(res => {
        this.setState({
          ...res,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
        this.handleError(err);
      });
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel('Component unmounted.');
  }

  submitVote = (selectedOption) => {
    this.handleLoadingStatus();
    postVote(selectedOption, this.cancelToken)
      .then(res => {
        return getResult(this.cancelToken);
      })
      .then((res) => {
        this.setState({
          isLoading: false,
          results: res,
          showResult: true,
        });
      })
      .catch(err => {
        this.handleError(err);
      });
  }

  handleLoadingStatus = () => {
    this.setState({
      isLoading: true
    });
  }

  handleBackToQuestionBtnClick = () => {
    this.setState({
      showResult: false,
    });
  }

  handleError = (err) => {
    this.setState({
      showError: true,
      errorMsg: err.message,
      isLoading: false,
    });
  }

  render() {
    const divClasses = classNames({
      'content-wrapper': true,
      'loading': this.state.isLoading
    });
    return (
      <div className={divClasses}>
        <div className="content-wrapper__inner">
          {
            this.state.showError &&
            <Error 
              msg={this.state.errorMsg}
            />
          }
          {
            this.state.showResult ?
              (<Result
                votes={this.state.results}
                choices={this.state.choices}
                question={this.state.question}
                onBTQbtnClick={this.handleBackToQuestionBtnClick}
              />) :
              (<Question
                question={this.state.question}
                choices={this.state.choices}
                onVote={this.submitVote}
              />)
          }
        </div>
      </div>
    );
  }
}

export default App;
