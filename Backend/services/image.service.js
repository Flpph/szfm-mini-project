"use strict";
const DBMixin = require("../mixins/db.mixin");
const Image = require("../models/image");

module.exports = {
	name: "image",
	model: Image,
	version: 1,
	mixins: [
		DBMixin("fights"),
	],
	actions: {
		count: false,
		insert: false,
		remove: false,
		find: false,
	},
	methods: {
	},
	events: {
	},
};