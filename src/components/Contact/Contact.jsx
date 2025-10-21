import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete, id}) => {
  return (
    <div className={s.box}>
      <ul>
        <li>
          <FaUser className={s.icon} />
          {name}
        </li>
        <li>
          <FaPhoneAlt className={s.icon} />
          {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)} className={s.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact