import { FaSearch } from "react-icons/fa";

function Search() {
  const categoriesList = [
    {
      text: "All Categories",
    },
    {
      text: "Women's & Girls' Fashion",
    },
    {
      text: "Men's & Boys' Fashion",
    },
    {
      text: "Mother & Baby",
    },
  ];
  const staticData = [
    {
      id: 1,
      text: "free shipping over $199",
    },
    {
      id: 2,
      text: "30 days money back",
    },
    {
      id: 3,
      text: "100% secure payment",
    },
  ];
  return (
    <div className="container mx-auto bg-[#1ABA1A] px-5 rounded-xl py-5">
      <div className="flex lg:flex-nowrap flex-wrap lg:justify-between justify-center items-center gap-5">
        <div className="bg-white py-2 px-5 rounded-xl flex sm:flex-nowrap flex-wrap justify-center">
          <select className="mr-2 font-bold" name="" id="">
            {categoriesList.map((e, i) => (
              <option key={i} value={e.text}>
                {e.text}
              </option>
            ))}
          </select>
          <form className="flex">
            <input
              className="px-5 py-2"
              type="text"
              placeholder="Search anything..."
            />
            <button type="submit">
              <FaSearch />{" "}
            </button>
          </form>
        </div>
        {staticData.map((e) => (
          <p key={e.i} className="text-white uppercase">
            {e.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
