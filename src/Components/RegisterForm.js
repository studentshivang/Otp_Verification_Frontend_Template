import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const [isPhoneVerified, setPhoneVerified] = useState(false);
  const [isOtpRequested, setOtpRequested] = useState(false);
  const [Otp, setOtp] = useState(false);

  const sendOtp = () => {
    setOtpRequested(true);
  };
  const verifyOtp = () => {
    try {
      setPhoneVerified(true);
      toast("Phone number verified!");
    } catch (error) {
      console.log(error);
    }
  };
  const submitDetails = () => {
    try {
      if (isPhoneVerified === false) {
        toast.error("Verify phone number first");
      } else {
        toast("Your details Submitted!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
    <ToastContainer/>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Phone no.</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
          />
        </div>

        {isOtpRequested === true ? (
          <>
            <div className="form-group">
              <label for="exampleInputPassword1">
                Enter otp sent to phone number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Otp"
                value={Otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => verifyOtp()}
              >
                Verify Otp
              </button>
            </div>
          </>
        ) : (
          <div className="mt-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => sendOtp()}
            >
              Send Otp
            </button>
          </div>
        )}

        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => submitDetails()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
