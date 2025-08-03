.SILENT:
.ONESHELL:
.PHONY: setup_homepage setup_wargames homepage_dev wargames_dev claude_cli gemini_cli

HOMEPAGE_PATH := home-page


# MARK: setup


setup_homepage:
	cd $(HOMEPAGE_PATH)
	pnpm install

setup_homepage_dev:
	$(MAKE) -s setup_homepage
	cd $(HOMEPAGE_PATH)
	pnpm run dev


# MARK: agents


npm_version:
	echo "pnpm version: $$(npm --version)"

claude_cli:
	echo "Setting up Claude Code CLI ..."
	$(MAKE) -s npm_version
	pnpm add -gs @anthropic-ai/claude-code
	echo "Claude Code CLI version: $$(claude --version)"

gemini_cli:
	echo "Setting up Gemini CLI ..."
	$(MAKE) -s npm_version
	pnpm add -gs @google/gemini-cli
	echo "Gemini CLI version: $$(gemini --version)"
