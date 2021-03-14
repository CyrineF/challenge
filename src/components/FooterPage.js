import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";
import "../assets/css/Footer.css"
const FooterPage = () => {
    return (
        <MDBFooter className="foot">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://ensi-junior-entreprise.com/"> ensi-junior-entreprise.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;