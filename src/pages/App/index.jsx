import "./styles.css";

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Page from "../../components/layout/Page";
import PersonasList from "../../components/containers/PersonasList";
import RegisterModal from "../../components/containers/RegisterModal";
import Modal from "react-modal";

import { isDevEnv } from "../../lib/dev_env";
import { generateDummies } from "../../lib/dummies";

Modal.setAppElement("#root");

function App()
{
  const [activePersona, setActivePersona] = useState({});

  const [personalities, setPersonalities] = useState([]);
  useEffect(() =>
  {
    const DB_COLLECTION_REF = collection(db, "personalities");
    const getPersonalities = async () => 
    {
      const data = await getDocs(DB_COLLECTION_REF);
      if (data.docs.length > 0)
      {
        const randomized =
          [
            ...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            ...generateDummies(false)
          ]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        setPersonalities(randomized);
      }
    }
    getPersonalities();
  }, []);

  const [searchText, setSearchText] = useState("");
  function handleSearchText(e)
  {
    setSearchText(e.target.value);
  };

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
        <div className="top">
          <input
            type="text"
            id="search"
            className="textbox"
            value={searchText}
            onChange={handleSearchText}
            style={{
              width: '100%',
              marginLeft: '10%',
              marginRight: '10%'
            }}
          />
          {
            isDevEnv ?
              <button onClick={handleOpenModal}>+</button> : null
          }
        </div>
        <PersonasList
          personalities={personalities}
          handleOpenEditModal={handleOpenEditModal}
          search={searchText}
        />
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
