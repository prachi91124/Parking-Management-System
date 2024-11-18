import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';
import Wallet from './Components/Wallet';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';
import Login from './Components/Login';
import Booking from './Components/Booking';

function App() {
  return (
    <div >
     <Navbar />
     <Footer />
     {/* <Body /> */}
     {/* <Booking /> */}
     <Login />
     <ParkingSpace />
     <SignUp />
     {/* <Wallet /> */}
    </div>
  );
}

export default App;
