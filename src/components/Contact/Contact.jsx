import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { FaTrash } from "react-icons/fa";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <span>{name}: {number}</span>
      <button className={css.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
        <FaTrash />
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;