import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../components/Login";
import Register from "../components/Register";
import ContractUs from "../pages/ContractUs/ContractUs";
import MeetingRoom from "../pages/MeetingRoom/MeetingRoom";
import ProtectedRoute from "../layout/ProtectedRoute";
import Dashboard from "../layout/Dashboard";
import CreateRoom from "../pages/Dashboard/Admin/CreateRoom";
import GetRooms from "../pages/Dashboard/Admin/GetRooms";
import GetUsers from "../pages/Dashboard/Admin/GetUsers";
import MyBookings from "../pages/Dashboard/User/MyBookings";
import GetSlots from "../pages/Dashboard/Admin/GetSlots";
import CreateSlot from "../pages/Dashboard/Admin/CreateSlot";
import RoomDetails from "../pages/MeetingRoom/RoomDetails";
import BookingSummary from "../pages/Dashboard/User/BookingSummary";
import AllBookings from "../pages/Dashboard/Admin/AllBookings";
import ErrorPage from "../components/shared/ErrorPage";
import PaymentSuccess from "../payment/PaymentSuccess";
import PaymentCancel from "../payment/PaymentCancel";
import UserRoute from "../layout/UserRoute";
import AdminRoute from "../layout/AdminRoute";

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
        path: "/meeting-rooms",
        element: <MeetingRoom></MeetingRoom>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contract-us",
        element: <ContractUs></ContractUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute>
            <UserRoute>
              <MyBookings />
            </UserRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "/room-details/:id",
        element: (
          <ProtectedRoute>
            <RoomDetails></RoomDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: `/booking-summary`,
        element: (
          <ProtectedRoute>
            <UserRoute>
              <BookingSummary></BookingSummary>
            </UserRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <ProtectedRoute>
            <UserRoute>
              <PaymentSuccess></PaymentSuccess>
            </UserRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "/cancel",
        element: (
          <ProtectedRoute>
            <UserRoute>
              <PaymentCancel></PaymentCancel>
            </UserRoute>
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard/admin/create-room",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <CreateRoom></CreateRoom>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/admin/all-rooms",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <GetRooms></GetRooms>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/admin/all-users",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <GetUsers></GetUsers>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/admin/all-slots",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <GetSlots></GetSlots>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/admin/create-slot",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <CreateSlot></CreateSlot>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/admin/all-bookings",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AllBookings></AllBookings>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
