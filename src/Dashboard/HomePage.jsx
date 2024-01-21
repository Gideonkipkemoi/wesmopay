import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
const HomePage = () => {
    const [credentials, setCredentials] = useState([]);

    useEffect(() => {
        // Fetch credentials from the server
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/getCredentials'); // Add a new endpoint to fetch credentials
                const data = await response.json();
                if (data.success) {
                    setCredentials(data.users);
                } else {
                    console.error('Failed to fetch credentials:', data.error);
                }
            } catch (error) {
                console.error('Error during fetch:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div style={{ background: '#fff' }}>
                <div className="gt_st_cont">
                    <div className="gt_content">
                        <div>
                            <h1>Login Details</h1>
                            {credentials.length > 0 ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {credentials.map((user, index) => (
                                            <tr key={index}>
                                                <td>xxxxx</td>
                                                <td>xxxxx</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No credentials found.</p>
                            )}
                            <div className="btn">
                                <Link to="/account">lOG OUT</Link>
                            </div>
                        </div>
                        <script src="../js/all.js"></script>
                        <script src="../js/jquery.js"></script>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
