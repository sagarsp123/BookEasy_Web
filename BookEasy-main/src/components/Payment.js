import "../Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.css";

import BillingPreview from "./BillingPreview";

import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  const navigate = useNavigate();
  let handleRedirect = () => {
    navigate("/confirmation");
  };
  return (
    <div class="payments-container">
      <div class="flexbox">
        <form
          style={{
            flexBasis: "60%",
          }}
        >
          <fieldset class="poppins mb-5 border-2">
            <legend>Personal Information</legend>
            <div class="flexbox">
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="First Name"
                style={{ flexBasis: "49%" }}
              />
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Last Name"
                style={{ flexBasis: "49%" }}
              />
            </div>
            <div class="mt-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="mt-3">
              <input
                type="tel"
                class="form-control"
                id="mobileNumber"
                aria-describedby="emailHelp"
                placeholder="Mobile Number"
              />
            </div>
          </fieldset>
          <fieldset class="poppins mb-5 border-2">
            <legend>Billing Address</legend>
            <div class="mt-3 mb-3">
              <textarea
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Address"
              />
            </div>
            <div class="flexbox">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="City"
                style={{ flexBasis: "33%" }}
              />
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder="State"
                style={{ flexBasis: "33%" }}
              />
              <input
                type="text"
                class="form-control"
                id="Zip Code"
                placeholder="Zip Code"
                style={{ flexBasis: "33%" }}
              />
            </div>
          </fieldset>
        </form>
        <div style={{ flexBasis: "30%" }}>
          <BillingPreview
            searchParams={props.searchParams}
            hotel={props.hotel}
          />
        </div>
      </div>
      <div class="center-align">
        <button type="button" class="btn btn-success" onClick={handleRedirect}>
          Continue Booking
        </button>
      </div>
    </div>
  );
}
