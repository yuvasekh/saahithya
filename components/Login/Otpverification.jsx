import React, { useState } from 'react';
import './OtpVerify.scss';
import { useLocation } from 'react-router-dom';
import {Otpvlidate} from '../services/api'
import { useNavigate } from 'react-router-dom';
const Otpverification = () => {
  const [otp, setOtp] = useState('');
  const [Error,setError]=useState(false)
  const location = useLocation();
  const myProp = location.state && location.state.myProp;
  console.log(myProp,"send======>>>>>>>....")
  const navigate=useNavigate()
  const handleOtpChange = (event, index) => {
    const newOtp = [...otp];

    newOtp[index] = event.target.value;
    setOtp(newOtp.join(''));
    if (event.target.value && index < 5) {
      // If the current input has a value and it's not the last input
      // Move the focus to the next input box
      const nextInput = event.target.nextSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleVerifyClick = async() => {
    if(otp)
    {
        await Otpvlidate({otp:otp,data:myProp}).then((res) => {
           navigate('/home')
          })
          .catch((err) => {
           
          });
        console.log(myProp.mobile,otp,"checkprops")
    }
    console.log('OTP:', otp);
  };

  return (
    <div className='mainotpdiv'>
      <br></br>
        <h2 style={{textAlign:'center'}}    >
        Enter the OTP
        </h2>
      <div>
<p style={{textAlign:'center'}}>A One Time Password has been sent to your phone number for verification purposes.</p>
</div>  

      <div className="otp-container">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={otp[index] || ''}
            onChange={(event) => handleOtpChange(event, index)}
            className="otp-input"
          />
        ))}
        {
            Error===true?<p>Invalid Otp</p>:<></>
        }
      </div>
      <button className="verify-button" onClick={handleVerifyClick}>
        Verify
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Otpverification;
