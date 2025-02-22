import { Container, Navbar as MainHeader } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/svg/Logo.svg";

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
          <Logo />
        </MainHeader.Brand>
      </Container>
    </MainHeader>
  );
};

export default Header;
