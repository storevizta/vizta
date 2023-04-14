import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

export const Account = () => {
  return (
    <AccountContainer>
      <AccountSectionLeft>
        <Spline scene="https://prod.spline.design/rZxmUuBgh9k1N0j9/scene.splinecode" />
      </AccountSectionLeft>
      <AccountSectionRight>
        <AccountLogContainer>
          <AccountMainTitle>Log in your account</AccountMainTitle>
          <AccountLabel>Dirección de correo electronico</AccountLabel>
          <AccountEmail placeholder="Email..."></AccountEmail>
          <AccountLabel>Password</AccountLabel>
          <AccountEmail placeholder="Password"></AccountEmail>
        </AccountLogContainer>
      </AccountSectionRight>
    </AccountContainer>
  );
};

const AccountContainer = styled.div`
  display: flex;
  background-color: #111111;
`;
const AccountSectionLeft = styled.div`
  width: 958px;
  height: 829px;
`;
const AccountSectionRight = styled.div`
  width: 750px;
`;
const AccountLogContainer = styled.div`
  background-color: #ffffff;
  height: 729px;
  display: flex;
  flex-direction: column;
  margin: 50px 80px;
  padding-left: 50px;
  padding-top: 50px;
  border-radius: 20px;
`;
const AccountMainTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 50px;
  color: #111111;
`;
const AccountEmail = styled.input`
  background-color: none;
  border: none;
  padding-left: 20px;
  margin-bottom: 20px;
  height: 40px;
  width: 300px;
  background-color: #eeeeee;
`;
const AccountLabel = styled.label`
  font-size: 18px;
  color: #111111;
  margin-bottom: 20px;
`;
