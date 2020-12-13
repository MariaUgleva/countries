import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Redux/Reducers/rootReducer";
import { changeModeAction } from "../../Redux/Actions/ModeActions";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // подгружаем из редакс данные о стиле (светлый/темный)
  const mode = useSelector((state: AppState) => state.mode);
  // ф-я отслеживает нажатия на элемент (если нажали, отправляем экшн на измененние стиля)
  const handleChangeMode = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      dispatch(changeModeAction());
    },
    [dispatch]
  );
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__title">Where in the world?</h1>
          <div className="header__mode" onClick={handleChangeMode}>
            {mode} mode
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
