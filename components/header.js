import Image from "next/image";
import Logo from "../assets/images/ethert.png";
import Search from "../assets/svg/search";
import { ConnectButton } from "web3uikit";
import { useContext } from "react";
import { CoinMarketContext } from "../context/context";
import Link from "next/link";
const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px] `,
  header: `bg-[#17171A] text-white pl-10 h-20 flex justify-between  gap-[650px] w-full p-[30px] `,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4  `,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const Header = () => {
  const { getQuote } = useContext(CoinMarketContext);
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image alt="" src={Logo} width={85} className="cursor-pointer" />
      </Link>
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <a href="https://ethert.space/" rel="noopener noreferrer">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Home</div>
            </div>
          </a>
          <Link href="/feed">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Chat</div>
              <div className={styles.badge} />
            </div>
          </Link>
          <Link href="/">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Cryptocurrencies</div>
            </div>
          </Link>
          {/* <div className={styles.navItem} onClick={getQuote}>
            <div className={styles.navLink}>Exchanges</div>
          </div> */}
        </nav>

        <div className="flex items-center m-0 p-0 ">
          <ConnectButton />
          {/* <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder="Search" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
