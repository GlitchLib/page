---
layout: index
title: Home
---

# Why Glitch?

<div>
  <div class="row pb-4">
    <div class="col-lg-2 col-md-3 col-sm-4 text-center">
      <i class="fab fa-4x fa-react" style="color:#6441a4"></i>
      <h4>Reactive Streams</h4>
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8">
      <p>With <a href="https://projectreactor.io"><b>Project Reactor</b></a>, reactive streams is soo easy to use. Without blocking <code>IO</code> we can build a awesome tools using <code>JVM</code> environment.</p>
    </div>
  </div>
  <div class="row pb-4">
    <div class="col-lg-2 col-md-3 col-sm-4 text-center">
      <i class="fas fa-3x fa-rocket" style="color:#6441a4"></i>
      <h4>Faster than light</h4>
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8">
      <p>With reactive streams, the response time minimalize risk throwing any <code>Exception</code>. You choose which response can will be.</p>
    </div>
  </div>
  <div class="row pb-4">
    <div class="col-lg-2 col-md-3 col-sm-4 text-center">
      <i class="fab fa-4x fa-android" style="color:#6441a4"></i>
      <h4>Android</h4>
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8">
      <p><code>API</code> and <code>CredentialManager</code> can be supportive for Android's. You choose what you quering request to the <code>API</code> and which user you need manage to your appliaction.</p>
    </div>
  </div>
  <div class="row pb-4">
    <div class="col-lg-2 col-md-3 col-sm-4 text-center">
      <img src="/img/logo/kotlin.svg" width="56" height="56" class="pb-1" />
      <h4>Kotlin</h4>
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8">
      <p>Supports <b>Kotlin</b> we will provide many options for your code. We can simplify your work, provides supports for this programming language which it is <b>Kotlin</b>.</p>
    </div>
  </div>
</div>

## Here are some examples!

#### Listen the message

A simple template to start, logging and `!ping` with anwsering `Pong!`?It is possible to do with this example below.

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
