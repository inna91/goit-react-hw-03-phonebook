import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Сontact search
    <input
      className={s.input}
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
