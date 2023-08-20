import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    setData('hello')
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
};

export default DataFetcher;