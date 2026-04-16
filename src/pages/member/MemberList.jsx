import { useEffect, useState } from 'react';


// fetch로 회원 목록 api 요청 후
// 회원의 이메일을 모두 화면에 출력하기
const MemberList = () => {

  const[MemberList, setMemberList] = useState([]);

  useEffect(() => {
    const getMemberList = async() => {
    const response = await fetch("http://localhost:10000/api/members")
    const memberList = await response.json()
    const {message, date} = memberList;
    console.log(data)
    setMemberList(date)
    }

    getMemberList()
  }, [])
  

  const memberNames = memberList.map(({memberName}, i) => (
      <li key={i}>{memberName}</li>
    ))


  return (
    <div>
        회원 목록
          <ul>
              {memberNames}
          </ul>
    </div>
  );
};

export default MemberList;