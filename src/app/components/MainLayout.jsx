import Header from "../shared/Header";

function MainLayout({ children }) {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-5">{children}</div>
    </main>
  );
}

export default MainLayout;
