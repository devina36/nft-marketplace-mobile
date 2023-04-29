import { useEffect, useState } from 'react';
import axios from 'axios';

const rapidApiKey = 'f3c574cbc5msh6ef71b73037681ap189404jsn9e70277c88f4';

const useFecth = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://opensea15.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f3c574cbc5msh6ef71b73037681ap189404jsn9e70277c88f4',
      'X-RapidAPI-Host': 'opensea15.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFecth;
