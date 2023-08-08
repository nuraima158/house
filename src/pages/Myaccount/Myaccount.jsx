import css from "./Myaccount.module.css";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from '../components/preloader/Preloader'

function Myaccount() {
  const [houses, setHouses] = useState([]);
  const [isLoading,setLoading]=useState(true)


  const fetchData = async () => {
    fetch("https://64c4ec81c853c26efada4d1e.mockapi.io/House")
      .finally(() => setLoading(false))
      .then((res) => res.json())
      .then((data) => setHouses(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading){
    return <Preloader/>
  }
  return (
    <div>
      <div className={css.wrapper2}>
        <Title title="Мои объявления" />
        <div>
          <Link to="/createnew">Добавить</Link>
        </div>
      </div>
      {/* <div className={css.wrapper}>
        <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />
         <Card title2="Удалить" />

      </div> */}

      <div className={css.wrapper}>
        {houses.map((item) => (
          <Card title2="Подробнее" key={item.id} {...item} isAdmin={true} />
        ))}
      </div>
    </div>
  );
}

export default Myaccount;
