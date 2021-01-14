import logo from './CraLanding/logo.svg';
import './CraLanding/CraLanding.css';

function CraLanding() {
  return (
      <div className="cra-landing">
        <header className="cra-landing-header">
          <img src={logo} className="cra-landing-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="cra-landing-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default CraLanding;