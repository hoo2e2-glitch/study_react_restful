import React, { useEffect, useState } from 'react';

const MemberInfo = () => {

    // 1번 회원 정보를 조회
    // 1번 회원 정보를 모두 화면에 출력하기
    const [member, setMember] = useState({});

    useEffect(() => {
        const getMemberInfo = async () => {
          // try/catch 2번째 방법
          try{
            const response = await fetch("http://localhost:10000/api/members/1")
            if(!response.ok) {
              const{message} = await response.json()
              alert(message)
               // 예외에 따른 핸들링 코드
            }
            const{message, data} = await response.json()
            setMember(data)
          } catch(err){
            console.log(err.message)
          }
        }

        getMemberInfo()
    }, [])


    return (
        <div>
          <p>아이디: {member?.id} </p>
          <p>이메일: {member?.memberEmail} </p>
          <p>이름: {member?.memberName} </p>
        </div>
    );
};

export default MemberInfo;