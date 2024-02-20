import { APP_LOGO } from "../utils/constants";


const Header = () => {
  return (
    <div className="absolute ">
      <img className="w-60" alt="logo" src={APP_LOGO}/>
    </div>
  );
};

export default Header;
