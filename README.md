# <img width="25px" src="./screenshots/logo.png" /> Hoarder

A self-hostable bookmark-everything app with a touch of AI for the data hoarders out there.

![homepage screenshot](https://github.com/MohamedBassem/hoarder-app/blob/main/screenshots/homepage.png?raw=true)

## Features

- 🔗 Bookmark links, take simple notes and store images.
- ⬇️ Automatic fetching for link titles, descriptions and images.
- 📋 Sort your bookmarks into lists.
- 🔎 Full text search of all the content stored.
- ✨ AI-based (aka chatgpt) automatic tagging.
- 🔖 [Chrome plugin](https://chromewebstore.google.com/detail/hoarder/kgcjekpmcjjogibpjebkhaanilehneje) for quick bookmarking.
- 📱 [iOS shortcut](https://www.icloud.com/shortcuts/78734b46624c4a3297187c85eb50d800) for bookmarking content from the phone. A minimal mobile app is in the works.
- 💾 Self-hosting first.
- [Planned] Archiving the content for offline reading.

**⚠️ This app is under heavy development and it's far from stable.**

## Documentation

- [Installation](https://docs.hoarder.app/installation)
- [Configuration](https://docs.hoarder.app/configuration)
- [Security Considerations](https://docs.hoarder.app/security-considerations)
- [Development](https://docs.hoarder.app/Development/setup)

## Demo

You can access the demo at [https://try.hoarder.app](https://try.hoarder.app). Login with the following creds:

```
email: demo@hoarder.app
password: demodemo
```

The demo is seeded with some content, but it's in read-only mode to prevent abuse.

## Stack

- [NextJS](https://nextjs.org/) for the web app. Using app router.
- [Drizzle](https://orm.drizzle.team/) for the database and its migrations.
- [NextAuth](https://next-auth.js.org) for authentication.
- [tRPC](https://trpc.io) for client->server communication.
- [Puppeteer](https://pptr.dev/) for crawling the bookmarks.
- [OpenAI](https://openai.com/) because AI is so hot right now.
- [BullMQ](https://bullmq.io) for scheduling the background jobs.
- [Meilisearch](https://meilisearch.com) for the full content search.

## Why did I build it?

I browse reddit, twitter and hackernews a lot from my phone. I frequently find interesting stuff (articles, tools, etc) that I'd like to bookmark and read later when I'm in front of a laptop. Typical read-it-later apps usecase. Initially, I was using [Pocket](getpocket.com) for that. Then I got into self-hosting and I wanted to self-host this usecase. I used [memos](https://github.com/usememos/memos) for those quick notes and I loved it but it was lacking some features that I found important for that usecase such as link previews and automatic tagging (more on that in the next section).

I'm a systems engineer in my day job (and have been for the past 7 years). I didn't want to get too detached from the web development world. I decided to build this app as a way to keep my hand dirty with web development, and at the same time, build something that I care about and will use everyday.

## Why not X?

- [Pocket](getpocket.com): Pocket is what hooked me into the whole idea of read-it-later apps. I used it [a lot](https://blog.mbassem.com/2019/01/27/favorite-articles-2018/). However, I recently got into home-labbing and became obsessed with the idea of running my services in my home server. Hoarder is meant to be a self-hosting first app.
- [Omnivore](https://omnivore.app/): Omnivore is pretty cool open source read-it-later app. Unfortunately, it's heavily dependent on google cloud infra which makes self-hosting it quite hard. They published a [blog post](https://docs.omnivore.app/self-hosting/self-hosting.html) on how to run a minimal omnivore but it was lacking a lot of stuff. Self-hosting doesn't really seem to be a high priority for them, and that's something I care about, so I decided to build an alternative.
- [Instapaper](https://www.instapaper.com/): Not open source and not self-hostable.
- [memos](https://github.com/usememos/memos): I love memos. I have it running on my home server and it's one of my most used self-hosted apps. I, however, don't like the fact that it doesn't preview the content of the links I dump there and to be honest, it doesn't have to because that's not what it was designed for. It's just that I dump a lot of links there and I'd have loved if I'd be able to figure which link is that by just looking at my timeline. Also, given the variety of things I dump there, I'd have loved if it does some sort of automatic tagging for what I save there. This is exactly the usecase that I'm trying to tackle with Hoarder.
- [Wallabag](https://wallabag.it): Wallabag is a well-established open source read-it-later app written in php and I think it's the common recommendation on reddit for such apps. To be honest, I didn't give it a real shot, and the UI just felt a bit dated for my liking. Honestly, it's probably much more stable and feature complete than this app, but where's the fun in that?
- [Shiori](https://github.com/go-shiori/shiori): Shiori is meant to be an open source pocket clone written in Go. It ticks all the marks but doesn't have my super sophisticated AI-based tagging. (JK, I only found about it after I decided to build my own app, so here we are 🤷).
