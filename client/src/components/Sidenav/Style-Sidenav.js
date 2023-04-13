import styled from 'styled-components';

export const Sidenav = styled.div`
  height: 100%;
  width: 175px;
  position: fixed;
  z-index: 0;
  top: 64px;
  left: 0;
  background-color: #333333;
  overflow-x: hidden;
  padding-top: 20px;
`;
export const ItemSidenav = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;
