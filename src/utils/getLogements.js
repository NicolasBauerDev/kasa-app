import data from "./logements.json" with {type: "json"};

function getLogementById(id) {
    const logement = data.find((item) => item.id === id);
    if (!logement) {
        throw new Error(`Logement with id ${id} not found`);
    }
    return logement;
}

export {data as logementsData, getLogementById};
