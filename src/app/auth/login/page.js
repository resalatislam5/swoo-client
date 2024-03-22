import BreadCrumb from "@/app/components/BreadCrumb";
import Login from "./Login";

export const metadata = {
  title: "Login || SWOO",
  description: "SWOO",
};

function loginPage() {
  const breadCrumbList = [
    {
      to: "/",
      text: "Home / ",
    },
    {
      to: "/",
      text: "pages / ",
    },
    {
      to: "#",
      text: "login",
      style: "font-bold text-black cursor-default",
    },
  ];
  return (
    <>
      <BreadCrumb list={breadCrumbList} />
      <Login />
    </>
  );
}

export default loginPage;
