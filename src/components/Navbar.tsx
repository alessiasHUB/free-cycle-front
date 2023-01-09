import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <Link className="nav-text" to="/">
        Home
      </Link>
      <Link className="nav-text" to="/inputpage">
        Input
      </Link>
      <Link className="nav-text" to="/today">
        Today
      </Link>
    </nav>
  );
};

export default Navbar;
