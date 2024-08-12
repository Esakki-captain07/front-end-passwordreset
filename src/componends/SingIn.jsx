import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/FadeLoader";
import toast from 'react-hot-toast';

function SingIn() {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://backend-resetpassword-finw.onrender.com/user", {
        firstName,
        lastName,
        email,
        password
      });
      if (res.status === 201) {
        toast.success(res.data.message);
      } else {
        toast.error('Unexpected response status');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid ps-md-0">
        {loading ? (
          <div className="loader-overlay">
            <ClipLoader
              color={"#36d7b7"}
              loading={loading}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Create User</h3>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingFirstName"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <label htmlFor="floatingFirstName">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingLastName"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <label htmlFor="floatingLastName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="floatingEmail">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="d-grid">
                          <button
                            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                            onClick={submitLogin}
                          >
                            Create
                          </button>
                          <div className="text-center">
                            <Link className="small" to="/signUp">Sign Up</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingIn;
