import { Container, Navbar as MainHeader } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/svg/Logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <MainHeader.Brand as={NavLink} to={"/"}>
          <Logo width={"45px"} height={"45px"} />
          <h1 className="fs-5 mb-0">Students Manager</h1>
        </MainHeader.Brand>
        <MainHeader.Toggle aria-controls="basic-navbar-nav" />
        <MainHeader.Collapse id="basic-navbar-nav">
          <Navbar />
        </MainHeader.Collapse>
      </Container>
    </MainHeader>
  );
};

export default Header;
