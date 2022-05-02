import "./styles.css";

import React from "react";

import { db } from "../../../firebase-config";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";

import { getTypeOptions } from "../../../lib/personalities";
import { getType } from "./TypeOption";

import { ALL_SETTINGS } from "../../../lib/type_preferences";

import AVATARS from "../../../assets/avatars";

import AvatarEditor from "./AvatarEditor";
import ModalHeader from "./ModalHeader";
import TypeOption from "./TypeOption"
import Icon from "../../layout/Icon"

export default class RegisterModal extends React.Component
{
    DEFAULT_STATE =
        {
            showEditor: false,
            id: null,
            name: "",
            gender: "male",
            icon: null,
            mind: "", // i-e
            energy: "", // s-n
            nature: "", // f-t
            tactics: "", // p-j
            identity: "" // a-t
        }

    constructor(props)
    {
        super(props);
        if (Object.keys(props.state).length > 0)
        {
            const type = getTypeOptions(props.state.type);
            this.state =
            {
                showEditor: false,
                id: props.state.id,
                name: props.state.name || "",
                gender: props.state.gender || "male",
                icon: props.state.icon || null,
                mind: type.mind || "",
                energy: type.energy || "",
                nature: type.nature || "",
                tactics: type.tactics || "",
                identity: props.state.identity || ""
            };
        }
        else this.state = this.DEFAULT_STATE;

        // TODO Ver se tem como jogar isso aqui em outra classe
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.openIconEditor = this.openIconEditor.bind(this);
        this.closeIconEditor = this.closeIconEditor.bind(this);
        this.saveIcon = this.saveIcon.bind(this);
        this.clearIcon = this.clearIcon.bind(this);
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    handleChange(e)
    {
        const { id, name, value } = e.target;
        let modified = { ...this.state };

        if (id === "type")
        {
            if (modified[name] === value) modified[name] = "";
            else modified[name] = value;
        }
        else
            modified[name] = value;

        this.setState({ ...modified });
    }

    openIconEditor()
    {
        this.setState({ showEditor: true, preview: this.state.icon });
    }

    closeIconEditor()
    {
        this.setState({ showEditor: false });
    }

    saveIcon()
    {
        this.setState({
            showEditor: false,
            icon: this.state.preview,
            src: null, preview: null
        });
    }

    clearIcon()
    {
        this.setState({ preview: null });
    }

    onClose()
    {
        this.setState({ preview: null });
    }

    onCrop(preview)
    {
        this.setState({ preview });
    }

    async handleSave(e)
    {
        e.preventDefault();
        const { id, name, gender, icon, identity } = this.state;
        const data =
        {
            name: name,
            gender: gender,
            icon: icon,
            type: getType(this.state).initials,
            identity: identity
        };

        if (id) await updateDoc(doc(db, "personalities", id), data);
        else await addDoc(collection(db, "personalities"), data);
        window.location.reload();
    }

    render()
    {
        let type = getType(this.state);

        return (
            <div className="register-modal" style={{ width: "950px", height: "90vh" }}>
                {
                    this.state.showEditor ?
                        <AvatarEditor
                            preview={this.state.preview}
                            src={this.state.src}
                            type={type}
                            closeIconEditor={this.closeIconEditor}
                            saveIcon={this.saveIcon}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            clearIcon={this.clearIcon}
                        />

                        :

                        <form onSubmit={this.handleSave}>
                            <ModalHeader
                                start={<button onClick={this.props.handleCloseModal} >{"<"}</button>}
                                center={
                                    <div onClick={this.openIconEditor} style={{ width: "73px", margin: "auto", cursor: "pointer" }}>
                                        <Icon icon={this.state.icon} color={type ? type.role.primary : ""} />
                                    </div>
                                }
                                end={
                                    <button type="submit"
                                        style={{
                                            backgroundColor: type ? type.role.secondary : "",
                                            color: type ? type.role.primary : ""
                                        }}>
                                        {this.state.id ? "ATUALIZAR" : "SALVAR"}
                                    </button>
                                }
                            />

                            <div className="first-section">
                                <div className="main-info">
                                    <div className="main-info-name">
                                        <label>
                                            <strong>Nome:</strong>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="textbox"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="main-info-gender">
                                        <strong>Sexo:</strong>

                                        <label className="gender-control gender-control-radio">
                                            Masculino
                                            <input
                                                type="radio"
                                                id="gender"
                                                name="gender"
                                                value="male"
                                                onChange={this.handleChange}
                                                checked={this.state.gender === "male"}
                                            />
                                            <div className="gender-control-indicator"></div>
                                        </label>

                                        <label className="gender-control gender-control-radio">
                                            Feminino
                                            <input
                                                type="radio"
                                                id="gender"
                                                name="gender"
                                                value="female"
                                                onChange={this.handleChange}
                                                checked={this.state.gender === "female"} />
                                            <div className="gender-control-indicator"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="preview-card" style={{
                                    backgroundColor: type ? type.role.secondary : ""
                                }}>
                                    {type ?
                                        <>
                                            <div className="preview-card-type" style={{ color: type.role.primary }}>
                                                {type.name[this.state.gender]}
                                            </div>
                                            <div className="preview-card-role">
                                                {type.role.name}
                                            </div>
                                            <div className="avatar-preview">
                                                <img src={AVATARS[`${type.initials.toLowerCase()}_${this.state.gender}`]}
                                                    alt={`${type.initials} Avatar`} />
                                            </div>
                                        </> : ""
                                    }
                                </div>
                            </div>

                            <div className="personality">
                                <h3>Personalidade</h3>
                            </div>
                            <div className="option-wrapper">
                                {ALL_SETTINGS.map((setting) =>
                                    <TypeOption
                                        key={setting.preference}
                                        settings={setting}
                                        handleChange={this.handleChange}
                                        state={this.state}
                                    />)}
                            </div>
                        </form >
                }
            </div >
        );
    }
}