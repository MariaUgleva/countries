import React, { useState, useCallback } from "react";
import {history} from '../../index';

const Form: React.FC = (): JSX.Element => {
  // данные форьы
  const [formData, setFormData] = useState("");
  // ф-я слушает изменения в форме ввода и изменяет состояние если вводятся данные
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(event.target.value);
  }, []);
  // если нажимаем enter, отправляется запрос на подгрузку данных позапросу
  const handleEnter = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      history.push(`/${formData}`)
    }
  }, [formData]);
  return (
    <form action="" className="form">
      <input
        type="text"
        className="form__input"
        value={formData}
        placeholder="Search for a country..."
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </form>
  );
};
export default Form;
