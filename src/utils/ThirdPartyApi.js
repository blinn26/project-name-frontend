const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async () => {
  console.log('API key is:', apiKey);

  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  console.log(data);
  return data.articles;
};
