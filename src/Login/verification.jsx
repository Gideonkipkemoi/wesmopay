import React from 'react';
import '../styles.css';
const VerifyPage = () => {
  return (
    <div style={{margin: "5px"}}>
    <div className="content_container">
      <div className="content_first_Cont_veification">
        <div className="form_cont1">
          <div className="nav2">
            <div className="headnav22">
              <h1>Verify your email!</h1>
            </div>
            <div className="confirm_text">
            <p>enter the code sent to your email in the spaces provided below to verify your account.<br />
            </p>
          </div>
          <div className="veificain_input">
            <input type="text"/>
            <div className="code-input">
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
            <input type="text" className="code-box" maxlength="1" pattern="\d" required/>
          </div>
          <div className="back_login">
            <form id="myForm">
              <input type="text" className="code-boxx" id="code" required/>
              <button className="btn" type="button" onclick="sendForm()">resend code</button>
            </form>
            <div className="error_text"></div>
          </div>
        </div>
      </div>

    </div>

  </div>
  </div>

        <script src="../js/all.js"></script>
      </div>
  );
};

export default VerifyPage;
