const { src, dest, series } = require('gulp');

function buildIcons() {
	return src('nodes/**/*.{svg,png}').pipe(dest('dist/nodes'));
}

function copyDriver() {
	// ensure vendor neo4j-driver files are available in dist
	return src('nodes/Cypher/neo4j-driver/**').pipe(dest('dist/nodes/Cypher/neo4j-driver'));
}

exports['build:icons'] = series(buildIcons, copyDriver);
