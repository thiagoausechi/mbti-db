import "./styles.css";

import { useState, useEffect, useLayoutEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Card from "../../components/containers/Card";
import Modal from "react-modal";
import RegisterModal from "../../components/containers/RegisterModal"

Modal.setAppElement("#root");

function App()
{
  const [personalities, setPersonalities] = useState([]);
  const DB_COLLECTION_REF = collection(db, "personalities");

  useEffect(() =>
  {
    const getPersonalities = async () => 
    {
      const data = await getDocs(DB_COLLECTION_REF);

      /*
        mind: i - e
        energy: s - n
        nature: f - t
        tactics: p - j
        identity: a - t
      */

      const personas = [];

      ['I', 'E'].forEach(mind =>
      {
        ['S', 'N'].forEach(energy =>
        {
          ['F', 'T'].forEach(nature =>
          {
            ['P', 'J'].forEach(tactics =>
            {
              ['male', 'female'].forEach(gender =>
              {
                /*
                personas.push({
                  name: `Dummy ${mind}${energy}${nature}${tactics}`,
                  icon: '',
                  gender: gender,
                  type: `${mind}${energy}${nature}${tactics}`,
                  identity: ''
                });
                */
              })
            })
          })
        })
      })

      if (data.docs.length > 0) setPersonalities([...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })), ...personas]);
    }

    getPersonalities();
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() 
  {
    setIsOpen(true);
  }

  function handleCloseModal() 
  {
    setIsOpen(false);
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
      borderRadius: "25px"
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <h1>MBTI db</h1>
        </div>

        <div className="container">
          <div className="top">
            <a className="button" onClick={handleOpenModal}>+</a>
          </div>
          <div className="personas">
            {personalities.length > 0 ?
              personalities.map((persona) => <Card persona={persona} />) :
              "Sem conexão com o servidor. 😟"
            }
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={modalStyle}>
        <RegisterModal handleSubmit={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default App;
