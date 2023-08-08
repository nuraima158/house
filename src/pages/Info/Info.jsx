import css from "./Info.module.css";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import Preloader from "../../components/preloader/Preloader";

function Info() {
  const [houses, setHouses] = useState([]);
  const [isLoading,setLoading]=useState(true)

  const fetchData = async () => {
    fetch('https://64c4ec81c853c26efada4d1e.mockapi.io/House')
    .finally(()=>setLoading(false))
      .then((res) => res.json())
      .then((data) => setHouses(data));
  };

  useEffect(() => {
    fetchData()
  },[]);
  if (isLoading){
    return <Preloader/>
  }

  return (
    <main>
      <Title title="Последние объявления" />
      <div className={css.wrapper}>
       {houses.map((item)=>(
        <Card title2="Подробнее"  key={item.id} {...item} isAdmin={false}/>
       ))}
      </div>
      <Title title="О нас" />
      <div className={css.wrapper2}>
        <div>
          <img src="/images/image 2.svg" width={480} height={300} />
        </div>
        <div>
          <Title position="right" title="Кто мы" />
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

      <div>
        <h1>Footer</h1>
      </div>
    </main>
  );
}

export default Info;