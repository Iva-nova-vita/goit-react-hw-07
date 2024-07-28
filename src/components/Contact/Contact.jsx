import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ item}) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteContact(id));
  };
 
  return (
    <li className={css.item}>
      <div className={css.name}><FaUser/>{item.name}</div>
      <div className={css.phone}><FaPhone />{item.phone}</div>
      <button className={css.btnDelete} onClick={()=>handleClick(item.id)}>
        Delete
      </button>
    </li>
  );
}
