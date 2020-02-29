install:
	npm install
start:
	npx node src/index.js
publish:
	npm publish --dry-run
	
lint:
	npx eslint .

