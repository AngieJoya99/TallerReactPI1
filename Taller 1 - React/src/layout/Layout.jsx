import "./Layout.css"
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";

const Layout = ({children }) => {
  return (
    <div className="layout">
      <Header/>
      <main className="layout-content"> {children} </main>
      <Footer/>
    </div>
  );
};

export default Layout;
