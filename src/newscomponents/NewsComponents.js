import React, { useState, useEffect } from 'react';
import { fetchNews } from '../utils/ThirdPartyApi';

const NewsComponents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews('your_search_term');
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

export default NewsComponents;
