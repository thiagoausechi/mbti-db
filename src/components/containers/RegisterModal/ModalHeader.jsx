const ModalHeader = ({ start, center, end }) => 
{
    return (
        <div className="modal-header">
            <div className="modal-header-start">
                <div className="modal-header-start-content">
                    <div>
                        {start}
                    </div>
                </div>
            </div>
            <div className="modal-header-center">
                <div className="modal-header-center-content">
                    <div>
                        {center}
                    </div>
                </div>
            </div>
            <div className="modal-header-end">
                <div className="modal-header-end-content">
                    <div>
                        {end}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalHeader;