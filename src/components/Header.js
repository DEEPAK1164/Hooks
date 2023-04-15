import Title from "./Title";
const Header = () => {
    return (
      //inline style in jsx
      <div className="header" style={{ backgroundColor: "red" }}>
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;