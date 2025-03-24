function deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
}

export default {
    deepCopy,
};
