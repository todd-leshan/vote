import axios from 'axios';

import config from '../config';

const getQuestion = (cancelToken) => {
    return axios
        .get(config.api.question, { cancelToken })
        .then(res => {
            const dataObj = res.data || {};
            const { question, choices } = dataObj;

            return {
                question,
                choices,
            };
        })
        .catch(error => {
            console.error('error', error);
            throw (new Error(config.message.failToLoadQuestion));
        });
};

const getResult = (cancelToken) => {
    return axios
        .get(config.api.result, { cancelToken })
        .then(res => {
            const dataObj = res.data || {};
            return dataObj.results.votes;
        })
        .catch(error => {
            console.error('error', error);
            throw (new Error(config.message.failToLoadResult));
        });
};

const postVote = (vote, cancelToken) => {
    return axios
        .post(config.api.vote, { vote }, { cancelToken })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error('error', error);
            throw (new Error(config.message.failToVote));
        });
};

export { getQuestion, getResult, postVote };