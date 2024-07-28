import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSelectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact, i) => {
        return <Contact key={i} item={contact}></Contact>;
      })}
    </ul>
  );
}
