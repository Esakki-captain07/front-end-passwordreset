import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ClipLoader from "react-spinners/FadeLoader";

function ShinUp() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    setLoading(true)

    try {
      const res = await axios.post("https://backend-resetpassword-finw.onrender.com/user/login", {
        email,
        password
      });

      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error((error.response ? error.response.data.message : error.message));
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
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
                      <h3 className="login-heading mb-4">Welcome Back</h3>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="floatingInput">Email address</label>
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
                            Login
                          </button>
                          <div className="text-center">
                            <Link className="small" to="/signIn">Sign in</Link>
                          </div>
                          <div className="text-left">
                            <Link className="small" to='/forgotPassword'>Forgot Password</Link>
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
    </>
  );
}

export default ShinUp;
