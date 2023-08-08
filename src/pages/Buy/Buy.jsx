import css from "./Buy.module.css";
import Title from "../../components/title/Title";
import {Link} from "react-router-dom"

function Buy() {
  return (
    <div className={css.wrapper}>
      <Link to="/">GO BACK</Link>
      <div className={css.wrapper2}>
        <div>
          <img src="./images/image 2.svg" alt="" width={480} height={300}/>
          <div>
            <img src="./images/image 3.svg" alt="" />
            <img src="./images/image 3.svg" alt="" />
            <img src="./images/image 3.svg" alt="" />
            <img src="./images/image 3.svg" alt="" />
            
          </div>
        </div>
        <div>
        <Title position="right" title="Продаю дом 5км в Нарыне"/> 
          <h2> Цена: 55000 $</h2>
          <p>
            Президентская кампания Бориса Ельцина на выборах 1996 года началась
            де-юре 15 февраля 1996 года, когда действовавший президент
            Российской Федерации объявил о своём решении баллотироваться на
            второй президентский срок. Несмотря на свой возраст (ему было 65 лет
            на момент избрания), серьёзные проблемы со здоровьем и низкий
            предвыборный рейтинг, Ельцин решил принять участие в Президентская
            кампания Бориса Ельцина на выборах 1996 года началась де-юре 15
            февраля 1996 года, когда действовавший президент Российской
            Федерации объявил о своём решении баллотироваться{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buy;
