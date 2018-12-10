---
title: PubSub
layout: wiki_base
weight: -300
---

<blockquote class="alert alert-info" role="alert">
All endpoints will returns a <a href="https://projectreactor.io/docs/core/release/reference/#mono">Mono</a> or <a href="https://projectreactor.io/docs/core/release/reference/#flux">Flux</a> response. Other way will be commented <i>inside the example</i>.
</blockquote>

<blockquote class="alert alert-danger" role="alert">
Currently <b class="alert-link">Extension Broadcast System</b> is not supported on this library. In the next releases will be supporting aswell.
</blockquote>

# Getting Started

Before start we need initialize [`client`](../client) first at all. After initialization we can now getting into the [next step](#initialize-message-intereface-api)

## Initialization Client

```java
GlitchPubSub client = GlitchPubSub.builder(client)
              // register topic after initialize connection
              .activateTopic(Topic.videoPlayback("<channel_name>"))
              // register topic and don't activate it
              .setTopic(Topic.following(<channel_id>))
              .build(); // or .buildAsync() which returns Mono<GlitchPubSub>

// connecting
chat.connect().block(); /* returns void - block() is required to execute connections */
```

## Listening who's following a channel

```java
client.listenOn(FollowEvent.class).subscribe(event -> {
  System.out.println(String.format("%s is following the channel!", event.getData().getUsername()));
});
```