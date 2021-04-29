import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import WhyCrappo from '../components/WhyCrappo'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header></Header>
        <Main></Main>
        <WhyCrappo></WhyCrappo>
    </div>
  )
}
