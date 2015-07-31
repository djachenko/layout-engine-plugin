/*!
 * layouter 0.0.1
 * https://github.com/djachenko/layouter
 *
 * Description: layouter is lightweight JavaScript-based plugin for browser layout engine detection
 * Author: Igor Djachenko
 * Based on:
 * * jquery-browser-plugin (https://github.com/gabceb/jquery-browser-plugin)
 * * ua-parser-js (https://github.com/faisalman/ua-parser-js)
 *
 * Copyright: Copyright © 2015 Igor Djachenko under dual MIT license.
 */

(function() {
    var Layouter = function () {
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
            exports = module.exports = Layouter;
        }

        exports.Layouter = Layouter;
    }

    if (typeof(window) !== 'undefined' &&
        typeof(window.navigator) !== "undefined" &&
        typeof(window.navigator.userAgent) !== 'undefined') {
        var engine = new Layouter().parse(window.navigator.userAgent);

        window.engine = engine;

        if ($) {
            $.engine = engine;
        }
    }
})();
