import styles from '../../styles/pages/WhyCrappo.module.css' 
const WhyCrappo: React.FC = () => {
  return <div className={styles.container}>
      <section>
          <div className={styles.crappoInfo}>
              <div className={styles.crappoInfoItem}>
                <div>
                    <img src="./barchart.svg"></img>
                </div>
                <div className={styles.crappoInfoText}>
                    <h3>$30B</h3>
                    <label>Digital Currency Exchanged</label>
                </div>
              </div>
              <div className={styles.crappoInfoItem}>
                <div>
                    <img src="./person.svg"></img>
                </div>
                <div className={styles.crappoInfoText}>
                    <h3>10M+</h3>
                    <label>Trusted Wallets Investor</label>
                </div>
              </div>
              <div className={styles.crappoInfoItem}>
                <div>
                    <img src="./earth.svg"></img>
                </div>
                <div className={styles.crappoInfoText}>
                    <h3>195</h3>
                    <label>Countries Supported</label>
                </div>
              </div>
          </div>
          <div className={styles.whyCrappo}>
                    <img src="./whycrappoIlus.svg"></img>
                <div>
                    <h4>Why you should choose CRAPPO</h4>
                    <h6>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</h6>
                    <button>Learn More</button>
                </div>
          </div>
      </section>
  </div>;
}

export default WhyCrappo;