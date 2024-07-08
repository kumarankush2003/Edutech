import React from 'react';
import './Testreappear.css'; // Ensure this file contains the necessary styles

const TestReappearing = () => {
    return (
        <div className="test-reappearing-page">
            <header className="header">
                <h1>Test Reappearing</h1>
            </header>
            
            <div className="instructions-section">
                <p> 1) Once a student purchased an application form; he/she could re-appear in entrance exam at One time only along with re-appearing charges.</p>
                <p> 2) He/she can appear on scheduled test dates mentioned in Leaflet/Reso-GUIDE on next upcoming test date only.</p>
            </div>
            
            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label htmlFor="rollNumber">Roll No.</label>
                        <input type="text" id="rollNumber" name="rollNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile No.</label>
                        <input type="text" id="mobileNumber" name="mobileNumber" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default TestReappearing;
