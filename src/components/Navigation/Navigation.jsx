import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
    <div className="logo">
      <img src="/images/logo.png" alt="do some coding logo" />
    </div>
        <ul>
                <li style={{fontWeight:'bold'}}>home</li>
                <li style={{fontWeight:'bold'}}>About</li>
                <li style={{fontWeight:'bold'}}>contact us</li>
        </ul>        
    </nav>
  )
}

export default Navigation
