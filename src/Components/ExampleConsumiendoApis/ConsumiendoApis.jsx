import {useEffect, useState} from "react";
import React from 'react'


const ConsumiendoApis = () => {

    const [post, setPost] = useState([]);

    useEffect (() => {

        const getData= fetch("https://")
        getData
        .then(res) => res.json(());
        .then((res) => setPosts(res))
        .catch (err) => console.log("catch: ", err);

    }, [])
  return (
    <div>
      
    </div>
  )
}

export default ConsumiendoApis
