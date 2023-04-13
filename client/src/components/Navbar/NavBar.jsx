import {
  Topnav,
  ItemContainer,
  LandingImgLogo,
  SearchContainer,
  InputSearch,
  ButtonSearch,
  SignIn,
} from './Style-Navbar';
import Logo from '../../assets/LogoVizta.png';

export const Navbar = () => {
  return (
    <Topnav>
      <ItemContainer>
        <LandingImgLogo src={Logo} alt="Logo VIZTA" />

        <SearchContainer>
          <form action="/">
            <InputSearch type="text" placeholder="Search.." name="search" />
            <ButtonSearch type="submit">Go!</ButtonSearch>
          </form>
        </SearchContainer>

        <SignIn href="/account">Login</SignIn>
      </ItemContainer>
    </Topnav>
  );
};
