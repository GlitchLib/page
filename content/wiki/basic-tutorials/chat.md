---
title: Message Interface
layout: wiki_base
weight: -100
---

# Getting Started

Before start we need initialize [`Client`](../client) first at all. After initialization we can now getting into the [next step](#initialize-message-intereface-api)

# Initialize Message Intereface API

```java
GlitchChat chat = GlitchChat.builder(client)
        .botCredentials("<access_token>", "<refresh_token>")
        .buildAsync(); // or .build().subscribe(chat -> { /* your script */ })

// connecting
chat.connectAsync(); // or .connect().subscribe();
```


# What's next?

The next step is create communications between channel and bot enviornment. This examples below will you meet them every time.

## Join / Leave channel

This example presenting how to join channel, when you have initialized bot from builder (**see: [how to initialize message interface](#initialize-message-intereface-api)**)

> For e.g. We wana join to `twitch` channel.

```java
chat.join(Channels.get("twitch")).subscribe();
```

Another sample is leaving bot from channel

> For e.g. We wana leaving already joined `twitch` channel.

```java
chat.getChannel("twitch").leave().subscribe();
```

## Get Chat message

```java
chat.on(MessageEvent.class).subscribe(event -> {
  if (event.getMessage().equalsIgnoreCase("!ping")) {
    event.replay(String.format("%s, Pong!", event.getUser().getMentionable()));
  }
});
```

## Listen all moderation actions

```java
chat.on(ModerationEvent.class).subscribe(event -> {
  if (event.getAction() == ModerationAction.BAN) {
    event.replay(String.format("%s has been banned from this channel!", event.getUser().getMentionable()));
  }
});
```

## Javadoc

You need more knowdlege? Feel free to checking [Javadoc](/docs). Also get into Discord sever (link below) for asking more information.