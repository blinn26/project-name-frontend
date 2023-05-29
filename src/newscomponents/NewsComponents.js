import React, { useState, useEffect } from 'react';
import stubData from '../utils/ThirdPartyApi';

const NewsComponents = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // Simulate API call with delay
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
