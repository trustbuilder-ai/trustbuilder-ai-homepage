.SILENT:
.ONESHELL:
.PHONY: setup_homepage setup_wargames homepage_dev wargames_dev claude_cli gemini_cli

setup_homepage:
	cd trustbuilder-page
	pnpm install

setup_wargames:
	cd wargames-fe
	pnpm install

homepage_dev:
	cd trustbuilder-page
	npm install
	npm run dev

wargames_dev:
	cd wargames-fe
	npm install
	npm run dev


# MARK: agents


claude_cli:
	echo "Setting up claude code ..."
	echo "npm version: $$(npm --version)"
	npm install -g @anthropic-ai/claude-code
	claude --version

gemini_cli:
	echo "Setting up Gemini CLI ..."
	echo "npm version: $$(npm --version)"
	npm install -g @google/gemini-cli
	echo "Gemini CLI version: $$(gemini --version)"
