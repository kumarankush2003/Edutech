import React from 'react';
import './Result.css'; // Ensure this file contains the necessary styles

const Result = () => {
    return (
        <div className="result-page">
            <header className="header">
                <h1>Result</h1>
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
                        <label htmlFor="name">
                            Name <span className="required">*</span>
                        </label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollNumber">
                            Roll No. <span className="required">*</span>
                        </label>
                        <input type="text" id="rollNumber" name="rollNumber" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Result;
