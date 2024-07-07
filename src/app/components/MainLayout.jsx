import Header from "../shared/Header";
import Search from "./Search";

function MainLayout({ children }) {
  return (
    <main>
      <div className="px-5">
        <Header />
        <Search />
      {children}
      </div>
    </main>
  );
}

export default MainLayout;
