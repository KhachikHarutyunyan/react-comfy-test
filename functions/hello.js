
// domain/.netlify/functions/hello

const items = [
    {id: 21, name: "Hok"},
    {id: 2, name: "loky"},
]
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: "hello",
    }
}

