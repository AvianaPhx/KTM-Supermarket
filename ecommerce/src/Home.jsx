import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000', { withCredentials: true })
      .then(res => {
        console.log('Response:', res);
        // Check if registration was successful
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch(err => {
        if (err.response) {
          // If the error has a response, we can access it safely
          console.error('Error Response:', err.response.data);
        } else {
          // If no response is available, it's likely a network error
          console.error('Error:', err.message);
        }
      });
  }, []);

  // Define the handleLogout function
  const handleLogout = () => {
    // Perform logout logic here (clear authentication data)
    localStorage.removeItem('token');  // or clear cookies if you're using them
    axios.post('http://localhost:3000/logout', {}, { withCredentials: true })
    .then(() => {  
      console.log('Logged out successfully');
      setAuth(false);
      setUsername('');
      navigate('/login'); // Redirect to login page
    })
      .catch(error => {
        console.error('Logout failed:', error.response ? error.response.data : error.message);
      });
  };

  return(
    <div >
      {
        auth ?
        <div>
          <h3> You are Logged In {username}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link to="/Login" >Login</Link>
        </div>
      }
    </div>
  )
}

export default Home