.PHONY: check docs deps preview

check:
	shellcheck setup

deps:
	npm --prefix docs install

docs: deps
	npm --prefix docs run build

preview: deps
	npm --prefix docs run dev
