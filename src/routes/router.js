import { createBrowserRouter } from "react-router-dom";
import MemberList from "../pages/member/MemberList";
import MemberInfo from "../pages/member/MemberInfo";
import MemberLogin from "../pages/member/MemberLogin";
import MemberJoin from "../pages/member/MemberJoin";
import MemberUpdate from "../pages/member/MemberUpdate";
import PostInfo from "../pages/post/PostInfo";
import PostList from "../pages/post/PostList";
import PostWrite from "../pages/post/PostWrite";
import PostUpdate from "../pages/post/PostUpdate";

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
  {
    path: "/posts/post-list",
    element: <PostList />
  },
  {
    path: "/posts/post-info/:id",
    element: <PostInfo />
  },
  {
    path: "/posts/post-write",
    element: <PostWrite />
  },
  {
    path: "/posts/post-update/:id",
    element: <PostUpdate />
  },


])
export default router;