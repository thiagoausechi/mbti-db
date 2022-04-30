function importAll(r)
{
    let AVATARS = {};

    r.keys().forEach((item, index) =>
    {
        AVATARS[item.replace("./", "").replace(".svg", "")] = r(item);
    });

    return AVATARS;
}

const AVATARS = importAll(require.context('../avatars/', false, /\.(svg)$/));

export default AVATARS;