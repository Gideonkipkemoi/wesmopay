import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEye} from '@fortawesome/free-solid-svg-icons';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortextemail, setErrortextEmail] = useState('');
  const [errortextpwd, setErrortextPwd] = useState('');
  const [errortextUser, setErrortextUser] = useState('');
  const { userType } = useParams(); // Retrieve usertype from the URL

  const handleEyeIconClick = () => {
    const passwordInput = document.getElementById('password');
    const passwordFieldType = passwordInput.getAttribute('type');

    if (passwordFieldType === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  };
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
    <body className="forms">
      <section className="form_cont">
        <div className="form_sub_cont">
          <div className="header_log_flex">
            <h4>LOGIN</h4>
            <div className="status_bar">
              <div className="bar_cont"></div>
            </div>
          </div>
          <div className="form_content">
            <form action="" id="loginForm" autoComplete="off" onSubmit={handleSubmit}>
              <div className="form_sub_content">
                <p>E-mail</p>
                <div className="form_input_flex">
                  <input
                    type="text"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="icon_end">
                    <span className="tt"> | </span>
                      <FontAwesomeIcon icon={faUser}/>
                  </div>
                </div>
                <div className="error-text" style={{ color: 'red', fontStyle: 'italic' }}>{errortextemail}</div>
              </div>

              <div className="form_sub_content">
                <p>PASSWORD</p>
                <div className="form_input_flex">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="icon_end" onClick={handleEyeIconClick}>
                    <span className="tt"> | </span>
                    <FontAwesomeIcon icon={faEye}/>
                  </div>
                </div>
                <div className="error-text" style={{ color: 'red', fontStyle: 'italic' }}>{errortextpwd}</div>
              </div>
              <div className="remember_me">
                <input type="checkbox" />
                <p>REMEMBER ME</p>
              </div>
              <button type="submit">LOGIN</button>
            </form>
            <div className="errortextuser" style={{ color: 'red', fontStyle: 'italic' }}>{errortextUser}</div>
            <div className="end_links_flex">
              <Link to="/register/details/normal">Signup</Link> |
              <Link to="/Paxful/login/paxful">Login With Paxful</Link> |
              <Link to="/Noones/login/noones" style={{ color: '#90ee90' }}>Login With Noones</Link> |
            </div>
          </div>
        </div>
      </section>

      <script src="../js/all.js"></script>
      <script src="../js/jquery.js"></script>
    </body>
  );
};

export default LoginPage;
