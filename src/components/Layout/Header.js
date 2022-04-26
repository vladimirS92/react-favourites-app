import { NavLink } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { TabMenu } from 'primereact/tabmenu';

import classes from './Header.module.css';

const Header = () => {
  const items = [
    {
      label: 'All products',
      icon: 'pi pi-fw pi-list',
      template: () => {
        return (
          <NavLink activeClassName={classes.active} to='/products'>
            All products
          </NavLink>
        );
      },
    },
    {
      label: 'Favourites',
      icon: 'pi pi-fw pi-heart',
      template: () => {
        return (
          <NavLink activeClassName={classes.active} to='/favourites'>
            Favourites
          </NavLink>
        );
      },
    },
  ];

  const start = <TabMenu model={items} />;

  return <Menubar className='p-0 bg-white' start={start} />;
};

export default Header;
