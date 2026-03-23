import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Card from "../Components/Masud/Card";
import ErrorPage from "../Pages/ErrorPage";
import Popular from "../Pages/Popular/Popular";
import Following from "../Pages/Following/Following";
import All from "../Pages/All/All";
import CreatePost from "../Gaurab/CreatePost";
import AdminSetting from "../Pages/AKM/Admin/AdminSetting.jsx/AdminSetting";
import SignModal from "../Components/Masud/SignModal";
import ApplayforMentor from "../Gaurab/ApplayforMentor";
import AboutSection from "../Pages/AKM/Admin/AboutSection/AboutSection";
import BlogCard from "../Components/Masud/BlogCard";
import ReadMore from "../Components/Masud/ReadMore";
import Card1 from "../Gaurab/Card/Card1";
import PrivateRoute from "../Providers/PrivateRoute";
import DetailsWithComments from "../Pages/PostDetails/DetailsWithComments";
import UserProfile from "../Pages/AKM/UserProfile/UserProfile";
import EditProfile from "../Pages/AKM/UserProfile/EditProfile";
import LeaderBoard from "../Components/Masud/LeaderBoard";
import ContactForm from "../Gaurab/ContactForm";
import AdminRoute from "../Providers/AdminRoute";
import Message from "../Pages/Masud/Message/Message";
import VideoRoom from "../Pages/Masud/Message/VideoRoom";
import ArchiveDetails from "../Components/Masud/ArchiveDetails";
import CodeEditor from "../Gaurab/DevStudio/CodeEditor";
import CodeWeb from "../Gaurab/codeWeb/CodeWeb";
import GetPremium from "../Pages/AKM/UserProfile/GetPremium";
import PaymentSucces from "../Pages/AKM/UserProfile/PaymentSucces";
import PaymentFailed from "../Pages/AKM/UserProfile/PaymentFailed";
import UserP from "../Pages/AKM/UserProfile/UserP";
import UserPosts from "../Pages/AKM/UserProfile/UserPosts";
import PaymentHistory from "../Pages/AKM/UserProfile/PaymentHistory";
import ManagUsers from "../Pages/AKM/Admin/Component/ManageUsers/ManagUsers";
import AllPosts from "../Pages/AKM/Admin/AllPosts";
import Followers from "../Pages/AKM/Admin/Component/Followers/Followers";
import PostBlog from "../Pages/Masud/PostBlog/PostBlog";
import PreviewBlog from "../Pages/Masud/PreviewBlog/PreviewBlog";
import FollowerProfile from "../Pages/FollowerProfile";
import ManageMentors from "../Pages/Masud/ManageMentors";
import AllPayments from "../Pages/AKM/Admin/AllPayments";
import Bot2 from "../Gaurab/Cahtbot/Bot2";
import SeeReports from "../Components/Masud/SeeReports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/popular",
        element: <Popular></Popular>,
      },
      {
        path: "/following",
        element: <Following></Following>,
      },
      {
        path: "/all",
        element: <All></All>,
      },

      {
        path: "/card",
        element: <Card></Card>,
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/code-editor",
        element: <CodeEditor></CodeEditor>,
      },
      {
        path: "/code-web",
        element: <CodeWeb></CodeWeb>,
      },
      // .......for testing......../
      {
        path: "/blogCard",
        element: <BlogCard></BlogCard>,
      },
      {
        path: "/readMore/:id",
        element: <ReadMore></ReadMore>,
      },

      {
        path: "/create-post/text-post",
        element: (
          <PrivateRoute>
            <CreatePost></CreatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-post/image-post",
        element: (
          <PrivateRoute>
            <CreatePost></CreatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-post/link-post",
        element: (
          <PrivateRoute>
            <CreatePost></CreatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-post/poll",
        element: (
          <PrivateRoute>
            <CreatePost></CreatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/signModal",
        element: <SignModal></SignModal>,
      },
      {
        path: "/card",
        element: <Card1></Card1>,
      },
      {
        path: "/applayformentor",
        element: (
          <PrivateRoute>
            <ApplayforMentor></ApplayforMentor>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/ai",
        element: <Bot2></Bot2>,
      },
      {
        path: "/post-details/:id",
        element: <DetailsWithComments></DetailsWithComments>,
      },
      {
        path: "/detailsWithComments/:id",
        element: <DetailsWithComments></DetailsWithComments>,
      },

      {
        path: "/edit-profile/:email",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/leaderBoard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/room/:roomId",
        element: <VideoRoom></VideoRoom>,
      },
      {
        path: "/get-premium",
        element: (
          <PrivateRoute>
            {" "}
            <GetPremium></GetPremium>
          </PrivateRoute>
        ),
      },
      {
        path: "/premium-success/:tran_id",
        element: <PaymentSucces> </PaymentSucces>,
      },
      {
        path: "/premium-failed/:tran_id",
        element: <PaymentFailed></PaymentFailed>,
      },

      // for admin

      {
        path: "/chat/:email",
        element: (
          <PrivateRoute>
            <Message></Message>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/users/:email/",
    element: <UserProfile></UserProfile>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/users/:email/profile",
        element: <UserP></UserP>,
      },
      {
        path: "/users/:email/followerProfile",
        element: <FollowerProfile></FollowerProfile>,
      },
      {
        path: "/users/:email/posts",
        element: <UserPosts></UserPosts>,
      },
      {
        path: "/users/:email/payment-history/:email",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/users/:email/archive/:testEmail",
        element: <ArchiveDetails></ArchiveDetails>,
      },
    ],
  },
  {
    path: "/admin/settings",
    element: <AdminSetting></AdminSetting>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/admin/settings/manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManagUsers></ManagUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "/admin/settings/allpayments",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllPayments></AllPayments>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // .......
      {
        path: "/admin/settings/manage-mentors",
        element: (
          <PrivateRoute>
            <ManageMentors></ManageMentors>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/settings/allposts",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllPosts></AllPosts>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/settings/followers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Followers></Followers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/settings/postsBlog",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <PostBlog></PostBlog>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/settings/allBlogs",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <PreviewBlog></PreviewBlog>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/settings/reports",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <SeeReports></SeeReports>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
