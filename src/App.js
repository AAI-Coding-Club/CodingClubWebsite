import SiteNavBar from './components/SiteNavBar';
import ContactUs from './components/ContactUs';
import logo from './logo.svg';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='Centered'>
      <SiteNavBar />
      <h1>Real Stuff Here</h1>
      <ContactUs />
    </div>
  );
}

export default App;
