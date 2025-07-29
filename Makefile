.SILENT:
.ONESHELL:
.PHONY: claude_cli gemini_cli homepage_dev wargames_dev

claude_cli:
	echo "Setting up claude code ..."
	npm install -g @anthropic-ai/claude-code
	claude config set --global preferredNotifChannel terminal_bell
	echo "npm version: $$(npm --version)"
	claude --version

gemini_cli:
	echo "Setting up Gemini CLI ..."
	npm install -g @google/gemini-cli
	echo "Gemini CLI version: $$(gemini --version)"

homepage_dev:
	cd trustbuilder-page
	npm install
	npm run dev

wargames_dev:
	cd wargames-fe
	npm install
	npm run dev
