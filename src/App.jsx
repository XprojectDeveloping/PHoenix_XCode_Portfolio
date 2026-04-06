import UseGlobalFetch from "./components/UseGlobalFetch/UseGlobalFetch";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./page/HomePage/HomePage";

const App = () => {
  const { data } = UseGlobalFetch();

  return (
    <>
      <Header headerData={data?.header} />
      <HomePage mainData={data?.main} />
      <Footer footerData={data?.footer} />
    </>
  );
};

export default App;
