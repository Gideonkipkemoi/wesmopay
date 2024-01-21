import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
const WelcomePage = () => {
  return (
      <div style={{ background: '#fff' }}>
        <div className="gt_st_cont">
          <div className="gt_content">
            <h6>160 countries. 40 currencies. one account</h6>
            <div className="btn">
              <Link to="/account">get started</Link>
            </div>
          </div>
        </div>

        <script src="../js/all.js"></script>
      </div>
  );
};

export default WelcomePage;
