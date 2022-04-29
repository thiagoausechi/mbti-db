import "./styles.css";

import React from "react";
import AvatarEditor from "react18-avatar-editor";
import Icon from "../Icon";

import TestImage from "../../../assets/test.png";

export default class IconEditor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            showEditor: false,
            image: TestImage,
            position: { x: 0, y: 0 },
            scale: 1,
            rotate: 0,
            preview: null,
        };
    }

    render()
    {
        return !this.state.showEditor ? <Preview setState={this.setState} /> :
            <Editor state={this.state} editor={this.editor} setState={this.setState} />;
    }
}

const Preview = ({ setState }) => 
{
    function showEditor(e)
    {
        setState({ showEditor: true });
    }

    return (
        <div style={{ cursor: 'pointer' }}>
            <Icon />
        </div>
    );
}

const Editor = ({ state, editor, setState }) => 
{
    function handleNewImage(e)
    {
        e.preventDefault();
        setState({ image: e.target.files[0] });
    }

    function handleSave(data)
    {
        const img = editor.getImageScaledToCanvas().toDataURL();
        const rect = editor.getCroppingRect();

        setState({
            preview: {
                img,
                rect,
                scale: state.scale
            },
        });
    }

    function handleScale(e)
    {
        const scale = parseFloat(e.target.value);
        setState({ scale });
    }

    function rotateScale(e)
    {
        const scale = parseFloat(e.target.value);
        e.preventDefault();
        setState({ rotate: scale, });
    }

    function rotateLeft(e)
    {
        e.preventDefault();
        setState({
            rotate: (state.rotate - 90) % 360,
        });
    }

    function rotateRight(e)
    {
        e.preventDefault();
        setState({
            rotate: (state.rotate + 90) % 360,
        });
    }

    function handleXPosition(e)
    {
        const x = parseFloat(e.target.value);
        setState({ position: { ...state.position, x } });
    }

    function handleYPosition(e)
    {
        const y = parseFloat(e.target.value);
        setState({ position: { ...state.position, y } });
    }

    function setEditorRef(editor)
    {
        if (editor) this.editor = editor;
    }

    function handlePositionChange(position)
    {
        setState({ position });
    }

    return (
        <div>
            <AvatarEditor
                ref={setEditorRef}
                image={state.image}
                width={60}
                height={60}
                scale={parseFloat(state.scale)}
                position={state.position}
                onPositionChange={handlePositionChange}
                rotate={parseFloat(state.rotate)}
                borderRadius={60 / (100 / 50)}
                className="icon-canvas"
            />
            <br />
            <input
                name="newImage"
                type="file"
                onChange={handleNewImage}
                style={{ display: 'initial' }}
            />
            <br />
            Zoom:
            <input
                name="scale"
                type="range"
                onChange={handleScale}
                min="1"
                max="2"
                step="0.01"
                defaultValue="1"
            />
            <br />
            Rotate:
            <button onClick={rotateLeft}>Left</button>
            <button onClick={rotateRight}>Right</button>
            <br />
            Rotation:
            <input
                name="scale"
                type="range"
                onChange={rotateScale}
                min="0"
                max="180"
                step="1"
                defaultValue="0"
            />
        </div >
    );
}