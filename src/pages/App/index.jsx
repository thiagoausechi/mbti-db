import "./styles.css";

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Card from "../../containers/Card";

function App()
{
  const [personalities, setPersonalities] = useState([]);
  const DB_COLLECTION_REF = collection(db, "personalities");

  useEffect(() =>
  {
    const getPersonalities = async () => 
    {
      const data = await getDocs(DB_COLLECTION_REF);
      setPersonalities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getPersonalities();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <h1>MBTI db</h1>
        </div>

        <div className="container">
          <div className="top">
            <button type="button" className="">+</button>
          </div>
          <div className="personas">
            {personalities.map((persona) => <Card persona={persona} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
