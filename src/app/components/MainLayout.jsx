import Header from "../shared/Header";
import Search from "./Search";

function MainLayout({ children }) {
  return (
    <main>
      <Header />
      <Search />
      <div className="container mx-auto px-5">{children}</div>
    </main>
  );
}

export default MainLayout;
