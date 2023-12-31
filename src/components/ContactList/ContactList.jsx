import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import {
  Item,
  List,
  DeleteButton,
  ContactWrapper,
  StyledLink,
} from './ContactList.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import { Link } from 'react-router-dom';



export const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useContacts();

  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <StyledLink to={`${contact.id}`}>
              <ContactWrapper>
                <IconContext.Provider value={{ size: '30px' }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <span>{contact.name}</span>
             </ContactWrapper>
              </StyledLink>
            <Link to={'/contacts'}>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </DeleteButton>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
