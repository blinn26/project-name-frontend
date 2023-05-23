const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async () => {
  // Console log here for testing purposes
  console.log('API key is:', API_KEY);

  const response = await fetch(`${BASE_URL}?country=us&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};
