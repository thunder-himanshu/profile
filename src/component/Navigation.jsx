import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="intro" 
            smooth={true} 
            duration={500}
            className="text-blue-200 hover:text-white cursor-pointer"
          >
            Intro
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            className="text-blue-200 hover:text-white cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="subscription" 
            smooth={true} 
            duration={500}
            className="text-blue-200 hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;