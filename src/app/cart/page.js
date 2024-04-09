import BreadCrumb from "../components/BreadCrumb";
import Cart from "./Cart";

function cardPage() {
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
        text: "cart",
        style: "font-bold text-black cursor-default",
      },
    ];
    return (
      <>
        <BreadCrumb list={breadCrumbList} />
        <Cart />
      </>
    );
}

export default cardPage;