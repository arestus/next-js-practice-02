import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import logo from "../public/logo.png";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} width={60} height={60} alt="webDev" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link className={pathname === path ? styles.active : null} key={id} href={path}>
            <div>{title}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
