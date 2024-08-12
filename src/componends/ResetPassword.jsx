import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function ResetPassword() {
  let [otp,setOtp] = useState("")
  let [newPassword,setNewPassword] = useState("")
  const navigate = useNavigate();
  let handleSubmit = async(event)=>{
      event.preventDefault()
      try {
          let res = await axios.post("http://localhost:7000/password/reset",{
              otp,
              newPassword
          })
          if (res.status === 200) {
            toast.success(res.data.message);
            navigate('/')
          } else {
              toast.error('Unexpected response status');
              console.log(alert('Unexpected response status'))
    
          }
      } catch (error) {
          toast.error(error.response?.data?.message || 'An error occurred');
      }

  }
  return<>
     <div>
        <div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Enter your Email</h3>
              <form>
              <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Enter OTP" onChange={(e)=>setOtp(e.target.value)}/>
                  <label for="floatingotp">Enter Your OTP</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Enter OTP" onChange={(e)=>setNewPassword(e.target.value)}/>
                  <label for="floatingnewPasword">Enter Your New Password</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"onClick={handleSubmit}>submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  
  </>
}

export default ResetPassword
