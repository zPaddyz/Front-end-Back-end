import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const modalContext = createContext();

export const useCon =() => {
    return useContext(modalContext);
}

const ModalContext = ({children}) => {
    const [modal, setModal] = useState({isOpen: false, title: '', content: ''});


const value = {
    modal,
    setModal
};
    return <modalContext.Provider {...{ value}}>{children}</modalContext.Provider>;
};

export default ModalContext;