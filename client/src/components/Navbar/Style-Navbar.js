import styled from 'styled-components';

export const Topnav = styled.div`
  background-color: #222222;
  overflow: hidden;
  height: 64px;
`;
export const LandingImgLogo = styled.img`
  margin-top: 5px;
  margin-left: 12px;
  margin-right: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
export const ItemContainer = styled.div`
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

export const SignIn = styled.a`
  padding: 10px 16px;
  margin-right: 12px;
  background-color: #222222;
  border: 1px solid #333333;
  color: #818181;
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    color: #ffff;
  }
`;

export const SearchContainer = styled.div`
  align-items: center;
`;

export const InputSearch = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  border-radius: 6px 0 0 6px;
`;

export const ButtonSearch = styled.button`
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
