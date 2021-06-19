import React from "react";
import { Divider } from "rsuite";
import { useHistory } from "react-router-dom";
import classes from "./ReceivedOfferPage.module.css";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/candidate/Sidebar";
import Button from "../components/common/Button";
export default () => {
  const TABS = ["received", "accepted", "rejected"];
  const history = useHistory();
  const handleChange = (i) => {
    history.push(`/users/offers/${TABS[i]}`);
  };
  return (
    <>
      <Navbar />
      <div className={classes.main}>
        <Sidebar on="Offer"/>
        <div
          style={{
            padding: "10px",
            width: "100%",
            minHeight: "calc(100vh-50px)",
          }}
        >
          <div style={{ display: "flex" }}>
            {["Received Offers", "Accepted Offers", "Rejected Offer"].map(
              (x, i) => (
                <div
                  className={classes[`tab-titles${i === 0 ? "-active" : ""}`]}
                  onClick={() => handleChange(i)}
                >
                  {x}
                </div>
              )
            )}
          </div>
          <Divider style={{ marginTop: 2, marginBottom: 10 }} />
          <div className={classes["list-container"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <div className={classes.card}>
                <div>
                  <img
                    src="/images/hamburger-menu.svg"
                    width="100"
                    height="100"
                    alt="img"
                    className={classes["card-photo"]}
                  />
                </div>
                <div className={classes["card-title"]}>
                  <div style={{ fontWeight: 600 }}>TITLE</div>
                  <div>sdklfjsdlkf</div>
                </div>
                <div>
                  <div className={classes["card-options"]}>
                    <div style={{ textAlign: "right", marginRight: "8px" }}>
                      Date Received
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Button type="primary">ACCEPT</Button>
                      <Button type="secondary">REJECT</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={classes["pagination-toolbox"]}></div>
        </div>
      </div>
    </>
  );
};
