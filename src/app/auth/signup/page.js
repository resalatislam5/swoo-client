import BreadCrumb from "@/app/components/BreadCrumb";
import SignUp from "./SignUp";

function page() {
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
        text: "Register",
        style: "font-bold text-black cursor-default",
      },
    ];
    return (
      <>
        <BreadCrumb list={breadCrumbList} />
        <SignUp />
      </>
    );
}

export default page;