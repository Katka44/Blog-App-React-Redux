export const importAll = r => {
    let images = {};

    r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
};

export const makeFilteredArray = (array, filter) => {
    if (filter !== "none") {
        const filteredArray = array.filter((object) => {
            return object.category === filter;
        });
        return filteredArray;
    }
    return array;
};