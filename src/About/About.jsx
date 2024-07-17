"use client"
import { React, useState } from 'react'
import styles from "./About.module.css"
import Button from '@mui/material/Button';
import TableComponent from '@/common/components/TableComponent/TableComponent';
import { Loader } from '@/common/components/Loader';

const About = () => {
  const [data, setData] = useState([]);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const handlePosts = async () => {

    try {
      setIsShowLoader(true)
      const res = await fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "get"
      })
      const result = await res.json();
      setData(result);

    }
    catch (ex) {
      console.error(ex)
    }
    finally {
      setIsShowLoader(false)
    }

  }
  return (
    <div>
      <h3 className='text-center my-3'>This is About Page</h3>
      <Button onClick={handlePosts} variant="outlined">Get Posts</Button>
      {data?.length > 0 && < TableComponent rows={data}  />}
      {isShowLoader && <Loader />}
    </div>
  )
}

export default About
