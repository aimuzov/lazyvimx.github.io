# Getting Started

Welcome to **LazyVimx** - an enhanced LazyVim configuration with extensive customizations, UI improvements, and workflow optimizations.

## What is LazyVimx?

LazyVimx is a comprehensive enhancement layer built on top of [LazyVim](https://github.com/LazyVim/LazyVim) that provides:

- **48 optional extras** across 11 categories
- **33 override modules** for deep customization
- **30+ custom keybindings**
- **150+ custom highlights** for Catppuccin theme
- **70+ custom highlights** for Tokyo Night theme

## Features

### 🎨 Visual Enhancements

- Advanced theming with deep customization for Catppuccin and Tokyo Night
- Automatic theme switching based on system light/dark mode
- Enhanced UI components with consistent rounded borders and custom icons
- Better statusline with custom mode indicators and visual elements
- Improved dashboard with custom ASCII art and styled sections
- Symbol usage indicators showing references and implementations inline

### 🚀 Productivity Boosters

- Smart buffer management with groups, automatic cleanup, and tab scoping
- Enhanced code navigation with tree-sitter aware motions
- Better diagnostics display with inline messages
- Git workflow improvements including GitLab MR integration and conflict resolution
- Advanced completion with Blink.cmp integration
- AI coding assistant support via Avante

### ⚙️ Quality of Life

- Russian keyboard support via langmapper
- Repeatable actions for buffer operations
- Auto-save to chezmoi on LazyVim updates
- Local project configuration support
- VSCode integration for hybrid workflows
- Performance optimizations including inactive LSP cleanup

## Prerequisites

- Neovim >= 0.10.0

## Quick Start

### 1. Create your configuration

Create `~/.config/nvim/init.lua` with the following content:

```lua
local lazy_opts = {
	spec = { { "aimuzov/LazyVimx", import = "lazyvimx.boot" } },

	install = { colorscheme = { "catppuccin", "tokyonight" } },
	checker = { enabled = true, notify = false },
	change_detection = { enabled = false },
	diff = { cmd = "diffview.nvim" },

	ui = {
		backdrop = 100,
		border = "rounded",
		icons = { keys = "󰥻" },
	},
}

-- Bootstrap lazy.nvim
local lazy_path = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
local lazy_url = "https://github.com/folke/lazy.nvim.git"

if not vim.loop.fs_stat(lazy_path) then
	vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazy_url, lazy_path })
end

vim.opt.rtp:prepend(lazy_path)

require("lazy").setup(lazy_opts)
```

### 2. Start Neovim

```bash
nvim
```

That's it! LazyVimx will automatically install LazyVim and all required plugins on first launch.

### 3. Configure LazyVimx (optional)

You can configure LazyVimx in two ways:

**Option A:** Add `opts` directly in `init.lua`:

```lua
local lazy_opts = {
  spec = {
    {
      "aimuzov/LazyVimx",
      import = "lazyvimx.boot",
      opts = {
        colorscheme = "catppuccin",
        colorscheme_flavors = {
          catppuccin = { "catppuccin-macchiato", "catppuccin-latte" },
          tokyonight = { "tokyonight-storm", "tokyonight-day" },
        },
      }
    }
  }
  -- ... other settings
}
```

**Option B:** Create a separate file `~/.config/nvim/lua/plugins/lazyvimx.lua`:

```lua
return {
  "aimuzov/LazyVimx",
  opts = {
    colorscheme = "catppuccin",
    colorscheme_flavors = {
      catppuccin = { "catppuccin-macchiato", "catppuccin-latte" },
      tokyonight = { "tokyonight-storm", "tokyonight-day" },
    },
  },
}
```

### 4. Enable extras

Use the LazyVim extras UI (`:LazyExtras`) to enable LazyVimx extras (recommended), or add them to your config:

```lua
-- In lua/plugins/extras.lua
return {
  -- Includes all enhancements for lazyvim
  { import = "lazyvimx.extras.core.overrides" },
  -- Add more extras as needed
  { import = "lazyvimx.extras.ui.better-diagnostic" },
  { import = "lazyvimx.extras.motions.langmapper" },
}
```

## Example Configurations

Check out ready-to-use configurations in the [examples/](https://github.com/aimuzov/LazyVimx/tree/main/examples) directory:

- **[Minimal](https://github.com/aimuzov/LazyVimx/tree/main/examples/minimal)** - Essential overrides only (~55-85ms startup)
- **[Full-Featured](https://github.com/aimuzov/LazyVimx/tree/main/examples/full-featured)** - All 48 extras enabled (~80-120ms startup)
- **[VSCode User](https://github.com/aimuzov/LazyVimx/tree/main/examples/vscode-user)** - Optimized for VSCode Neovim
- **[Russian Keyboard](https://github.com/aimuzov/LazyVimx/tree/main/examples/russian-keyboard)** - With langmapper support

## Next Steps

- Read about [Configuration](configuration.md) options
- Explore available [Extras](extras.md)
- Learn about [Key Bindings](keybindings.md)
- Check out the [Architecture](architecture.md)
- Review the [API Reference](api.md)

## Getting Help

- [FAQ](faq.md) - Frequently Asked Questions
- [Troubleshooting](troubleshooting.md) - Common issues and solutions
- [GitHub Issues](https://github.com/aimuzov/LazyVimx/issues)
- [Telegram Discussion](https://t.me/aimuzov_dotfiles)
