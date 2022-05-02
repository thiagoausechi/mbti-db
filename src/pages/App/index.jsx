import "./styles.css";

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Page from "../../components/layout/Page";
import Card from "../../components/containers/Card";
import LoadingCard from "../../components/containers/LoadingCard";
import RegisterModal from "../../components/containers/RegisterModal";
import Modal from "react-modal";

import TYPES from "../../lib/personalities";
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

function PersonasList({ personalities, handleOpenEditModal, search })
{
  const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

  const filteredData = personalities.filter((e) =>
  {
    if (!search || search === '') return e;

    const s = normalize(search);

    // Pesquisa pelo Tipo da maneira complexa, ex.: >IxTJ ou >ExxP ou >xNxJ
    if (s.charAt(0) === ">" &&
      (new RegExp(`(${s.replace(">", "").replaceAll("x", ".")})+`)
        .exec(e.type.toLowerCase()))) return e;

    // Lista todos membros da Agência ao usar Arsmtrong ou AMST na pesquisa
    if (("armstrong".includes(s) || "amst".includes(s)) &&
      (
        e.name === "Thiago Ausechi" ||
        e.name === "Thiago Basílio" ||
        e.name === "Ana Muraoka" ||
        e.name === "Mari Alves" ||
        e.name === "Lorena Garcia"
      )) return e;

    // Pesquisa pelo Nome da Pessoa ou pelo Tipo (simplificado, ex: ESFP)
    if (normalize(e.name).includes(s) ||
      e.type.toLowerCase().includes(s)) return e;

    // Pesquisa pelo Nome do Tipo (ex. Arquiteto), ou Nome do Grupo (ex. Analistas)
    if (normalize(TYPES[e.type].name.male).includes(s) ||
      normalize(TYPES[e.type].name.female).includes(s) ||
      normalize(TYPES[e.type].role.name).includes(s)) return e;

    return e;
  });

  return (
    <div className="personas">
      {(personalities.length > 0) ? filteredData.map((persona) =>
        <Card key={persona.id} persona={persona} handleOpenEditModal={handleOpenEditModal} />) :
        [...Array(50).keys()].map((n) => <LoadingCard key={n} />)
      }
    </div>
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
