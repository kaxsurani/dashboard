import Box from "./components/Box"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import SideBox from "./components/SideBox"
import User from "./components/user"

const App = () => {
  return (
    <div>
      <SideBar/>
      <Navbar/>
      <Box/>
      <div className="flex">
      <User/>
      <SideBox/>
      </div>
    </div>
  )
}

export default App