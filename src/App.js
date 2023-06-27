import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const firebaseConfig = {
    projectId: 'mobile-cover-61ea6'
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
 
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
