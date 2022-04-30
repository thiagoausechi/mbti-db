import "./styles.css";

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Page from "../../components/layout/Page";
import Card from "../../components/containers/Card";
import Modal from "react-modal";
import RegisterModal from "../../components/containers/RegisterModal";

import { isDevEnv } from "../../lib/dev_env";
import { generateDummies } from "../../lib/dummies";
import LoadingCard from "../../components/containers/LoadingCard";

Modal.setAppElement("#root");

function App()
{
  const [personalities, setPersonalities] = useState([]);
  const [activePersona, setActivePersona] = useState({});

  useEffect(() =>
  {
    const DB_COLLECTION_REF = collection(db, "personalities");
    const getPersonalities = async () => 
    {
      const data = await getDocs(DB_COLLECTION_REF);
      if (data.docs.length > 0)
        setPersonalities(
          [
            ...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            ...generateDummies(false)
          ]);
    }
    getPersonalities();
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleCloseModal() { setIsOpen(false); }
  function handleOpenModal()
  {
    setActivePersona({});
    setIsOpen(true);
  }
  function handleOpenEditModal(persona)
  {
    setActivePersona(persona);
    setIsOpen(true);
  }

  return (
    <>
      <Page>
        {
          isDevEnv ?
            <div className="top">
              <button onClick={handleOpenModal}>+</button>
            </div> : null
        }
        <div className="personas">
          {personalities.length > 0 ? personalities.map((persona) =>
            <Card key={persona.id} persona={persona} handleOpenEditModal={handleOpenEditModal} />) :
            [...Array(50).keys()].map((n) => <LoadingCard key={n} />)
          }
        </div>
      </Page>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={modalStyle}>
        <RegisterModal state={activePersona} handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}

const modalStyle =
{
  content:
  {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    padding: "var(--h-size-6)"
  }
};

export default App;
