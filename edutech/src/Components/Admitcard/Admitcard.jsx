import React from 'react';
import './Admitcard.css'; // Ensure this file contains the necessary styles

const AdmitCard = () => {
    return (
        <div className="admit-card-page">
            <header className="header">
                <h1>Admit Card</h1>
            </header>
            
            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label htmlFor="session">
                            Session <span className="required">*</span>
                        </label>
                        <select id="session" name="session" required>
                            <option value="2024-25">2024-25</option>
                            <option value="2023-24">2023-24</option>
                            <option value="2022-23">2022-23</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="applicationNumber">
                            Application No. <span className="required">*</span>
                        </label>
                        <input type="text" id="applicationNumber" name="applicationNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">
                            Contact No. <span className="required">*</span>
                        </label>
                        <input type="text" id="contactNumber" name="contactNumber" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="info-section">
                <p>
                    <strong>
                        Online Test registered students will attempt online test on 
                        <a href="https://onlinereso.in"> https://onlinereso.in</a>. 
                        Login Credential will be activated one day before Online Test.
                    </strong>
                </p>
            </div>
        </div>
    );
};

export default AdmitCard;
