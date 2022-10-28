import React, { FC } from "react";
interface IModal {
  setVisible: (arg: boolean) => void;
  visible: boolean;
}

const Modal: FC<IModal> = ({ setVisible, visible }) => {
  
  const wrapperClassName = `modal ${visible ? "active" : ""}`;
  return (
    <div className={wrapperClassName} onClick={() => setVisible(false)}>
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        Поздравляем!!!
      </div>
    </div>
  );
};

export default Modal;
