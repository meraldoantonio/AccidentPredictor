
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var unemployment = d3.map();
    var unemployment2 = d3.map();

    var Scaler = d3.scaleLinear()
        .domain([0, 9])
        .rangeRound([00, 200]);

    var color = d3.scaleThreshold()
        .domain(d3.range(2, 10))
        .range(d3.schemeBlues[9]);

    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(900,200)");

    legend.selectAll("rect")
        .data(color.range().map(function(d) {
            d = color.invertExtent(d);
            if (d[0] == null) d[0] = Scaler.domain()[0];
            if (d[1] == null) d[1] = Scaler.domain()[1];
            return d;
        }))
        .enter().append("rect")
        .attr("width", 12)
        .attr("y", function(d) {
            return Scaler(d[1]);
        })
        .attr("height", function(d) {
            return Scaler(d[1]) - Scaler(d[0]);
        })
        .attr("fill", function(d) {
            return color(d[0]);
        });

    legend.append("text")
        .attr("class", "caption")
        .attr("x", Scaler.range()[0])
        .attr("y", 0)
        .attr("fill", "#000")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Accident Probability");

    legend.call(d3.axisRight(Scaler)
            .tickSize(13)
            .tickFormat(function(x) {
                if (x==2) {return "< " + 2 * x + "%";}
                else if (x==9) { return "> " + 2 * x + "%";}
                else {return 2 * x + "%";}


            })
            .tickValues(color.domain()))
        .select(".domain")
        .remove();



    var projection = d3.geoAlbers()
        .center([0, 53])
        .rotate([0, 0])
        .parallels([50, 60])
        .scale(1200 * 5)
        .translate([width / 2, height / 2]);


    //var projection = d3.geoConicConformalFrance();
    var path = d3.geoPath()
        .projection(projection);

    var promises = [
        d3.json("./UK.json")
    ];

    Promise.all(promises).then(function(data) {
        ready(data[0]);
    }).catch(function(error) {
        console.log(error);
    });

    function ready(us) {
        svg.append("g")
            .attr("class", "counties")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.wards).features)
            .enter().append("path") //for each ward, append path
            .attr("fill", "#FAAAAF")
            .attr("d", path);

        svg.append("path")
            .datum(topojson.mesh(us, us.objects.wards, function(a, b) {
                return a !== b;
            }))
            .attr("class", "states")
            .attr("d", projection.getCompositionBorders());




    }
