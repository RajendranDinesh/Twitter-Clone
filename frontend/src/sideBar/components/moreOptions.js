'use client';

import { More, BookMark, Connect, Settings } from "./imports";
import MenuItem from "./menuItem";
import styles from "../styles/moreOptions.module.css";

import { useState } from "react";
import Image from "next/image";

export default function MoreOptions() {

    const [isMoreOptionsVisible, setMoreOptionsVisible] = useState(false);

    const showMoreOptions = () => {
        setMoreOptionsVisible(!isMoreOptionsVisible);
    }

    return (
    <>
        <MenuItem text={'More'} imageSrc={More} onClick={showMoreOptions}/>
        {isMoreOptionsVisible && (
            <div className={styles.more_options}>
                <div className={styles.more_options_container} onClick={() => false}>
                    <div className={styles.more_options_item} onClick={() => false}>
                        <Image src={BookMark} width={35} height={35} className={styles.logo}/>
                        <span>Bookmarks</span>
                    </div>
                    <div className={styles.more_options_item} onClick={() => false}>
                        <Image src={Connect} width={35} height={35} className={styles.logo}/>
                        <span>Connect</span>
                    </div>
                    <div className={styles.more_options_item} onClick={() => false}>
                        <Image src={Settings} width={35} height={35} className={styles.logo}/>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        )}
    </>
    );
}