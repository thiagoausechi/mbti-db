import Avatar from "react-avatar-edit"
import ModalHeader from "./ModalHeader";
import Icon from "../../layout/Icon"

const AvatarEditor = ({ preview, src, type, closeIconEditor, saveIcon, onCrop, onClose, clearIcon }) =>
{
    return (
        <div>
            <ModalHeader
                start={<button onClick={closeIconEditor} >{"<"}</button>}
                center={<Icon icon={preview} color={type ? type.role.primary : ""} />}
                end={<button onClick={saveIcon} >SALVAR</button>}
            />
            <Avatar
                width={390}
                height={295}
                exportSize={75}
                exportQuality={0.7}
                exportAsSquare={false}
                onCrop={onCrop}
                onClose={onClose}
                label={"Escolha um arquivo"}
                borderStyle={{
                    margin: "auto",
                    border: "2px solid #979797",
                    borderStyle: "dashed",
                    borderRadius: "8px",
                    textAlign: "center"
                }}
                src={src}
            />
            <div style={{ marginTop: "20px", display: "flex" }}>
                <button onClick={clearIcon} >LIMPAR</button>
            </div>
        </div>
    );
}

export default AvatarEditor;