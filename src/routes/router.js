import { createBrowserRouter } from "react-router-dom";
import MemberList from "../pages/member/MemberList";
import MemberInfo from "../pages/member/MemberInfo";

const router = createBrowserRouter([

  {
    path: "/members/member-list",
    element: <MembersList />
  },

  {
    path: "/members/member-info",
    element: <MembersInfo />
  },
])
export default router;