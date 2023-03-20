import { logo } from "../assets/images";
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <nav className="w-full flex items-center px-6 py-3.5 justify-between">
      <img src={logo} alt="mylogo" className="h-12 w-12 object-contain" />
      <FiMenu size={30} className='text-[#D5FF40] md:hidden' />
    </nav>
  );
};

export default Header;
