import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Xerite from "./pages/Xerite"
import ScrollToTop from "./components/ScrollToTop"
import Haqqimizda from "./pages/Haqqimizda"
import Blog from "./pages/Blog"
import Profile from "./pages/Profile"



function App() {
  

  return (
    < >
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="xerite" element={<Xerite/>}/>
            <Route path="haqqımızda" element={<Haqqimizda/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="mənimhesabım" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
