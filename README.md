# L13 Diff

Compare two folders in Visual Studio Code.

![L13 Diff](images/preview.png)

## What's new in L13 Diff 0.14.0

* Added keyboard support for selection in list view.

## Features

* Supports a history for recently used folders.
* Auto detects current workspaces.
* Select folders with the context menu in the VS Code Explorer or the open dialog.
* Drag'n Drop folders from the VS Code Explorer or from the Finder/Explorer into the input fields.
* Copy files from left to right or vi­ce ver­sa.
* Select all files and folders by status.
* Toggle the view by status.
* Double click an item in the list to open the diff or the file.
* Select files and folders with meta/ctrl, shift and mouse click in the list like in the native Finder/Explorer.

Select a folder with the dialog, swap the paths and compare two files or folders.

![L13 Diff Basics](images/preview-start.png)

Select from recently used, current workspaces or drag'n drop folders into the input fields.

![L13 Diff Menu](images/preview-menu.png)

Toggle the view, select files by status or copy files from left to right or vice versa.

![L13 Diff List](images/preview-diff.png)

## Available Commands

* `L13 Diff` - Open the diff panel
* `Open in L13 Diff` - Open the diff panel with selected files or folders by dialog or context menu.
* `L13 Diff: Clear History` - Clear the history of recently used files and folders.

## Available Settings

* `l13Diff.maxRecentlyUsed` - Defines the max length of recently used entries in the menu.
* `l13Diff.openToSide` - Set true if a diff or file should open to the side.
* `l13Diff.ignore` - A list of files and folders which should be ignored. Supports * for names.

## Global Keyboard Shortcuts

macOS

* `meta+l meta+l` - L13 Diff

Windows / Linux

* `ctrl+l ctrl+l` - L13 Diff

If the key bindings don't work, please check `Preferences -> Keyboard Shortcuts`.

## List Keyboard Shortcuts

Most keyboard shortcuts for the list view are working like your native Finder/Explorer.

All platforms

* `enter` - Open diff or file
* `ctrl+enter` - Open diff or file to side

macOS

* `up/down` - Move cursor to previous/next list item
* `alt+up/down` - Move cursor to start/end of page
* `shift+up/down` - Add previous/next list item to selection
* `shift+alt+up/down` - Add to selection until start/end of page
* `home/end` - Scroll to start/end of page
* `page up/down` - Scroll to previous/next viewport of page

Windows

* `up/down` - Move cursor to previous/next list item
* `shift+up/down` - Add previous/next list item to selection
* `home/end` - Move cursor to start/end of page
* `page up/down` - Move cursor to previous/next viewport of page
* `shift+home/end` - Add to selection until start/end of page
* `shift+page up/down` - Add to selection to previous/next viewport of page
* `shift+meta+up/down` - Add to selection until start/end of page

Linux

* `up/down` - Move cursor to previous/next list item
* `home/end` - Move cursor to start/end of page
* `shift+up/down` - Add previous/next list item to selection
* `shift+home/end` - Added to selection to start/end