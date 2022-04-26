import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className='w-9 mx-auto'>{props.children}</div>
    </>
  );
};

export default Layout;
