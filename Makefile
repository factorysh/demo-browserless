build: web-build test-build

web-build:
	docker build -t demo-browserless .

test-build:
	docker-compose -f tests/docker-compose.yml build --pull --build-arg UID=`id -u` test

test:
	docker-compose -f tests/docker-compose.yml up --exit-code-from test test

clean:
	rm -rf tests/node_modules
