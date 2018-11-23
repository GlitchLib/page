---
layout: index
title: Home
---

# Why Glitch?

Soon &trade;

## Here are some examples!

#### Listen the message

A simple template to start, logging and `!ping` with anwsering `Pong!`?It is possible to do with this example below.</p>

```java
public class MyExampleBot {
  public static void main(String[] args) {
    Property properties = new Property();
    try {
      properties.load("glitch.properties");
    } catch (IOException ignore) {}

    GlitchChat client = GlitchClient.builder()
          .clientId(properties.getProperty("twitch.client_id"))
          .clientSecret(properties.getProperty("twitch.client_secret"))
         .buildAsync().flatMap(client -> GlitchChat.builder(client)
                .botCredentials(properties.getProperty("twitch.bot.access_token"), properties.getProperty("twitch.bot.refresh_token"))
                .buildAsync()).block();

    client.listenOn(MessageEvent.class).subscribe(event -> {
      if (event.getMessage().equalsIgnoreCase("!ping")) {
        event.getChannel().send("Pong!");
      }
    });
  }
}
```

#### Give him some power for ban hammer users

For your granting wish we provide a ban hammer power with a including methods inside the `MessageEvent`.

```java
client.listenOn(MessageEvent.class).subscribe(event -> {
  if (event.getMessage().match("([nN(|\|)][iI1(|)][gG]+[eEaA43][rR]*?)")) {
    event.getUser().subscribe(user -> user.ban(String.format("Saying: %s", event.getMessage()).subscribe()));
  }
});
```