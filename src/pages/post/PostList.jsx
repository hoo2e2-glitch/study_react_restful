import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './_function/useFetch';

// 게시물 전체목록
const PostList = () => {

  const [postList, setPostList] = useState([]);
  const [data, message] = useFetch("http://localhost:10000/api/posts")

  useEffect(() => {
    if(data){
      setPostList(data)
    }

  }, [data])

  // useEffect(() => {
  //   // 비동기
  //   const getPostList = async () => {
  //     const response = await fetch("http://localhost:10000/api/posts")
  //     // if()
  //     const postList = await response.json();
  //     const {message, data} = postList;
  //     console.log(data);
  //     setPostList(data)
  //   }

  //   getPostList();
  // }, [])

    const postLists = postList?.map(({id, postTitle, memberName}, i) => (
        <li key={i} style={{
            border: "solid 1px black"
        }}>
            <Link to={`/posts/read/${id}`}>
                <span>{id}. {postTitle}</span>
            </Link>
            <p>{memberName}</p>
        </li>
    ))

    return (
        <div>
            <ul>{postLists}</ul>
        </div>
    );
};

export default PostList;