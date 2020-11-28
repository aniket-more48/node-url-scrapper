import ogs from 'open-graph-scraper';

const parseUrl = (url) => {
  return ogs({ url }).then((data) => {
    // const { error, result, response } = data;
    const { result } = data;
    return result;
  });
};

export default parseUrl;
