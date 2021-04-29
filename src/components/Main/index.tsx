import styles from '../../styles/pages/Main.module.css'

const Main: React.FC = () => {
  return <div className={styles.container}>
      <section>
        <div>
            <div className={styles.promo}>
                <span>75% Save</span>
                <label>
                     For the Black Friday weekend
                </label>
            </div>
            <h3>
                Fastest & secure platform to invest in crypto
            </h3>
            <label>
                 Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
            </label>
            <button>
                   Try for FREE
            </button>
        </div>
      <div>
      <img src="./IlustrationMain.svg"/>

      </div>
      </section>
  </div>;
}

export default Main;