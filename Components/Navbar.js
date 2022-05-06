import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/Countries">
        <a>Countries</a>
      </Link>
    </nav>
  );
};

export default Navbar;
