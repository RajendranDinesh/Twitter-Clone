import styles from '../styles/sidebar.module.css';
import Image from 'next/image';

function MenuItem({ text, imageSrc, onClick }) {
    return (
        <div className={styles.menu_item} onClick={onClick}>
            <Image src={imageSrc} width={35} height={36} className={styles.logo}/>
            <div className={styles.menu_item_text}>
                {text}
            </div>
        </div>
    );
}

export default MenuItem;