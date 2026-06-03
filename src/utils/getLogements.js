import data from "./logements.json" with {type: "json"};

function getLogementById(id) {
    const logement = data.find((item) => item.id === id);
    return logement;
}

export {data as logementsData, getLogementById};
