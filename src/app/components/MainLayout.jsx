import Header from "../shared/Header";
import Search from "./Search";

function MainLayout({ children }) {
  return (
    <main>
      <Header />
      <Search />
      {children}
    </main>
  );
}

export default MainLayout;
