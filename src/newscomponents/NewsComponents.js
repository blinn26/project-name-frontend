import React, { useState, useEffect } from 'react';
import stubData from '../utils/ThirdPartyApi';

const NewsComponents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(stubData);
    }, 1000);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default NewsComponents;
