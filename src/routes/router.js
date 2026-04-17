import { createBrowserRouter } from "react-router-dom";
import MemberList from "../pages/member/MemberList";
import MemberInfo from "../pages/member/MemberInfo";
import MemberLogin from "../pages/member/MemberLogin";
import MemberJoin from "../pages/member/MemberJoin";
import MemberUpdate from "../pages/member/MemberUpdate";

const router = createBrowserRouter([

  {
    path: "/members/member-list",
    element: <MemberList />
  },

  {
    path: "/members/member-info/:id",
    element: <MemberInfo />
  },
  {
    path: "/members/member-join",
    element: <MemberJoin />
  },
  {
    path: "/members/member-login",
    element: <MemberLogin />
  },
  {
    path: "/members/member-update/:id",
    element: <MemberUpdate />
  },


])
export default router;