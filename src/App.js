import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div id="topnav"><a href="#" id="nav-link">Sign In ?</a></div>
    <div>
      <ul>
        <li>
      <a href="/registration/registration.html">registration</a>
      <a href="/admin/admin-login.html">admin</a>
      <a href="/adminconsole/admin-console.html">adminconsole</a>
      <a href="/userdashboard/user-dashboard.html">userdashboard</a>
      <a href="/userdashboardairplane/user-dasboard-airplane.html">userdashboardplane</a>
      <a href="/userdashboardbus/user-dashboard-bus.html">userdashboardbus</a>
      <a href="/userdashboardcar/uuser-dasboard-car.html">userdashboardcar</a>
      <a href="/userdashboardhouse/user-dasboard-house.html">userdashboardhouse</a>
      <a href="/userdashboardtrain/user-dasboard-train.html">userdashboardtrain</a>
      </li>
      </ul>
    </div>

    <h3 id="">Landing Page</h3>

    <div>
      <div>
        <p><strong>Estmate your CO<sup>2</sup>Footprint</strong></p>
        <div className="topsection">
          <a href=""><i className="fa fa-heart topiconcolor" style={{fontSize: "24px"}}></i></a>
          <div className="topfeature">
            <p><strong>Feature title</strong></p>
            <p>Describe feature in a sentence</p>
          </div>
        </div>
        <div className="topsection">
          <a href=""><i className="fa fa-home topiconcolor" style={{fontSize: "24px"}}></i></a>
          <div className="topfeature">
            <p><strong>Feature title</strong></p>
            <p>Describe feature in a sentence</p>
          </div>
        </div>
      </div>
      <div><img src="#" alt=""/></div>
    </div>


    <div id="midnav">
      <p className="text"><strong>Let's Start !</strong></p>
      <p className="text"><strong>Register to Get Started</strong></p>
    
      <button type="button" id="register" style= {{cursor: "pointer"}}>Register</button>
   
    </div>

    <div id="footer">

    <div id="leftfooter">
      <a href="#" className="info"><strong>Our Why?</strong></a>
      <a href="#" className="info"><strong>Contact</strong></a>
      <a href="#" className="info"><strong>Pricing</strong></a>
    </div>

    <div id="rightfooter">
      <a href="#"><i className="fa fa-linkedin iconcolor" style={{fontSize: "24px"}}></i></a>
      <a href="#"><i className="fa fa-twitter iconcolor" style={{fontSize: "24px"}}></i></a>
      <a href="#"><i className="fa fa-facebook iconcolor" style={{fontSize: "24px"}}></i></a>
    </div>
    </div>
    </div>
  );
}

export default App;
