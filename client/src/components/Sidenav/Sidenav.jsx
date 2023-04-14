import { Sidenav, ItemSidenav } from './Style-Sidenav';

export const SideNav = () => {
  return (
    <Sidenav>
      <br />
     
      <ItemSidenav href="/post">Recently posted</ItemSidenav>
      <ItemSidenav href="#">Price</ItemSidenav>
      <ItemSidenav href="#">Category</ItemSidenav>
      <ItemSidenav href="#">Discount %</ItemSidenav>
      <ItemSidenav href="#">A-Z</ItemSidenav>
    </Sidenav>
  );
};
