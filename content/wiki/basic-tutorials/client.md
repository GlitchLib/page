---
title: Intialize Client
layout: wiki_base
weight: 0
---

<blockquote class="alert alert-info" role="alert">
All endpoints will returns a <a href="https://projectreactor.io/docs/core/release/reference/#mono">Mono</a> or <a href="https://projectreactor.io/docs/core/release/reference/#flux">Flux</a> response. Other way will be commented <i>inside the example</i>.
</blockquote>

# Initialization Client

```java
GlitchClient client = GlitchClient.builder()
            .clientId("<client_id>")
            .clientSecret("<client_secret>")
            .credentialStorage(new MyCredentialStorage()) // a custom implementation of CredentialStorage
            .defaultScopes(Scope.USER_READ)
            .build(); // or .buildAsync() when returns Mono<GlitchClient>
```

# Authorize User

`GlitchClient` provides `OAuth` client ready for implementation to your server. Examples below shows how to using them propertly.

## Getting from Storage

Everytime when you executing [`create()`](/docs/latest/all/glitch/auth/CredentialManager.html#create(java.lang.String,java.lang.String)) or [`buildFromCredentials()`](/docs/latest/all/glitch/auth/CredentialManager.html#buildFromCredentials(glitch.auth.UserCredential)) methods from [`CredentialManager`](/docs/latest/all/glitch/auth/CredentialManager.html) will automatically add your [`Credential`](/docs/latest/all/glitch/auth/objects/json/Credential.html) to credential [`Storage`](/docs/latest/all/glitch/auth/store/Storage.html).

### Getting user by name

<blockquote class="alert alert-danger" role="alert">
For getting users with ignore case or soemthing else, please take a look more details about <a href="https://www.tutorialspoint.com/java/java_regular_expressions.htm">Regular Expressions</a>
</blockquote>

```java
client.getCredentialManager().getCredentialStorage().getByLogin("^(?i:twitch)");
```

## Register a new Credential

To creating credential you need a `access_token` and `refresh_token`.

```java
client.getCredentialManager().buildFromCredentials("<access_token>", "<refresh_token>");
```

## Authorizing user

<blockquote class="alert alert-danger" role="alert">
This library support only <a href="https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#oauth-authorization-code-flow">Authorization Code Flow</a>
</blockquote>

To authorizing user via OAuth2 we need provide `base_url` of your service and `code` (from your query parameter) when it is authorization code for creating your credentials.

```java
client.getCredentialManager().create("<code>", "<base_url>");
```