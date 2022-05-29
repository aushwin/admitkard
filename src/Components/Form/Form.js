import Styles from "./Form.module.css";
import Select from "react-select";
import { colourStyles, options } from "./multi-select-config";
const Form = () => {
  return (
    <form className={Styles.wrapper}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Mobile No" />
      <select name="course" id="course" placeholder="Course Level">
        <option disabled selected>
          Course Level
        </option>
        <option value="Ug">Ug</option>
        <option value="Pg">Pg</option>
      </select>
      <Select
        styles={colourStyles}
        placeholder="Country Preferences"
        closeMenuOnSelect={false}
        isMulti
        options={options}
      />
      <input type="date" placeholder="DOB" />
    </form>
  );
};

export default Form;
