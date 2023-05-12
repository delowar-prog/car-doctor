import useTitle from "../../Hooks/PageTitle"
import About from "../About/About"
import Banner from "../Banner/Banner"
import Service from "../Service/Service"


const Home = () => {
  useTitle('Home')
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Service></Service>
    </div>
  )
}

export default Home