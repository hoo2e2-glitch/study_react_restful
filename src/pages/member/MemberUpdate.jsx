import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { data, useNavigate, useParams } from 'react-router-dom';

const MemberUpdate = () => {

  // 회원 수정
      const {id} = useParams();
      console.log(id)
      const navigate = useNavigate()

      const { 
          register, handleSubmit, getValues, 
                  formState: {isSubmitting, isSubmitted, errors}
          } = useForm({mode:"onChange"});
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
      
      useEffect(() => {
        fetch(`http://localhost:10000/api/members/${id}`)
        .then((res) => res.json())
        .then((res) => {
          const{data} = res;
          getValues("memberName", data.memberName);
          getValues("memberPassword", "");
        })
        .catch((err) => {
          alert(err.message);
        });

      }, [id, getValues]);

      const update = handleSubmit(async (memberInsertRequestDTO) => {
        console.log(memberInsertRequestDTO);

        // 1. 어디로 -> http://localhost:10000/api/members/join
        // 2. 어떤 메서드로 -> POST
        // 3. 데이터를 어디에? -> request body
        // 4. 데이터의 포멧(타입, 양식) ->  
        await fetch(`http://localhost:10000/api/members/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(memberInsertRequestDTO)
        })
        .then(async (res) => {
            if(!res.ok) {
                const error = await res.json()
                console.log(error)
                throw new Error(error?.message)
            }
            return res.json()
        })
        .then((res) => {
            // 정상 응답일 때
            const {message, data} = res
            console.log(message)
            console.log("수정성공",data)
            navigate("/members/member-list")
        })
        .catch((err) => {
            // error 처리!
            alert(err.message)
        })

    })
  
  return (
    <div>
      <form onSubmit={update}>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            {...register('memberPassword', {
              required: true,
              pattern:{
                value: passwordRegex
              }
            })} 
            />
            {errors?.memberPassword?.type === 'required' && (
              <p>비밀번호를 입력해주세요.</p>
            )}
            {errors?.memberPassword?.type === 'pattern' && (
              <p>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상</p>
            )}
        </div>
        <div>
          <p>이름</p>
          <input
            {...register('memberName', {
              required: true
            })} 
            />
            {errors?.memberName?.type === 'required' && (
              <p>이름을 입력해주세요.</p>
            )}
        </div>
        <button disabled={isSubmitting}>회원정보 수정</button>
      </form>
    </div>
  );
};

export default MemberUpdate;