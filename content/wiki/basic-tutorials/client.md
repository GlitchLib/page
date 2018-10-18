---
title: Intialize Client
layout: wiki_base
weight: 0
---

# Initialization Client

```java
Single<GlitchClient> client = GlitchClient.builder()
            .clientId("<client_id>")
            .clientSecret("<client_secret>")
            .credentialStorage(new MyCredentialStorage()) // a custom implementation of CredentialStorage
            .defaultScopes(Scope.USER_READ)
            .build();
```

# Authorize User

`GlitchClient` provides `OAuth` client ready for implementation to your server. Examples below shows how to using them propertly.

## Spring Framework

Spring Framework is popular Java Framework. It should be easy to implement it.

```java
public class GlitchOAuthService {
  @Autowierd
  GlitchClient client;

  @GET("/authorize/twitch")
  public void authorize() {

  }
}
```

## Ktor.io

```kotlin

val state = "<your_custom_state>"

fun Application.twitch() {
  routing {
    get("/authorize/twitch") {
      val params: Parameters = request.queryParameters
      if (params.isEmpty) {
        call.respondRedirect(client.credentialMangager.createAuthorizationUri {
          forceVerify = true
          scopes += Scope.CHAT_LOGIN
          state = state
          uri = 
        }, permanent = true)
      } else {
        when {
          params["error"] != null -> call.respond(HttpStatusCode(500, params["error"]))
          (params["state"] != null && params["state"] != state) call.respond(HttpStatusCode(403, "Incorrect Authorization. Inappropriate \"state\""))
          else -> {
            client.credentialManager.registerUser(params["code"]).subscribe {

            }
          }
        }
      }
    }
  }
}
```