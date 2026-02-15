import CardContent from "./CardContent"
import Contact from "./Contact"
import Testimonials from "./CustomerTestimonial"
import Home from "./Home"
import Navbar from "./Navbar"
import Price from "../pages/Price"

const BuisneesPage = () => {
  return (
  <>
   <Navbar/>
      <Home/>
      <CardContent/>
      <Price/>
      <Testimonials/>
      <Contact/>
  </>
  
  )
}

export default BuisneesPage
