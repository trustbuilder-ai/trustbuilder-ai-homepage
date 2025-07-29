.SILENT:
.ONESHELL:
.PHONY: claude_cli gemini_cli
.DEFAULT_GOAL := setup_claude_code

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
