import React from 'react';
import './AssociateLogin.css'; // Ensure this file contains the necessary styles

const AssociateLogin = () => {
    return (
        <div className="associate-login-page">
            <header className="header">
                <h1>Associate Login</h1>
            </header>
            
            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
     </div>
    );
};

export default AssociateLogin;
