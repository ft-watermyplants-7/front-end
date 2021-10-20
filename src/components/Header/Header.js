import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.userState);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            style={{ objectFit: "contain", height: "70px", width: "100%" }}
            src="https://i.gyazo.com/640a33828ffd3f6ee12bc223bd479cd8.png"
            alt="plant logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ marginLeft: "20px" }}>
              <NavLink tag={Link} to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "20px" }}>
              <NavLink tag={Link} to="/plants/add">
                Add Plant
              </NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "20px", marginRight: "20px" }}>
              <NavLink tag={Link} to="/plants">
                Plant List
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/logout">
                  Logout
                </DropdownItem>
                <DropdownItem tag={Link} to="/login">
                  Login
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to={`/users/edit/${user.id}`}>
                  Edit Profile
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
