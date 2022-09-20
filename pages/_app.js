import NavBar from "../components/NavBar";
// Application Component
// NavBar와 같은 공통 컴포넌트를 각각 따로 선언해 줄 필요 없이 한 곳에서 관리
const App = ({Component, pageProps}) => {

  return (
    <>
      <NavBar/>
      <Component {...pageProps}/>
    </>
  )
};

export default App;