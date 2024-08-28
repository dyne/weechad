.PHONY: docs deps

preview: deps
	. bin/activate
	mkdocs serve

deps:
	python3 -m venv .
	./bin/pip install mkdocs-material cairosvg pil-utils
	. bin/activate

docs: deps
	. bin/activate
	mkdocs gh-deploy
