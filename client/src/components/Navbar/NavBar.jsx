import Logo from '../../assets/LogoVizta.png';
import styled from 'styled-components';

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

{
  /* <nav>
      <div>Logos</div>
      <div>Searchbar</div>
      <div>Post</div>
      <div>Sign In</div>
    </nav> */
}

const Topnav = styled.div`
  background-color: #222222;
  overflow: hidden;
  height: 64px;
`;
const LandingImgLogo = styled.img`
  margin-top: 5px;
  margin-left: 12px;
  margin-right: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
const ItemContainer = styled.div`
  color: #ffffff;
  font-family: 'Helvetica';
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 50px 20px 10px;
  align-items: baseline;

  text-decoration: none;
`;

const SignIn = styled.a`
  padding: 10px 16px;
  margin-right: 12px;
  background-color: #222222;
  border: 1px solid #333333;
  border-radius: 10px;
  &:visited {
    color: #ffff;
  }
`;

const SearchContainer = styled.div`
  align-items: center;
`;

const InputSearch = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  border-radius: 6px 0 0 6px;
`;

const ButtonSearch = styled.button`
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
`;
