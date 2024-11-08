import React from 'react'

function Login() {
  return(
    <div>
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input type="email" />
            <label htmlFor="">Your Email</label>
          </div>
          <div>
            <input type="password" />
            <label htmlFor="">Password</label>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" />
              <label htmlFor="Remember Me"></label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button type="submit">Login</button>
          <div>
            <span>New Here? <a href='/Register'>Create an Account</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;