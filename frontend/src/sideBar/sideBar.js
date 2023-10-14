'use client';
import styles from './styles/sidebar.module.css';

import { Logo, Home, Search, Bell, Message, List, Communities, User, More } from './components/imports';
import MenuItem from './components/menuItem';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SideBar() {

    const { push } = useRouter();

    const handleRedirect = (path) => () => {
        push(path);
    }

    const [userName, setUserName] = useState('dineshpr');

    return (
        <div className={styles.top_container}>
            <div className={styles.logo_container}>
                <Image src={Logo} width={39} height={40} className={styles.logo}/>
            </div>

            <div className={styles.menu}>

                <MenuItem text={'Home'} imageSrc={Home} onClick={handleRedirect('/')}/>
                <MenuItem text={'Explore'} imageSrc={Search} onClick={handleRedirect('/explore')}/>
                <MenuItem text={'Notifications'} imageSrc={Bell} onClick={handleRedirect('/notifications')}/>
                <MenuItem text={'Messages'} imageSrc={Message} onClick={handleRedirect('/messages')}/>
                <MenuItem text={'Lists'} imageSrc={List} onClick={handleRedirect(`/${userName}/lists`)}/>
                <MenuItem text={'Communities'} imageSrc={Communities} onClick={handleRedirect(`/${userName}/communities`)}/>
                <MenuItem text={'Profile'} imageSrc={User} onClick={handleRedirect(`/${userName}/profile`)}/>
                <MenuItem text={'More'} imageSrc={More}/>

                <div className={styles.post_container}>
                    <button className={styles.post_button}>
                        Post
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SideBar;