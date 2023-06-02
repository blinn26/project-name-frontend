import stubdata from './stubdata.json';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async (search) => {
  if (!apiKey) {
    return stubdata.articles;
  }

  const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&country=us&apiKey=${apiKey}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data.articles;
};
