'use client';
import { useState } from 'react';
import Image from 'next/image';

import { MoreSecondary } from './imports';
import styles from '../styles/profileoptions.module.css';

export default function profileOptions() {

    const [isProfileOptionsVisible, setProfileOptionsVisible] = useState(false);

    const showProfileOptions = () => {
        setProfileOptionsVisible(!isProfileOptionsVisible);
    };

  return (
    <div>
        <div className={styles.menu_profile_container} onClick={showProfileOptions}>
            <Image width={40} height={40} className={styles.logo}/>
            <div className={styles.menu_item_profile}>
                <span>DINESH P R</span>
                <span>@dinesh__pr</span>
            </div>
            <Image width={32} height={32} src={MoreSecondary} className={styles.logo}/>
        </div>

        {isProfileOptionsVisible && (
            <div className={styles.profile_options}>
                <div className={styles.profile_options_container} onClick={() => false}>
                    <div className={styles.profile_options_item} onClick={() => false}>
                        <span>Add an existing account</span>
                    </div>
                    <div className={styles.profile_options_item} onClick={() => false}>
                        <span>Logout @dinesh__pr</span>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}