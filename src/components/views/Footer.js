import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="bg-primary text-center text-white mt-2 fixed-bottom">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <a className="text-white" href="https://mdbootstrap.com/">
              <MDBIcon fab icon="github" />
            </a>
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
