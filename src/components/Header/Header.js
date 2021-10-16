import React, { useState } from "react";
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
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
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "20px" }}>
              <NavLink href="/plants/add">Add Plant</NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "20px", marginRight: "20px" }}>
              <NavLink href="/plants">Plant List</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/logout">Logout</DropdownItem>
                <DropdownItem href="/">Login</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/edit-user">Edit Profile</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
