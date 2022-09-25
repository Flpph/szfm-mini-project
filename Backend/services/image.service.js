"use strict";
const DBMixin = require("../mixins/db.mixin");
const Image = require("../models/image");
const { MoleculerError } = require("moleculer").Errors;
const fs = require("fs");
var hat = require('hat');
const path = require("path");

module.exports = {
	name: "image",
	model: Image,
	mixins: [
		DBMixin("images"),
	],
	actions: {
		count: false,
		insert: false,
		remove: false,
		find: false,
		generate: {
			isFileUpload: true,
			rest: "POST /generate",
			async handler(ctx) {
				for (const file of ctx.meta.files) {
					if (file.mimetype != "image/jpeg" && file.mimetype != "image/png") {
						this.fileCleanUp(ctx.meta.files);
						throw new MoleculerError("Bad type provided", 400, "BAD_TYPE_PROVIDED");
					}
				}

				if (ctx.meta.files.length == 0) {
					throw new MoleculerError("No file provided", 400, "NO_FILE_PROVIDED");
				} else if (ctx.meta.fields.username == "") {
					throw new MoleculerError("No name provided", 400, "NO_NAME_PROVIDED");
				}

				const uploadedFile = ctx.meta.files[0];
				const readFile = fs.readFileSync(uploadedFile.filepath);

				var newName = hat();
				var filePath = path.resolve(__dirname, "../public/images/" + newName + ".png");
				fs.writeFileSync(filePath, readFile);

				await Image.create({
					name: newName,
					author: ctx.meta.fields.username,
					path: "http://95.138.193.85:3000/images/" + newName + ".png",
				})

				fs.unlinkSync(uploadedFile.filepath);

				return { path: "http://95.138.193.85:3000/images/" + newName + ".png" }
			}
		}
	},
	methods: {
		async fileCleanUp(files) {
			for (const file in files) {
				fs.unlinkSync(file.filepath);
			};
		},
	},
	events: {
	},
};