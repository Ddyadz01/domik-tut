import { useSelector } from 'react-redux';

import AboutComponent from './AboutComponent';
import HomeComponent from './HomeComponent';
import HomeOptionsComponent from './HomeOptionsComponent';
import PopularHomeComponent from './PopularHomeComponent';

export const Home = () => {
  const { items } = useSelector((state) => state.items);
  return (
    <div className="home_page">
      <HomeComponent />
      <AboutComponent />
      <PopularHomeComponent items={items} />
      <HomeOptionsComponent />
    </div>
  );
};
