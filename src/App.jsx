import './App.css'
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Service from "../src/pages/Service"
import Works from "../src/pages/Works"
import Contact from "../src/pages/Contact"
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/about'element={<About/>}></Route>
    <Route path='/service'element={<Service/>}></Route>
    <Route path='/Works'element={<Works/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
  </Route>
))




function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
