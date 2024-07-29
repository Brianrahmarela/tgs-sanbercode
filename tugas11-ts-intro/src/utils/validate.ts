export function validate<T>(data: T, schema: { [K in keyof T]: string }): boolean {
    // console.log("validate =>")
    // console.log('data newProduct', data)
    // console.log('schema validate ts', schema)
    for (let key in schema) {
        // console.log(key)
        // console.log('data[key]', data[key])
        // console.log('== typeof data[key]', typeof data[key])
        // console.log('schema[key] ==', schema[key])
        if (typeof data[key] !== schema[key]) {
            // console.log('tdk sama', )
            return false;
        }
    }
    // console.log('key sama', )
    return true;
}