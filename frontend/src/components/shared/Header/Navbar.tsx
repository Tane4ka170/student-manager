import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  return (
    <Nav style={{ marginLeft: "auto" }}>
      <Nav.Link as={NavLink} to={"/"}>
        Home
      </Nav.Link>
      {!accessToken ? (
        <>
          <Nav.Link as={NavLink} to={"/login"}>
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/register"}>
            Register
          </Nav.Link>
        </>
      ) : (
        <NavDropdown
          title={`Welcome ${user?.firstName} ${user?.lastName}`}
        ></NavDropdown>
      )}
    </Nav>
  );
};

export default Navbar;
