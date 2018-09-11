'use strict';

const hapiIo = require("../index").init;

exports.plugin = {
    name: "hapi-io",
    version: "1.0.0",
    pkg: require('../package.json'),
    register: hapiIo
};