import { useContext, useState, createContext } from 'react';
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [content, setContent] = useState('');

  const changeModalType = modal => {
    setIsOpenModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        changeModalType,
        isOpenModal,
        setIsOpenModal,
        modalTitle,
        setModalTitle,
        content,
        setContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
