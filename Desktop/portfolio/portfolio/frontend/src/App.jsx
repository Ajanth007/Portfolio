
import Navbar from "./components/navbar";
import Landingpage from "./pages/landingpage";
import Aboutme from "./pages/aboutme"

function App() {
  return (
    <>
    <div className="bg-[#f3f3f3]">

      <Navbar className="min-h-screen bg-[#f3f3f3]"/>
      <Landingpage />
      <Aboutme />


     
    </div>
    </>
  );
}

export default App;
