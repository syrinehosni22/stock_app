import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";
const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Auth Demo
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user && <Nav.Link href="#">{user?.email}</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
export default Layout;