import styled from 'styled-components';
import Logo from '../images/LogoVizta.png';
import Spline from '@splinetool/react-spline'

export const Landing = () => {
  return (
    <LandingStyled>
      <LandingNav>
        <LandingImgLogo src={Logo} alt="Logo VIZTA" />
        <LandingContainerButton>
          <LandingAccountButton href="/account">Sing In</LandingAccountButton>
          <LandingAccountButton href="/account">Log In</LandingAccountButton>
        </LandingContainerButton>
      </LandingNav>
      <LandingFirstSection>
        <LandingTitle>
          The Best Website
          <br />
          to do your shopping!
        </LandingTitle>
        <LandingParagraph>
          This place was created just for you,
          <br />
          to check wich product is better and make your shopping safety
        </LandingParagraph>
        <LandingLaunchButton href="/home">Let's Shop</LandingLaunchButton>
      </LandingFirstSection>
      <LandingSecondSection>
        <LandingSectionLeft>
          <LandingQuestion>
            What will you
            <br />
            find here?
          </LandingQuestion>
          <LandingParagraphInfo>
            This Website has diferent filters to make your
            <br />
            life eassier an check all the products just by
            <br />
            some clicks, check the prices and
            <br />
            post your product here!
          </LandingParagraphInfo>
        </LandingSectionLeft>
        <LandingSectionRight>
          <Spline scene="https://prod.spline.design/6g5THKbtu0Jnc8jc/scene.splinecode" />    
        </LandingSectionRight>
        </LandingSecondSection>
    </LandingStyled>
  );
};

const LandingContainerButton = styled.div`
  width: 210px;
  justify-content: space-around;
  display: flex;
`;
const LandingImgLogo = styled.img`
  height: 25px;
`;
const LandingStyled = styled.div`
  background-color: #111111;
`;
const LandingNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px 20px 50px;
`;
const LandingAccountButton = styled.a`
  background-color: #222222;
  border: 1px solid #333333;
  border-radius: 10px;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Helvetica';
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;

  &: visited {
    color: #fffff;
  }
`;

const LandingFirstSection = styled.div`
  height: 725px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 160px;
`;
const LandingTitle = styled.h1`
  text-align: center;
  font-size: 64px;
  color: #ffffff;
  font-weight: 600px;
`;
const LandingParagraph = styled.p`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: 400px;
  margin-top: 20px;
`;
const LandingLaunchButton = styled.a`
  background-color: #ffffff;
  color: #111111;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  padding: 15px 20px;
  border: 1px solid #efefef;
  border-radius: 10px;
  width: 300px;
  margin-top: 30px;

  &:visited {
    color: #111111;
  }
`;

const LandingSecondSection = styled.div`
  height: 829px;
  /* width: 1300px */
  display: flex;
  flex-direction: row;
  /* background-color: #f34522; */
`;
const LandingSectionLeft = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-top: 230px;
  padding-left: 100px;
`;
const LandingQuestion = styled.h2`
  font-size: 88px;
  color: #ffffff;
  font-weight: 600px;
`;
const LandingParagraphInfo = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 400px;
  margin-top: 20px;
`;
const LandingSectionRight = styled.div`
  width: 800px;
  margin-left: 180px;
  padding-top: 50px;
`;