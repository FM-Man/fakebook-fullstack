import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
// import { Posts } from '../../data'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Feed() {
  const [post, setpost] = useState([]);
  useEffect(()=>{
    const res = axios.get("http://localhost:4000/post/").then((res)=>{
      setpost(res.data);
    });
  },[post])


  return (
    <div className='feed'>
    
        <div className='feedWrapper'>
          <Share/>
          {post.map(p=>(
            <Post key={p._id} post={p}/>
          ))}

        </div>
    </div>
  )
}