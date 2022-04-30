import "./styles.css";

import pack from "../../../../package.json";

const Page = ({ children }) =>
{
    return (
        <div className="App">
            <div className="wrapper">
                <div className="header">
                    <h1>MBTI db</h1>
                </div>

                <div className="container">
                    {children}
                </div>

                <h3 className="credits">Criado por <a href="https://github.com/thiagoausechi" target="_blank" rel="noreferrer">Thiago Ausechi</a>.<br />{pack.version}</h3>
            </div>
        </div>
    );
}

export default Page;