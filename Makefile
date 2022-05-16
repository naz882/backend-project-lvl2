install:
	npm install
start:
	npx node bin/index.js
publish:
	npm publish --dry-run
	
lint:
	npx eslint .
test:
	npx --experimental-vm-modules jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8