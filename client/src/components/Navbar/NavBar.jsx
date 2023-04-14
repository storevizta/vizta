import { useGetAdsQuery } from '../../features/slices/adsSlice';
import { useState } from 'react';

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
  const [ title, setTitle ] = useState('');
  const { data, error, isLoading, refetch } = useGetAdsQuery(title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = () => {
    refetch();
  };

  return (
    <Topnav>
      <ItemContainer>
        <LandingImgLogo src={Logo} alt="Logo VIZTA" />

        <SearchContainer>
          <form>
            <InputSearch
              type="text"
              placeholder="Search.."
              name="title"
              value={title}
              onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
            {isLoading && <div>Cargando...</div>}
            {error && <div>{error.message}</div>}
            {data && (
              <ul>
                {data.map((ad) => {
                  <li key={ad.id}>{ad.title}</li>;
                })}
              </ul>
            )}
          </form>
        </SearchContainer>

        <SignIn href="/account">Login</SignIn>
      </ItemContainer>
    </Topnav>
  );
};
