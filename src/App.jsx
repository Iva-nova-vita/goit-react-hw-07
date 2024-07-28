import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchContacts} from './redux/contactsOps'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      {loading && <div>Loading ...</div>}
      {isError && <div>Something went wrong</div>}
      <ContactList></ContactList>
    </>
  );
}

export default App;
