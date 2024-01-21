import React from 'react';
import { Link } from 'react-router-dom';
const DashboardPage = () => {
  return (
      <div style={{ background: '#fff' }}>
        <div className="gt_st_cont">
        <div className="gt_content">
            <h6>one account, for all the money in the world</h6>
            <div className="btn_flex">
                <Link to="/login/normal">login</Link>
                <Link to="/register/details/normal">register</Link>
            </div>
            <div className="btn_pax">
                <Link to="/Paxful/login/paxful">sign in with paxful</Link>
            </div>
            <div className="btn_pax" style={{ backgroundColor: 'green', marginTop: '10px' }}>
                <Link to="/Noones/login/noones">sign in with noones</Link>
            </div>
        </div>
    </div>

        <script src="../js/all.js"></script>
      </div>
  );
};

export default DashboardPage;
