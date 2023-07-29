import SiteNavBar from './components/SiteNavBar';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//VERY IMPORTANT TO IMPORT THIS FOR WEBPACK TO RECOGNIZE WE NEED THIS IMAGE
import us from './images/us.png';

function App() {
  return (
    <div>
      <SiteNavBar />
      <div className='Centered'>
        <h1>Welcome!</h1>
        <h2>We are the Alliance Academy for Innovation's Coding Club!</h2>
        <img src={us} alt='' className='image' />
        <h2>The club plans to do many things for the 2023-2024 school year including but not limited to: Hackathons, Coding Workshops, STEM Boot Camps, and connecting members to Internship Oppurtunities!</h2>
      </div>
    </div>
  );
}

export default App;
