import { createGlobalStyle } from 'styled-components';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* outline: 1px solid red; */
    box-sizing: border-box;
}
`;

