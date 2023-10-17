'use client';
import styles from '../styles/modal.module.css';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Eye from '../../assets/eye.png';
import EyeHide from '../../assets/eye_hide.png';
import Logo from '../../assets/logo.png';
import Link from 'next/link';

export default function Modal({userName}) {
    const router = useRouter();

    useEffect(() => {
        document.title = 'Sign up for X';
    });

    const [page, setPage] = useState(1); // [1, 2, 3]
    const [passState, setPassState] = useState('password');

    return (
        <div className={styles.modal} onClick={router.back}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                
                <div className={styles.modal_top_container}>
                    <div className={styles.modal_close} onClick={router.back}>
                        <span>X</span>
                    </div>
                    <div className={styles.modal_logo_container}>
                        <Image src={Logo} alt='Logo' height={30} width={30}/>
                    </div>
                </div>
                
                {/*First Page*/}{page === 1 &&
                <div className={styles.form_container}>
                    <div className={styles.form_title}>
                        <h2>Enter you password</h2>
                    </div>

                    <div className={styles.input_containers}>
                        <input className={styles.name_input} value={userName} disabled autoComplete='off' autoCorrect='off' required/>
                        <label className={styles.name_label}>Username</label>

                        <input className={styles.pass_input} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder=' ' type={passState} required autoComplete='off' autoCorrect='off'/>
                        <label className={styles.pass_label}>Password<span>Must be 6 Character, with lower and upper case alphabets, a number and a symbol.</span></label>
                        {passState === 'text' ?
                        (
                            <Image src={EyeHide} onClick={() => setPassState('password')} alt='Toggle Password' width={33} height={33} className={styles.eye}/>
                        ) : (
                            <Image src={Eye} onClick={() => setPassState('text')} alt='Toggle Password' width={33} height={33} className={styles.eye}/>
                        )}
                    </div>

                    <div className={styles.submit_button_container}>
                        <button className={styles.submit_button} onClick={() => setPage(2)}>Log in</button>
                    </div>

                    <div className={styles.signup_container}>
                        <span>Don't have an account? <a href="/accounts/signup">Sign up</a></span>
                    </div>

                </div>}

                {/*Second Page*/}
                {page === 2 &&
                <div className={styles.form_container}>
                    <div className={styles.welcome_container}>
                        <span>Welcome To </span>
                        <Image src={Logo} width={200} height={200} alt='X Logo'/>
                    </div>
                    <div className={styles.get_started_container}>
                        <Link href='/' className={styles.get_started_link_container}>
                            <button className={styles.get_started_button}>Lets get started</button>
                        </Link>
                    </div>
                </div>}
            </div>
        </div>
    );
}