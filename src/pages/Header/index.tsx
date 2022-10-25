import styles from "./Header.module.scss";
import logoUnc from "../../assets/logo_uncs.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logoUnc} src={logoUnc} alt="Logo da UNC" />
      <h1 className={styles.title}>
        Dashboard -&nbsp;<h2>dw_sakila_m1</h2>
      </h1>
    </div>
  );
}
