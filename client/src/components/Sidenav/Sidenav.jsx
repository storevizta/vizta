import { Sidenav, ItemSidenav } from './Style';

export const SideNav = () => {
  return (
    <Sidenav>
      <br />
      <ItemSidenav href="#">Categories</ItemSidenav>
      <br />
      <br />
      <br />

      <ItemSidenav href="/post">Recently posted</ItemSidenav>
      <ItemSidenav href="#">Price</ItemSidenav>
      <ItemSidenav href="#">Clients</ItemSidenav>
    </Sidenav>
  );
};
