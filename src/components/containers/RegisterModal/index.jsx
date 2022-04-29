import "./styles.css";

import React from "react";

import { db } from "../../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

import Icon from "../../layout/Icon"
import Avatar from 'react-avatar-edit'

import TYPES from "../../../global/personalities";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

export default class RegisterModal extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            showEditor: false,
            name: "",
            gender: "male",
            icon: null,
            mind: "", // i-e
            energy: "", // s-n
            nature: "", // f-t
            tactics: "", // p-j
            identity: "" // a-t
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.toggleIconEditor = this.toggleIconEditor.bind(this);
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    handleChange(e)
    {
        const { id, name, value } = e.target;
        let modified = { ...this.state };

        if (id == "type")
        {
            if (modified[name] === value) modified[name] = "";
            else modified[name] = value;
        }
        else
            modified[name] = value;

        this.setState({ ...modified });
    }

    toggleIconEditor()
    {
        this.setState({ showEditor: !this.state.showEditor });
    }

    onClose()
    {
        this.setState({ icon: null });
    }

    onCrop(icon)
    {
        this.setState({ icon });
    }

    async handleSave(e)
    {
        e.preventDefault();
        const { name, gender, icon, identity } = this.state;
        const data =
        {
            name: name,
            gender: gender,
            icon: icon,
            type: getType(this.state).initials,
            identity: identity
        };

        await addDoc(collection(db, "personalities"), data);
        window.location.reload();
    }

    render()
    {
        let type = getType(this.state);

        return (
            <div className="register-modal" style={{ width: '950px', height: '750px' }}>
                {
                    this.state.showEditor ?
                        <div>
                            <Avatar
                                width={390}
                                height={295}
                                onCrop={this.onCrop}
                                onClose={this.onClose}
                                src={this.state.src}
                            />
                            <img src={this.state.icon} alt="Preview" />
                            <button onClick={this.toggleIconEditor} >Save</button>
                        </div> :
                        <form onSubmit={this.handleSave}>
                            <div className="content" >
                                <div className="icon-selector">
                                    <div onClick={this.toggleIconEditor} style={{ width: '73px', margin: "auto" }}>
                                        <Icon icon={this.state.icon} color={type ? type.role.primary : ''} />
                                    </div>
                                </div>

                                <div className="name">
                                    <label>
                                        <strong>Nome:</strong>
                                        <input type="text" id="name" name="name" className="textbox" value={this.state.name} onChange={this.handleChange} required />
                                    </label>
                                </div>

                                <div className="gender">
                                    <strong>Sexo:</strong>

                                    <label className="gender-control gender-control-radio">
                                        Masculino
                                        <input type="radio" id="gender" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === "male"} />
                                        <div className="gender-control-indicator"></div>
                                    </label>

                                    <label className="gender-control gender-control-radio">
                                        Feminino
                                        <input type="radio" id="gender" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === "female"} />
                                        <div className="gender-control-indicator"></div>
                                    </label>
                                </div>

                                <div className="avatar">
                                    {
                                        type ?
                                            <>
                                                {type.name[this.state.gender]}
                                                <img
                                                    src={`/assets/types/${type.initials.toLowerCase()}_${this.state.gender}.svg`}
                                                    style={{ width: "120px" }}
                                                />
                                            </>
                                            : "Tipo inválido"
                                    }
                                </div>

                                <div className="personality">
                                    <h3>Personalidade</h3>
                                </div>

                                <TypeOption settings={MIND_SETTINGS} handleChange={this.handleChange} state={this.state} />
                                <TypeOption settings={ENERGY_SETTINGS} handleChange={this.handleChange} state={this.state} />
                                <TypeOption settings={NATURE_SETTINGS} handleChange={this.handleChange} state={this.state} />
                                <TypeOption settings={TACTICS_SETTINGS} handleChange={this.handleChange} state={this.state} />
                                <TypeOption settings={IDENTITY_SETTINGS} handleChange={this.handleChange} state={this.state} />

                                <div className="save">
                                    {type ?
                                        <button type="submit" className="button" style={{ backgroundColor: type.role.secondary, color: type.role.primary }}>
                                            SALVAR
                                        </button> :
                                        <button type="submit" className="button">SALVAR</button>
                                    }

                                </div>
                            </div>
                        </form >
                }
            </div >
        );
    }
}

const TypeOption = ({ settings, handleChange, state }) =>
{
    const { preference, title, snippet, options, required } = settings;

    return (
        <>
            <div className={`${preference} options`}>
                <div className="bar">
                    {title}
                </div>
                <div className="option-1">
                    <TypeSelection category={preference} letter={options[0].letter} required={required} handleChange={handleChange} state={state} />
                </div>
                <div className="label-1"><p>{options[0].title}</p></div>
                <div className="or"><span>ou</span></div>
                <div className="option-2">
                    <TypeSelection category={preference} letter={options[1].letter} required={required} handleChange={handleChange} state={state} />
                </div>
                <div className="label-2"><p>{options[1].title}</p></div>
            </div>
            <div className={`${preference}-info info`}>
                <strong>{title}:</strong> {snippet}
            </div>
        </>
    );
}

const TypeSelection = ({ category, letter, required, handleChange, state }) =>
{
    const type = getType(state);
    const checked = state[category] === letter;
    return (
        <label className="type-control type-control-radio">
            <input type="radio" id="type" name={category} value={letter} onChange={handleChange} onClick={handleChange} checked={checked} required={required} />
            <span style={{ color: (checked && type) ? type.role.secondary : "" }}>{letter}</span>
            <div className="type-control-indicator" style={{ backgroundColor: (checked && type) ? type.role.primary : "" }}></div>
        </label>
    );
}

function getType(state)
{
    const { mind, energy, nature, tactics } = state;
    return (mind && energy && nature && tactics) ? TYPES[mind + energy + nature + tactics] : null;
}

const MIND_SETTINGS =
{
    preference: "mind",
    title: "Ganho de Energia",
    snippet: "Extrovertidos ganham energia em atividades externas e interagindo com outras pessoas e com o mundo externo enquanto que Introvertidos ganham energia em atividades mais reservadas e focadas em si próprio.",
    required: true,
    options:
        [
            { letter: "E", title: "EXTROVERTIDO" },
            { letter: "I", title: "INTROVERTIDO" }
        ]
};

const ENERGY_SETTINGS =
{
    preference: "energy",
    title: "Coleta de Informações",
    snippet: "Sensoriais buscam informações principalmente em dados concretos, históricos e realistas sobre o mundo. Já os iNtuitivos priorizam a imaginação, interpretações e as nuances entre as relações.",
    required: true,
    options:
        [
            { letter: "S", title: "SENSORIAL" },
            { letter: "N", title: "INTUITIVO" }
        ]
};

const NATURE_SETTINGS =
{
    preference: "nature",
    title: "Tomada de Decisões",
    snippet: "Os Pensadores são lógicos e objetivos e tem bastante consideração por leis e fatos. Sentimentais priorizam valores e pessoas acima das regras. Eles decidem com base na harmonia entre as pessoas.",
    required: true,
    options:
        [
            { letter: "T", title: "RACIONAL" },
            { letter: "F", title: "SENTIMENTAL" }
        ]
};

const TACTICS_SETTINGS =
{
    preference: "tactics",
    title: "Forma de Viver",
    snippet: "Julgadores preferem um estilo de vida mais organizado e metódico, enquanto os Perceptivos são mais flexíveis e adaptáveis a diversas situações.",
    required: true,
    options:
        [
            { letter: "J", title: "JULGADOR" },
            { letter: "P", title: "PERCEPTIVO" }
        ]
};

const IDENTITY_SETTINGS =
{
    preference: "identity",
    title: "Identidade",
    snippet: "Assertivos são autoconfiantes, equilibrados e resistentes ao estresse. Eles não se preocupam muito, mas isso é diferente de apatia. Turbulentos são orientados para o sucesso, perfeccionistas e ansiosos para melhorar. Eles estão sempre tentando contrabalançar suas dúvidas, alcançando mais.",
    required: false,
    options:
        [
            { letter: "A", title: "ASSERTIVO" },
            { letter: "T", title: "TURBULENTO" }
        ]
};