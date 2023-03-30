import styled from "styled-components";

import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
