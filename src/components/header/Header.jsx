import css from './Header.module.css'
import {Link} from "react-router-dom"

function Header(){
    

    return(
      <div>
          <header className={css.wrapper}>  
       <Link to="/"> <h1>LOGO</h1></Link>
        <nav>
          <Link to="/">О нас</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/sign">Войти</Link>
        </nav>
      </header>
      </div>
    )
}



export default Header