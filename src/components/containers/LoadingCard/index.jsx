import "./styles.css";

const LoadingCard = () => 
{
    return (
        <div className="card-item">
            <div className="card" style={{ background: "white", cursor: "default" }}>
                <div className="card-icon">
                    {/*<Icon icon={persona.icon} color={role.primary} />*/}
                    <div className="icon-loading-placeholder" />
                </div>

                <div className="card-persona">
                    <div className="card-title">
                        <LoadingPlaceholder large />
                    </div>
                    <div className="card-snippet">
                        <LoadingPlaceholder />
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-title">
                        <LoadingPlaceholder large />
                    </div>
                    <div className="card-snippet">
                        <LoadingPlaceholder />
                    </div>
                </div>
            </div>
        </div>
    );
}

const LoadingPlaceholder = ({ large }) =>
{
    function randomWidth()
    {
        return Math.floor(Math.random() * (Math.floor(250) - Math.ceil(90))) + Math.ceil(90);
    }

    return (
        <div className={`loading-bar-placeholder ${large ? "large-placeholder" : ""}`}
            style={{
                width: large ? `${randomWidth()}px` : "65px",
                height: large ? "24px" : "17px"
            }}
        />
    );
}
export default LoadingCard;