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
                        <label htmlFor="session">Session</label>
                        <input type="text" id="session" name="session" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollNumber">Roll No.</label>
                        <input type="text" id="rollNumber" name="rollNumber" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Result;
