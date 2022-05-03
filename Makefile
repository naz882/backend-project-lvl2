install:
	npm install
start:
	npx node src/index.js
publish:
	npm publish --dry-run
	
lint:
	npx eslint .
test:
	npx --experimental-vm-modules jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
   
ci:
	npm ci