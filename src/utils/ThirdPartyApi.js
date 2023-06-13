const apiKey = '2d8aaebdf4e54754bea929b51cca0254';

export const fetchNews = async (search) => {
  if (!apiKey) {
    throw new Error('API key is not provided');
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&country=us&apiKey=${apiKey}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
