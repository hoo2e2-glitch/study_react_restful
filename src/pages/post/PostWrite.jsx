import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {

  const navigate = useNavigate();

  const { 
    register, handleSubmit, getValues, 
      formState: {isSubmitting, isSubmitted, errors}
  } = useForm({mode:"onChange"});
  
  const write = handleSubmit(async (memberInsertRequestDTO) => {
    await fetch("http://localhost:10000/api/posts/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(memberInsertRequestDTO)
    })
    .then(async (res) => {
      if(!res.ok){
        const error = await res.json();
        console.log(error);
        throw new Error(error?.message);
      }
      return res.json();
    })
    .then((res) => {
      const {message, data} = res;
      console.log(message);
      console.log("글",data);
    })
    .catch((err) => {
      alert(err.message);
    });
  });


  
  
  return (
    <div>
      <form onSubmit={write}>
        <div>
          <p>title</p>
          <input
            {...register("postTitle", {
              required: true
            })} 
          />
          {errors && errors?.postTitle?.type === "required" && (
            <p>제목을 입력하세요.</p>
          )}
        </div>
        <div>
          <p>content</p>
          <input
            {...register("postContent", {
              required: true
            })} 
          />
          {errors && errors?.postContent?.type === "required" && (
            <p>내용을 입력하세요.</p>
          )}
        </div>
        <button disabled={isSubmitting}>작성</button>
      </form>
    </div>
  );
};

export default PostWrite;