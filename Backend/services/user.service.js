"use strict";
const DBMixin = require("../mixins/db.mixin");
const User = require("../models/user");

module.exports = {
	name: "user",
	model: User,
	version: 1,
	mixins: [
		DBMixin("users"),
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