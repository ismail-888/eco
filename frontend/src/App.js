import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const location = useLocation();
  const noFooterPaths = ['/products','/bundles','/place-order'];
  const noHeaderPaths=[]
  //120px
  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <main className="min-h-[calc(100vh-120px)] ">
      <Outlet />
      </main>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
