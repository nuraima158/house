import css from "./Createnew.module.css";
import Title from "../../components/title/Title";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Createnew() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isSending,setSending]=useState('')

  const navigate=useNavigate()

  const submit = async(e) => {
    e.preventDefault();
   setSending(true)
    const data = {
      title: name,
      price: price,
      image: image,
      description: description,
    };
 
    try {
        const res = await fetch("https://64c4ec81c853c26efada4d1e.mockapi.io/House", {
          method: "POST",
          body: JSON.stringify(data),
          headers:{
            "Content-type":"application/json"
          }
        });
        if (res.status===201){
            alert('Вы успешно создали объявление')
            navigate('/Myaccount')
        }else {
            throw new Error
        }
    } catch (error) {
        alert('Произошла ошибка')
        setSending(false)
    }

  };
  return (
    <div className={css.wrapper}>
      <Title title="Создать объявление" />
      <form onSubmit={submit}>
        <h3>Название</h3>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h3>Картинка</h3>
        <input
          required
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <h3>Description</h3>
        <p>
          The description will be included on the item's detail page underneath
          its image.
        </p>
        <textarea
          name=""
          id=""
          cols="102"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <h3>Цена </h3>
        <p>This link will be hidden from public.</p>
        <input
          required
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default Createnew;
