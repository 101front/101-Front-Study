const fs = require("fs");
const path = require("path");
const except = [".vuepress", ".git", "node_modules", '.netlify'];

const sidebar = {
	baseOption: undefined,

	getSidebar(HomeTitle = "Home") {
		const root = getRoot();
		const dir = fs.readdirSync(root).filter((file) => {
			return !except.includes(file) && fs.statSync(path.join(root, file)).isDirectory();
		});

		const sidebar = getSidebarItems(dir, root);
		return sidebar;
	},
};

getRootDir = function() {
	return path.resolve(process.cwd());
};

getSidebarItems = function(dir, root) {
	return dir.map((e) => {
		const childDir = path.resolve(root, e);

		return (sidebaritem = {
			title: e,
			path: !!sidebar.baseOption ? sidebar.baseOption + e + "/" : "/" + e + "/",
			collapsable: true,
			children: [
				...fs
					.readdirSync(childDir)
					.filter((file) => !file.includes(".md"))
					.map((c) => "/" + e + "/" + c + "/"),
			],
		});
	});
};

getRoot = function() {
	tryFindBase();
	let root;

	if (!!sidebar.baseOption) {
		root = path.join(getRootDir(), sidebar.baseOption);
	} else {
		root = getRootDir();
	}
	return root;
};

tryFindBase = function() {
	try {
		let config = path.join(getRootDir(), "/.vuepress/config.js");
		let contents = fs.readFileSync(config, "utf8");
		let base = contents.match(/(?<="?base"?:+\s?").+(?=")/)[0];
		sidebar.baseOption = base;
	} catch (err) {
		console.log("Can not found.");
	}
};

module.exports = sidebar;