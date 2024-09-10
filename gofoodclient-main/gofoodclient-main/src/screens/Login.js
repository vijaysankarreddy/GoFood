import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    let navigate=useNavigate();
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your fetch request here to send the credentials to your backend
        const response=await fetch('http://localhost:4000/api/loginuser',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
            });
            const json=await response.json();
            console.log(json);
            if(!json.success){
                alert("Enter Valid Credentials")
            }
            if(json.success){
              localStorage.setItem("authToken",json.authToken);
              console.log(localStorage.getItem("authToken"));  
              navigate("/");
            }

    };

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Login</button>
                    <Link to='/signup' className='m-3 btn btn-danger'>Create a new account</Link>
                </form>
            </div>
        </>
    )
}
