requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'script',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    // paths: {
    //     app: '../app'
    // }
});

// Start the main app logic.
requirejs(['jquery','testClass'],

function ($, testClass) {
    //alert('tfdasjlkgjf');
    var test = new testClass("bobby");
    test.go();
});
