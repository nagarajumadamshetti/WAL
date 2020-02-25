import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    onSubmit = () => {
        if (true) {
            return <Redirect to="/signUp/" />
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <form>
                    <input placeholder="email" type="email" />
                    <br>
                    </br>
                    <input placeholder="password" type="password" />
                    <button onClick={this.onSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;