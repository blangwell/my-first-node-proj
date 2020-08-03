module.exports.beBasic = () => "That's so fetch!";

// module.exports is a js object that contains all code we want to export for import in other files (like our entry point index.js)

module.exports.count = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
};

// we are adding count to the module.exports object to be used elsewhere
// node had core modules, functionality commonly used in node