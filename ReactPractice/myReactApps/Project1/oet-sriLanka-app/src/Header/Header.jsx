import logo from '../assets/logo.png'
import styles from './Header.module.css'

function Header(){
    return(
        <>
        <div className={styles.header}>
            <div className={styles.logosection}>
                <img src={logo}></img>
                <h1>OET SRI LANKA</h1>
            </div>
            <div>
                <nav>
                    <ul className={styles.navbar}>
                        <li>Contact</li>
                        <li>Nursing</li>
                        <li>Medicine</li>
                        <li>About</li>
                        <li>Home</li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
}

export default Header