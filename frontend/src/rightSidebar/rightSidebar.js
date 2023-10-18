import styles from './styles/rightsidebar.module.css';

import SearchBar from './components/searchBar';

function RightSidebar() {
    return (
        <div className={styles.main_container}>
            <SearchBar />
        </div>
    );
}

export default RightSidebar;