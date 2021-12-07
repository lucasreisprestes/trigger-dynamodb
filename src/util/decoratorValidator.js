const decoratorValidator = (fn, schema, argsType) => {
    return async function (event) {
        console.log('event ', event)
        console.log('schema ', schema)
        console.log('argsType ', argsType)
        return fn.apply(this, arguments)
    }
}
module.exports = decoratorValidator
