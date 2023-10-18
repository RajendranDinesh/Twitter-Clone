import styles from '../styles/searchbar.module.css';

import Image from 'next/image';

import Search from './assets/search.png';

function SearchBar() {
    return (<>
    
    <div className={styles.searchbar_container}>
        <div className={styles.searchbar}>
            <div className={styles.search_icon_container}>
                <Image src={Search} alt='Search' width={32} height={32}/>
            </div>

            <div className={styles.search_input_container}>
                <input className={styles.search_input} placeholder="Search" />
            </div>
        </div>
    </div>

    </>);
}

export default SearchBar;