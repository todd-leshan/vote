const apiBase = 'https://demo9843467.mockable.io';

const config = {
  api: {
      question: `${apiBase}/question`,
      vote: `${apiBase}/vote`,
      result: `${apiBase}/result`,
  },
  message: {
    failToLoadQuestion: 'Sorry, we are unable to load quesiton. Please try again later.',
    failToVote: 'Sorry, we are unable to submit your vote. Please try again later.',
    failToLoadResult: 'Sorry, we are unable to load vote result. Please try again later.',
  }
};

export default config;
