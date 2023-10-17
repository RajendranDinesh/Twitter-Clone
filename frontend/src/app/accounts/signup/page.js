'use client'
import { useActivePage } from "@/context/activePage";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../assets/logo.png';
import GoogleLogo from '../assets/google.png';
import AppleLogo from '../assets/apple.png';
import styles from './styles/signup.module.css';

import Modal from './components/modal';

export default function SignUp({searchParams}) {

    const { activePage, setActivePage } = useActivePage();

    useEffect(() => {
        setActivePage('signup');
    });

    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}>
                <Image src={Logo} alt="Logo" width={300} height={300}/>
            </div>

            <div className={styles.right_container}>

                <div className={styles.top_text_container}>
                    Happening now
                </div>

                <div className={styles.secondary_text_container}>
                    Join today.
                </div>

                <div className={styles.signup_options_container}>
                    <button className={styles.service_signup_button}>
                        <Image src={GoogleLogo} alt="Google Logo" width={30} height={30} className={styles.provider_logo}/>
                        Sign up with Google
                    </button>

                    <button className={styles.service_signup_button}>
                        <Image src={AppleLogo} alt="Apple Logo" width={30} height={30} className={styles.provider_logo}/>
                        Sign up with Apple
                    </button>

                    <div className={styles.or_container}>
                        <div className={styles.line} />
                        <span>or</span>
                        <div className={styles.line} />
                    </div>

                    <Link href='?modal=true' className={styles.create_account_btn_text}>
                        <button className={styles.create_account_btn}>Create Account</button>
                    </Link>

                    <span className={styles.terms_text}>
                        By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
                    </span>
                </div>

                <div className={styles.signin_container}>
                    <span>Already have an account?</span>
                    <Link href='/accounts/login'><button>Sign In</button></Link>
                </div>

            </div>
            {searchParams.modal && <Modal/>}
        </div>
    );
};