import React, { useEffect } from 'react'

const Search = () => {

    const fetchJobPost = async () => {
        const jsonResponse = await fetch("http://localhost:9090/jobs");
        const response = await jsonResponse.json();
        console.log('fetchJobPost', response);
    }

    useEffect(() => {
        fetchJobPost();
    }, []);

  return (
    <div>Search</div>
  )
}

export default Search