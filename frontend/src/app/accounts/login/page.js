'use client'
import { useActivePage } from "@/context/activePage";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from './components/modal';

import styles from './styles/login.module.css';
import Logo from '../assets/logo.png';
import GoogleLogo from '../assets/google.png';
import AppleLogo from '../assets/apple.png';

export default function Login({searchParams}) {

    const { setActivePage } = useActivePage();

    useEffect(() => {
        setActivePage('login');
    });

    const [username, setUsername] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}>
                <Image src={Logo} alt="Logo" width={300} height={300}/>
            </div>

            <div className={styles.right_container}>
                <div className={styles.right_content_container}>
                    <div className={styles.top_text_container}>
                        <span>Sign in to X</span>
                    </div>

                    <div className={styles.signin_options_container}>
                        <button className={styles.service_signin_button}>
                            <Image src={GoogleLogo} alt="Google Logo" width={30} height={30} className={styles.provider_logo}/>
                            Sign up with Google
                        </button>

                        <button className={styles.service_signin_button}>
                            <Image src={AppleLogo} alt="Apple Logo" width={30} height={30} className={styles.provider_logo}/>
                            Sign up with Apple
                        </button>

                        <div className={styles.or_container}>
                            <div className={styles.line}/>
                            <span>or</span>
                            <div className={styles.line}/>
                        </div>

                        <div className={styles.input_container}>
                            <input className={styles.id_input} onChange={handleUsernameChange} placeholder=" " autoComplete='off' autoCorrect='off' required/>
                            <label className={styles.id_label}>Email address or username</label>
                        </div>

                        <Link href='?modal=true'>
                            <button className={styles.next_button}>Next</button>
                        </Link>

                        <button className={styles.forgot_password_button}>Forgot Password?</button>

                        <div className={styles.signup_container}>
                            <span>Don't have an account? <a href="/accounts/signup">Sign up</a></span>
                        </div>
                    </div>
                </div>
            </div>
            {searchParams.modal && <Modal userName={username}/>}
        </div>
    );
};