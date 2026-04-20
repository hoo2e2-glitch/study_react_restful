import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// 상세보기
const PostInfo = () => {

  const [post, setPost] = useState([]);

  const{id} = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    const getPostInfo = async () => {

      try {
          const response = await fetch(`http://localhost:10000/api/posts/${id}`);
            if(!response.ok) {
              const{message} = await response.json();
              alert(message);
            }
          const result = await response.json();
          const {message, data} = result;
          setPost(data);
        } catch (err) {
          console.log(err.message);
          }
    }

    getPostInfo();

  }, []);

  // 삭제
    const withdraw = async() => {
      await fetch(`http://localhost:10000/api/posts/${id}`, {
        method: "DELETE"
      })
      .then(async (res) => {
        if(!res.ok){
          const error = await res.json()
          throw new Error(error?.message)
        }
        
      })
      .then((res) => {
        console.log(res)
        navigate("/posts/post-list")
      })
      .catch(err => {
        console.log(err)
      })
    }

  return (
    <div>
      <p>id: {post?.id}</p>
      <p>타이틀: {post?.postTitle}</p>
      <p>내용: {post?.postContent}</p>
      <p>사용자아이디: {post?.memberId}</p>
      <p>조회수: {post?.postReadCount}</p>
      <Link to={`/posts/post-update/${id}`}>post수정</Link>
      <button onClick={withdraw}>삭제</button>
    </div>
  );
};

export default PostInfo;