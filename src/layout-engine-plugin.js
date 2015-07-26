(function() {
    var LayoutEngine = function () {
        this.parse = function (uaString) {
            var match = /(windows.+\sedge)\/([\w\.]+)/i.exec(uaString) ||
                /(presto|webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i.exec(uaString) ||
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i.exec(uaString) ||
                /(icab)[\/\s]([23]\.[\d\.]+)/i.exec(uaString) ||
                /rv:([\w\.]+).*(gecko)/i.exec(uaString);

            var result;

            if (!!match) {
                result = {
                    name: match[1],
                    version: match[2]
                };

                if (/(windows.+\sedge)/i.exec(result.name)) {
                    result.name = "EdgeHTML";
                }
                else if ("gecko" === result.version.toLowerCase()) {
                    var temp = result.version;
                    result.version = result.name;
                    result.name = temp;
                }
            }

            return result;
        };

        return this;
    };

    if (typeof(exports) !== "undefined") {
        // nodejs env
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = LayoutEngine;
        }

        exports.Layouter = LayoutEngine;
    }

    if (typeof(window) !== 'undefined' &&
        typeof(window.navigator) !== "undefined" &&
        typeof(window.navigator.userAgent) !== 'undefined') {
        var engine = new LayoutEngine().parse(window.navigator.userAgent);

        if (jQuery) {
            jQuery.engine = engine;
        }

        window.engine = engine;
    }
})();
