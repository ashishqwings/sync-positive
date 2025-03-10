import './App.css';
import DoctorCard from './Components/DoctorCard';
import VideoComponent from './VideoComponent';
import syncLogo from './Images/sync-logo.png';
import doc1 from './Images/doc-11.png';
import doc2 from './Images/doc-21.png';
import miniDoc1 from './Images/mini-doc-1.jpg';
import miniDoc2 from './Images/mini-doc-2.jpg';
import miniDoc3 from './Images/mini-doc-3.jpg';

function App() {
  return (
    <div>
      <div id="page-1">
          <navbar>
            <img src={syncLogo} alt="sync-logo" id="sync-logo"/>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L26 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M2 10L26 10" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M8 18L26 18" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </svg>

          </navbar>

          <div id="page-1-left">
            <div id="page-1-left-top">
              <p id="text-top">Come find your <span>best version</span> of yourself at</p>
              <p id="text-mid">SyNC <span>Positive.</span></p>
              <p id="text-bottom">A holistic approach to your health.</p>
            </div>

            <div id="page-1-left-mid">
              <button id="book-cta">Book an Appointment</button>
              <a href="#">10k+ Happy Clients</a>
              <div className='mini-docs'>
                <img className="mini-doc" src={miniDoc1} alt="mini doc 1 icon" />
                <img className="mini-doc" src={miniDoc2} alt="mini doc 2 icon" />
                <img className="mini-doc" src={miniDoc3} alt="mini doc 3 icon" />
              </div>


            </div>

            <div className='doctors'>
              <DoctorCard 
                name={"Vinod Kumar"}
                specialization={"Psychiatrist & Head - SyNC"}
                imageLink={doc1}/>
              <DoctorCard 
                name="Anupama Bajaj"
                specialization={"Psychologist "}
                imageLink={doc2}/>
            </div>
          </div>

          <div id="page-1-right">
              <VideoComponent />
              <p>We pioneer in providing services for optimizing your brain health like no one does. A well-rounded team of Psychiatrists and Psychologists, each carefully trained and handpicked to best cater to your needs.</p>
          </div>

      </div>
    </div>
  );
}

export default App;
