import { v4 as uuidv4 } from "uuid";

export function generateDummies(generate)
{
    const dummies = [];

    if (generate)
    {
        ["I", "E"].forEach(mind =>
        {
            ["S", "N"].forEach(energy =>
            {
                ["F", "T"].forEach(nature =>
                {
                    ["P", "J"].forEach(tactics =>
                    {
                        ["male", "female"].forEach(gender =>
                        {
                            dummies.push({
                                id: uuidv4(),
                                dummy: true,
                                name: `Dummy ${mind}${energy}${nature}${tactics}`,
                                icon: "",
                                gender: gender,
                                type: `${mind}${energy}${nature}${tactics}`,
                                identity: ""
                            });
                        })
                    })
                })
            })
        })
    }

    return dummies;
}