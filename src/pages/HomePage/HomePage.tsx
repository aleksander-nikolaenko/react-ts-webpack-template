import { NavLink } from 'react-router-dom';

import { testRoutes } from 'routes/testRoutes';

const HomePage = () => {
  const testRoutesLink = testRoutes.map(item => (
    <li key={item.id}>
      <NavLink {...item}>{item.name}</NavLink>
    </li>
  ));
  return (
    <>
      <p
        style={{
          color: 'yellow',
          textAlign: 'center',
          fontSize: '24px',
        }}
      >
        Test Link Router
      </p>
      <ul
        style={{
          textAlign: 'center',
          fontSize: '20px',
          textTransform: 'uppercase',
          margin: '20px',
        }}
      >
        {testRoutesLink}
      </ul>
    </>
  );
};

export default HomePage;
