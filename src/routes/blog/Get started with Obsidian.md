---
title: The only Note-Taking App you will ever need - Get started with Obsidian
date: "2023-02-18"
postdescription: "If you are looking for an introduction to the note-taking App Obsidian, look no further. Read this quick setup guide and get started asap."
categories:
    - "Productivity"
    - "Obsidian"
---
<script>import Image from "svimg";</script>

<Image src="obsidian_titleview.jpg" width="500" alt="Image of an Obsidian Vault and a Graph representation" />

I have been reading quite a lot of books for the past three years. It is something that I rediscovered, not having read a lot for about ten years before that. After having finished the first five, I noticed a very clear need: I would love to be able to search through my highlights and revisit ideas from these books. This started my quest for a note-taking app. After watching quite a few videos and reading lots of articles, I settled for Obsidian. The reasons were quite simple. It is completely file-based, meaning if it would ever get discontinued, my notes and note structure would still be available on disk. It also uses markup, which I personally quite like. Finally, since it is file-based, it *should* be easily syncable through any cloud filesharing service.
For anyone interested, I also considered Notion and Logseq. Notion seemed a little too complex or my taste. Logseq looked like Obsidian, just a little earlier in its journey, with a far smaller plugin landscape.

## What is Obsidian?/Obsidian Overview

Let's dig a little deeper together. What exactly is Obsidian?
Obsidian is a note taking app, which quite recently reached its first official stable version. A few of its very compelling high-level features: completely open source, file based, freely extensible through a plug-in ecosystem, uses markdown. You can use it for note-taking, but there is so much more to be done with it. Some people create to-do lists and task management systems with it, others have developed very sophisticated "second brains". Whatever you can imagine (and can be done with markdown ;)) is possible.


<Image src="vault.jpg" width="500" alt="Picture of Obsidian Vault" />

Obsidian stores its data in so-called vaults, which are basically main folders for a collection of notes. Theses notes have a system of tags and links so that you can get your notes linked together and potentially create new ideas based on that. The program draws a graph with these tags, which can get pretty interesting, especially when you have more notes in your vault. It has a mobile app as well, which is great for jotting down thoughts on the go. I personally sync it through iCloud and it works perfectly, even though I have read that others have had problems with it. I have also used iCloud to sync to all other devices (e.g. my windows desktop PC), so that I have access when I need it.
As mentioned, Obsidian is an open platform, so there is a lot of developer activity around it. There are integrations for lots of other tools, for example Todoist or Readwise. The catalogue is huge, at the time of this blogpost, it lists 847 different plugins.

<Image src="Obsidian_Plugins.JPG" width="500" alt="Picture of the number of Obsidian Plugins, sitting at 847" />

My absolute favorite thing about Obsidian is how I can search for things and quickly find them. I basically use it as an extension of my brain. I try (and do not always succeed) to note everything down that may be useful, for example some information out of a YouTube video. Work-processes that I do not use often will also get noted down. Since using Obsidian, my research time for things like these is now considerably shorter.

## Usage inspiration (what do I do)

Maybe you have read that first few paragraphs and thought: "Why would I need this?". To give you some inspiration, here are some of the things I do with Obsidian in my personal and work life:

- Weekly Reviews
- Monthly Reviews
- Checklists for projects
- Meeting Notes
- Book Notes/Reviews/summaries
- Youtube Video summaries
- Keep useful articles for reference (Release Notes, Blogposts, ...)

Especially that last point is great. Instead of going back to Google and trying to find that one useful article from a week ago, I just copy it over to Obsidian. Afterwards, I can search for it whenever I need it. Getting there takes me a fraction of the time it takes to google it and find the correct article again.

So if these use cases have piqued your interest, let me show you around to make your first few steps a little easier.

## Getting Started

Obsidian, as I already mentioned, works based on Markdown files. The easiest way of getting started is to open up Obsidian, create a new vault, and take your first note. A vault is basically a collection of notes that you want to have in the same place. You could for example have a work and a private vault.

I immediately set up my vault in iCloud, so I could share and use it between my laptop, desktop and mobile phone. You do not need to do anything except creating the vault in iCloud, and then opening that vault on your other devices. Ta-da - synced notes everywhere. How great is that? You should be able to do the same with any other cloud storage, even though I have not tried it.

The next step would be to get some templates to use with obsidian, for example for daily or weekly notes. You can search through the internet or just use the ones I linked at the bottom. Most of them are taken from someone else and modified to my liking - feel free to do the same.

Now, let's open up the settings in the bottom left and go over two points that I have found useful. 

<Image src="settings.JPG" width="500" alt="Picture of Obsidian settings" />

In the Files & Links settings, I have set deleted notes to go into the trash of obsidian. I prefer this because it gives me a central point for deleted notes, instead of having them mixed in with other things I delete.

I have also set the default location for new attachments setting to "subfolder under current folder". I prefer to have my images and documents I attach close to the note itself.

## Plugins

<Image src="plugins.jpg" width="500" alt="Picture of the Obsidian plugins used by author of the site" />

### Core Plugins

For the core plugins, I have everything activated except audio recorder, format converter, publish, slash commands, slides, sync, unique note creator and workspaces.

I have configured the template core plugin with my templates folder. Just input the name of the folder that you would like to load templates from.

A useful tip/workflow here: Create a new Note, hit cmd + P, type "Template", then choose "Insert Template" and load the template you want.

### Community Plugins

There are a few community Plugins I really like to use, because they provide incredibly useful features that make Obsidian even more enjoyable (as if Markdown wasn't enough!).

#### Paste URL into selection

This is probably my favourite. When you copy a URL, you can select text before you paste it, and that will turn into your hyperlink text. Super awesome when you want to have a description for the link that links directly to the relevant site.

#### Todoist Plugin

I am a big Todoist user, it is an integral part of my overall system to stay organised. This integration allows me to import Lists, and even syncs so that I can check off tasks in Obsidian, if needed. Highly recommended.

#### Readwise official

Since I read a lot, I have set up an automated system that gives me the ability to have my highlights synced automatically. My Kobo highlights get synced to Readwise, and this plugin imports all those highlights into Obsidian. This is what I dreamed of for a long time: all my book highlights at my fingertips.

#### Editor Syntax Highlight

Pasting code into Obsidian can be great for future reference. Reading code can be difficult. This plugin gives you syntax highlighting, even going as far as enabling you to have it language-specific. Great little tool that will come in handy at some point, I promise.

#### Shortcuts and Markdown Syntax

For formatting your notes, here is a list of Markdown Syntax and commands that I use regularly:

- [[]] double brackets make a link between notes
- \# raute with whitespace does headings (1 = large, 2 = little smaller up to 6 levels deep)
- \# raute without whitespace makes tags
- \*\* asterisks around a word make *italics*
- \*\*\*\* double asterisks around a word make **bold**
- Metadata can be added manually
- \--- triple dashes create a line separator
- \`\`\` triple high comma formats your text as ```code```
	- If you put a programming language after the high commas, you get correct syntax highlighting, e.g. ```javascript test```


- cmd + E to see preview of note
- cmd + P for command menu
- cmd + N is new note
- cmd + click to open note in edit mode/new window
- cmd + O to find and open another file
- cmd + shift + F for search
- cmd + opt + left arrow for going back
- cmd + opt + right arrow for going forward

### Templates

I have uploaded all the templates I use to a [GitHub repository](https://github.com/wozboz/obsidiantemplates). Feel free to download and modify the templates so that they work for you.

### Things I wanna check out in the future

The next "upgrade" of my Obsidian Install will probably be the use of DataView to work with the data I have in my vault. I do not exactly know where I want to go with this, but I am pretty sure something quite cool will come out of it. When I have this figured out, there will be a blogpost so you can profit off of my research as well.