.PHONY: docs deps

preview: deps
	. bin/activate && mkdocs serve

deploy: deps
	. bin/activate && mkdocs gh-deploy

deps:
	python3 -m venv .
	./bin/pip install mkdocs-material cairosvg pil-utils
