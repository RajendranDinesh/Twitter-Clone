'use client';
import styles from '../styles/modal.module.css';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Eye from '../../assets/eye.png';
import EyeHide from '../../assets/eye_hide.png';
import Logo from '../../assets/logo.png';
import Link from 'next/link';

export default function Modal() {
    const router = useRouter();

    useEffect(() => {
        document.title = 'Sign up for X';
    });

    const [page, setPage] = useState(1); // [1, 2, 3]
    const [passState, setPassState] = useState('password');

    const [otp, setOtp] = useState(['', '', '', '']);
    const inpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    const handleInput = (e, index) => {
        if (index < 3) {
            inpRefs[index + 1].current.focus();
          }
          const updatedOtp = [...otp];
          updatedOtp[index] = e.target.value;
          setOtp(updatedOtp);
    }
    

    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        console.log(enteredOtp);

        setPage(3);
    }

    return (
        <div className={styles.modal} onClick={router.back}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                
                <div className={styles.modal_top_container}>
                    <div className={styles.modal_close} onClick={router.back}>
                        <span>X</span>
                    </div>
                    <div className={styles.modal_steps_container}>
                        Step {page} of 3
                    </div>
                </div>
                
                {/*First Page*/}{page === 1 &&
                <div className={styles.form_container}>
                    <div className={styles.form_title}>
                        <h2>Create your account</h2>
                    </div>

                    <div className={styles.input_containers}>
                        <input className={styles.name_input} autoComplete='off' autoCorrect='off' required/>
                        <label className={styles.name_label}>Username</label>

                        <input className={styles.email_input} type='email' placeholder=' ' required autoComplete='off' autoCorrect='off'/>
                        <label className={styles.email_label}>Email</label>

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
                        <button className={styles.submit_button} onClick={() => setPage(2)}>Send OTP</button>
                    </div>

                </div>}

                {/*Second Page*/}
                {page === 2 &&
                    <div className={styles.form_container}>
                        <div className={styles.form_title}>
                            <h2>Let's Get You Verified</h2>
                        </div>

                        <div className={styles.input_containers}>
                            <span>We have sent an OTP to dinesh.al22@bitsathy.ac.in, verify yourself by providing the OTP</span>

                            <div className={styles.otp_input_container}>
                            {otp.map((value, index) => (
                                <input
                                key={index}
                                ref={inpRefs[index]}
                                onInput={(e) => handleInput(e, index)}
                                className={styles.otp_input}
                                autoComplete='off'
                                autoCorrect='off'
                                required
                                />
                            ))}
                            </div>

                            <div className={styles.verify_button_container}>
                                <button onClick={handleSubmit} className={styles.verify_button}>Verify</button>
                            </div>
                        </div>
                    </div>}

                    {/*Third Page*/}
                    {page === 3 &&
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