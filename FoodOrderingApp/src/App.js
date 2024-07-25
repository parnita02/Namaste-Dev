import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, useState } from "react";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import UserContext from "./utils/UserContext";
const AboutUs = lazy(() => import("./components/AboutUs"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "Parnita Dwivedi" };
    setUserName(data.name);
  }, []);
  console.log(userName);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="w-[100vw]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
