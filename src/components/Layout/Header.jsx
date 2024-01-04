import styled from "styled-components";

import { Link } from "react-router-dom";

const color = "purple";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 14px;
  padding: 2em;
  background-color: ${color};
  color: white;
  position: sticky;
  top: 0;
`;

const StyledNav = styled.ul`
  display: flex;
  gap: 2em;
  list-style: none;
`;

const StyledNavItem = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const nav = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
];

export default function Header() {
  return (
    <StyledWrapper>
      <h1>Header (function component)</h1>

      <div>
        <StyledNav>
          {nav.map((item) => (
            <StyledNavItem to={item.href} key={item.id}>
              {item.title}
            </StyledNavItem>
          ))}
        </StyledNav>
      </div>
    </StyledWrapper>
  );
}
