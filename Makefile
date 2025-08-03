.SILENT:
.ONESHELL:
.PHONY: setup_homepage setup_wargames homepage_dev wargames_dev claude_cli gemini_cli

HOMEPAGE_PATH := home-page


# MARK: setup


setup_homepage:
	cd $(HOMEPAGE_PATH)
	npm install

setup_homepage_dev:
	$(MAKE) -s setup_homepage
	cd $(HOMEPAGE_PATH)
	npm run dev


# MARK: agents


npm_version:
	echo "npm version: $$(npm --version)"

claude_cli:
	echo "Setting up Claude Code CLI ..."
	$(MAKE) -s npm_version
	npm add -gs @anthropic-ai/claude-code
	echo "Claude Code CLI version: $$(claude --version)"

gemini_cli:
	echo "Setting up Gemini CLI ..."
	$(MAKE) -s npm_version
	npm add -gs @google/gemini-cli
	echo "Gemini CLI version: $$(gemini --version)"
