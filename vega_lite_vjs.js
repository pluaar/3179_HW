var vg1 = "w9_vis.json";
vegaEmbed("#map_plot_1", vg1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg2 = "w10_vis.json";
vegaEmbed("#map_plot_2", vg2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
