import Nav from './Nav';

const Header = () => (
  <div>
    <div className='bar'>
      <a>Sick Fits</a>
      <Nav />
    </div>
    <div className='sub-bar'>
      <a>Search</a>
    </div>
    <div>
      <div>Cart</div>
    </div>
  </div>
)

export default Header;
