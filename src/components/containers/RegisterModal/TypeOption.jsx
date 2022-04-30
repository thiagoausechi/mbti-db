
import TYPES from "../../../lib/personalities";

const TypeOption = ({ settings, handleChange, state }) =>
{
    const { preference, title, snippet, options, required } = settings;

    return (
        <div className="option-section">
            <div className={"option"}>
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
            <div className={"option-info"}>
                <strong>{title}:</strong> {snippet}
            </div>
        </div>
    );
}

export const TypeSelection = ({ category, letter, required, handleChange, state }) =>
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

export function getType(state)
{
    const { mind, energy, nature, tactics } = state;
    return (mind && energy && nature && tactics) ? TYPES[mind + energy + nature + tactics] : null;
}

export default TypeOption;