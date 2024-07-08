import React from 'react';
import './TestRegister.css'; // Ensure this file contains your custom styles

const TestRegister = () => {
    return (
        <div className="test-register-page">
            <header className="header">
                <h1>Test Registration (RESONite)</h1>
            </header>

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

export default TestRegister;
