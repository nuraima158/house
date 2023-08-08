import css from './Card.module.css'
import {Link} from "react-router-dom"

function Card(props){
    const handleDelete=()=>{
      const res=window.confirm(
        'Вы действительно хотите удалить'+ props.title +'?'
      )
      if (!res) return res;

     
        fetch(
          `https://64c4ec81c853c26efada4d1e.mockapi.io/House/${props.id}`,
          {
          method: "DELETE",
          }
          )
          .then(()=>{
            window.location.reload();
          })
      
    }
    return(
        <div className={css.card}>
       <div className={css.imgWrapper}>
       <img className={css.img} src={props.image} /> 
       </div>
        <h3>{props.title}</h3>
        <h2>{props.price}</h2>
        {props.isAdmin ? <button onClick={handleDelete}>Удалить</button> : <button>Подробнее</button>}
      </div>
    ) 
}


export default Card