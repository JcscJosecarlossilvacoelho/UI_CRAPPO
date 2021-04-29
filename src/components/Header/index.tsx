import styles from '../../styles/pages/Header.module.css'

const Header: React.FC = () => {
  return <div className={styles.container}>
      <img src="./Logo.svg" />
      <div>
          <ul>
              <li>
                  Products
              </li>
              <li>
                  Features
              </li>
              <li>About</li>
              <li>Contact</li>
              <li>Login</li>
              <li><button>Register</button></li>

          </ul>
      </div>
  </div>;
}

export default Header;