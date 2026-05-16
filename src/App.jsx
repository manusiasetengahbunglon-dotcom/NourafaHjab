import Navbar from "./components/layout/Navbar"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div className="bg-[#f8f3ef] min-h-screen">

      <Navbar />

      <AppRoutes />

    </div>
  )
}

export default App