import styles from "./Header.module.scss";
import logoUnc from "../../assets/logo_uncs.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logoUnc} src={logoUnc} alt="Logo da UNC" />
      <h1 className={styles.title}>
        Dashboard -&nbsp;<h2>dw_sakila_m1</h2>
      </h1>
      <h2 className={styles.hour}>
        {new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h2>
      <h2 className={styles.creditos}>🍂 Daniel Kondlatsch e João Kmiecik</h2>
    </div>
  );
}
