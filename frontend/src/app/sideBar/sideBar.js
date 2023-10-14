import styles from './styles/sidebar.module.css';

import Logo from './components/icons/X_logo.png';
import Home from './components/icons/home.png';
import Search from './components/icons/search.png';
import Bell from './components/icons/bell.png';
import Message from './components/icons/message.png';
import List from './components/icons/list.png';
import Communities from './components/icons/communities.png';
import User from './components/icons/user.png';
import More from './components/icons/more.png';

import Image from 'next/image';

function SideBar() {
    return (
        <div className={styles.top_container}>
            <div className={styles.logo_container}>
                <Image src={Logo} width={39} height={40} className={styles.logo}/>
            </div>

            <div className={styles.menu}>
                <div className={styles.menu_item}>
                    <Image src={Home} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Home
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={Search} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Explore
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={Bell} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Notifications
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={Message} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Messages
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={List} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Lists
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={Communities} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Communities
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={Logo} width={34} height={30} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Premium
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={User} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        Profile
                    </div>
                </div>
                <div className={styles.menu_item}>
                    <Image src={More} width={35} height={36} className={styles.logo}/>
                    <div className={styles.menu_item_text}>
                        More
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;