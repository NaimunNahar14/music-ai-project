
import './App.css'
import DarkModeToggle from './Components/darkmodetoggle'

function App() {


  return (

    <div>
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-800">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Dark Website</h1>
          <p className="text-lg">Enjoy the darkness!</p>
          <DarkModeToggle></DarkModeToggle>
        </div>
      </div>
    </div>


  )
}

export default App
