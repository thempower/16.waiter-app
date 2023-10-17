import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <MDBFooter className="bg-primary text-center text-white mt-2 fixed-bottom">
      <MDBContainer className="p-3">
        <Link to="https://github.com/thempower/16.waiter-app/">GIT</Link>
      </MDBContainer>
    </MDBFooter>
  );
};

export default PageFooter;
