const dataTypes = [
    42,                // number
    "Hello, World!",   // string
    true,              // boolean
    null,              // null
    undefined,         // undefined
    Symbol("id"),      // symbol
    BigInt(9007199254740991), // bigint
    {},                // object (порожній об'єкт)
    [],                // object (масив)
    function () {},    // function (особливий підтип object)
];

dataTypes.forEach((value) => {
    try {
        console.log(`Value: ${String(value)}, Type: ${typeof value}`);
    } catch (error) {
        console.log(`Value: [Cannot be converted to string], Type: ${typeof value}`);
    }
});
