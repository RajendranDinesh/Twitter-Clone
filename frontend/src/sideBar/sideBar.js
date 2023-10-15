'use client';
import styles from './styles/sidebar.module.css';

import { Logo, Home, Search, Bell, Message, List, Communities, User, SearchFilled, BellFilled, MessageFilled, ListFilled, CommunitiesFilled, UserFilled, HomeFilled } from './components/imports';
import MenuItem from './components/menuItem';
import ProfileOptions from './components/profileOptions';
import MoreOptions from './components/moreOptions';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useActivePage } from '../context/activePage';

function SideBar() {

    const { push } = useRouter();
    const { activePage, setActivePage } = useActivePage();

    const handleMenuItemClick = (pageName) => () => {
        setActivePage(pageName);
        push(pageName);
    };

    const [userName, setUserName] = useState('dineshpr');

    return (
        <div className={styles.top_container}>
            <div className={styles.logo_container}>
                <Image src={Logo} width={39} height={40} className={styles.logo}/>
            </div>

            <div className={styles.menu}>

                <MenuItem text={'Home'} imageSrc={activePage === '/' ? HomeFilled : Home} onClick={handleMenuItemClick('/')} active={activePage === '/'}/>
                <MenuItem text={'Explore'} imageSrc={activePage === '/explore' ? SearchFilled : Search} onClick={handleMenuItemClick('/explore')} active={activePage === '/explore'}/>
                <MenuItem text={'Notifications'} imageSrc={activePage === '/notifications' ? BellFilled : Bell} onClick={handleMenuItemClick('/notifications')} active={activePage === '/notifications'}/>
                <MenuItem text={'Messages'} imageSrc={activePage === '/messages' ? MessageFilled : Message} onClick={handleMenuItemClick('/messages')} active={activePage === '/messages'}/>
                <MenuItem text={'Lists'} imageSrc={activePage === `/${userName}/lists` ? ListFilled : List} onClick={handleMenuItemClick(`/${userName}/lists`)} active={activePage === `/${userName}/lists`}/>
                <MenuItem text={'Communities'} imageSrc={activePage === `/${userName}/communities` ? CommunitiesFilled : Communities} onClick={handleMenuItemClick(`/${userName}/communities`)} active={activePage === `/${userName}/communities`}/>
                <MenuItem text={'Profile'} imageSrc={activePage === `/${userName}/profile` ? UserFilled : User} onClick={handleMenuItemClick(`/${userName}/profile`)} active={activePage === `/${userName}/profile`}/>
                <MoreOptions />

                <div className={styles.post_container}>
                    <button className={styles.post_button}>
                        Post
                    </button>
                </div>

                <ProfileOptions />

            </div>
        </div>
    );
};

export default SideBar;