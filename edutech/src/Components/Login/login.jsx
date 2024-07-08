import React from 'react';
import './login.css'; // Make sure to create and adjust this CSS file according to your needs
import { Link } from 'react-router-dom';
import img from "../../assets/toppers.jpg";

const Login = () => {
    // Generate options for day, month, and year
    const renderOptions = (start, end) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    return (
        <div className="login-page">
            <header className="header">
                <h1>Apply Online : Admission Center</h1>
                <div className="header-images">
                    <img src={img}  />
                </div>
            </header>
            
            <div className="main-section">
                <div className="enroll-section">
                    <h2>New Student: Enroll Here</h2>
                    <Link to="#" className="enroll-button">Apply Online and Pay Online</Link>
                </div>
                <div className="login-section">
                    <h2>Login: Already Filled Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="applicationNumber">Application Form Number</label>
                            <input type="text" id="applicationNumber" name="applicationNumber" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <div className="dob-inputs">
                                <select name="dob-day" required>
                                    <option value="">Day</option>
                                    {renderOptions(1, 31)}
                                </select>
                                <select name="dob-month" required>
                                    <option value="">Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select name="dob-year" required>
                                    <option value="">Year</option>
                                    {renderOptions(1984, 2024)}
                                </select>
                            </div>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>

            <div className="bottom-section">
                <div className="card-section">
                    <h3>Admit Card, Test Result & Test Reappearing</h3>
                    <ul>
                        <li><Link to="#">Admit Card</Link></li>
                        <li><Link to="#">Result</Link></li>
                        <li><Link to="#">Test Reappearing</Link></li>
                        <li><Link to="#">Test Registration (RESONite)</Link></li>
                    </ul>
                </div>
                <div className="pdf-section">
                    <h3>Download Admission Test Sample papers</h3>
                    <ul>
                        <li><Link to="#">PCCP ResoNET Leaflet</Link></li>
                        <li><Link to="#">Class V</Link></li>
                        <li><Link to="#">Class VI</Link></li>
                        <li><Link to="#">Class VII</Link></li>
                        <li><Link to="#">Class VIII</Link></li>
                        <li><Link to="#">Class IX</Link></li>
                        <li><Link to="#">Class X</Link></li>
                        <li><Link to="#">JEE (Main + Advanced)</Link></li>
                        <li><Link to="#">NEET</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;
