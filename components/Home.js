import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid classNmae="landing-grid">
          <Cell col={12} />
          <div className="banner-text">
            <h1>Web Developer</h1>

            <hr />
            <p>HTML/CSS | JavaScript | ReactJS | NodeJS</p>
            <div className="social-links">
              {/*LinkedIn */}
              <a
                href="www.linkedin.com/in/maanas-sameer-nandan-muddam-25313114a"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/*Facebook */}
              <a
                href=" https://www.facebook.com/profile.php?id=100012574080226"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
