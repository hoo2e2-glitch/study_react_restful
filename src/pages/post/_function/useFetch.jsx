import React, { useEffect, useState } from 'react';

// throw 던질꺼면 여기서 적용하기
const useFetch = async (url, options) => {

  const[data, setData] = useState({});

  useEffect( () => {

    const fetchDate = async () => {
      
      const response = await fetch(url, options)
      const datas = await response.json()
      setData(datas)

    }
    fetchDate()

  }, [url]) 

  return 

};

export default useFetch;