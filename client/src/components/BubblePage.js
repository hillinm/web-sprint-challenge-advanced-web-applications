import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { useParams } from 'react-router-dom'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const params = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log(res.data)
        setColorList(res.data)
      })
      .catch(err => console.log(err.response))
  }, [params.id])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
