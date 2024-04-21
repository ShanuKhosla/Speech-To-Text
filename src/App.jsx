import './App.css'
import { SignedIn, SignedOut} from "@clerk/clerk-react";
import Home from './components/Home'
import LandingPage from './components/LandingPage';
function App() {
  return(
    <div>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </div>
  )
}

export default App
