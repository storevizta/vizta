import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <div className='h-screen bg-orange-500'>
      <nav className='display h-1/10 flex w-full px-5 py-1 rounden-full justify-between bg-zinc-900'>
        <h3 className='text-xl text-slate-50'>VIZTA</h3>
        <div className='flex w-36 justify-between'> 
          <Link to='/SignIn' className='text-xl text-slate-50'>
            Sign In
          </Link>
          <Link to='/SignUp' className='text-xl text-slate-50'>
            Sign Up
          </Link>
        </div>
      </nav>
      <section className='flex flex-col h-screen bg-zinc-900 justify-center items-center gap-y-8'>
        <h2 className='text-slate-50 text-8xl text-center font-bold'>The Best Website<br/>to do your shopping</h2>
        <p className='text-slate-50 text-2xl text-center font-medium'>In this Website you will find the best products<br/>to do your research for any category</p>
        <Link to='/home' className="bg-slate-50 text-3xl px-6 py-2 rounded-xl font-bold text-zinc-900">
          Let's Shop
        </Link>
      </section>
    </div>
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

  &:visited {
    color: #ffff;
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
