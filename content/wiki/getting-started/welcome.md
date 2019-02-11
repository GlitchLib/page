---
title: Welcome
layout: wiki_base
aliases:
  - /wiki
  - /wiki/getting-started
weight: 0
---
![](/img/glitch-mug-typo.svg)

## Introduction

Welcome to the Glitch wiki! You can find all important threads on the right side of the page.

# Download / Installation

We shall recommend use a build managers, like a [Gradle](https://gradle.org/) or [Maven](https://maven.apache.org/).

If you don't have familiar with those build managers, you can follow on the setup guides or download Glitch directly via [Bintray](https://bintray.com/stachu540/GlitchLib/Glitch/_latestVersion) repository

### Dependency

#### Gradle

##### Using `glitch-bom`

In Gradle 5.0+ you will not need a Spring Dependency Management, because in this version managed dependency has been implemented. Older versions needs to manage dependecy if you using `glitch-bom`.

##### Groovy-DSL

* `5.0+`

```groovy
repositories {
  jcenter()
  maven { url "https://dl.bintray.com/stachu540/GlitchLib" }
}

dependencies {
  compile enforcedPlatform("io.glitchlib:glitch-bom:$glitch_version")
  compile "io.glitchlib:glitch-core"
  compile "io.glitchlib:glitch-kraken"
  // also you can use glitch-all without using BOM
  compile "io.glitchlib:glitch-all:$glitch_version"
}
```

* Older

```groovy
plugins {
  id "io.spring.dependency-management" version "1.0.6.RELEASE"
}

repositories {
  jcenter()
  maven { url "https://dl.bintray.com/stachu540/GlitchLib" }
}

dependencyManagement {
  imports {
    mavenBom "io.glitchlib:glitch-bom:$glitch_version"
  }
}

dependencies {
  compile "io.glitchlib:glitch-core"
  compile "io.glitchlib:glitch-kraken"
  // also you can use glitch-all without using BOM
  compile "io.glitchlib:glitch-all:$glitch_version"
}
```

##### Kotlin-DSL

* `5.0+`

```kotlin
repositories {
  jcenter()
  maven("https://dl.bintray.com/stachu540/GlitchLib")
}

dependencies {
  compile(enforcedPlatform("io.glitchlib:glitch-bom:$glitch_version"))
  compile("io.glitchlib:glitch-core")
  compile("io.glitchlib:glitch-kraken")
  // also you can use glitch-all without using BOM
  compile("io.glitchlib:glitch-all:$glitch_version")
}
```

* Older

```kotlin
plugins {
  id("io.spring.dependency-management") version "1.0.6.RELEASE"
}

repositories {
  jcenter()
  maven("https://dl.bintray.com/stachu540/GlitchLib")
}

configure<DependencyManagementExtension> {
  imports {
    mavenBom("io.glitchlib:glitch-BOM:$glitch_version")
  }
}

dependencies {
  compile("io.glitchlib:glitch-core")
  compile("io.glitchlib:glitch-kraken")
  // also you can use glitch-all without using BOM
  compile("io.glitchlib:glitch-all:$glitch_version")
}
```


#### Maven

```xml
<repositories>
  <repository>
    <id>GlitchLib</id>
    <url>https://dl.bintray.com/stachu540/GlitchLib</url>
  </repository>
</repositories>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>io.glitchlib</groupId>
      <artifactId>glitch-BOM</artifactId>
      <version>${glitch.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>io.glitchlib</groupId>
    <artifactId>glitch-core</artifactId>
  </dependency>
  <dependency>
    <groupId>io.glitchlib</groupId>
    <artifactId>glitch-kraken</artifactId>
  </dependency>
  <!-- also you can use glitch-all without using BOM -->
  <dependency>
    <groupId>io.glitchlib</groupId>
    <artifactId>glitch-all</artifactId>
    <version>${glitch.version}</version>
  </dependency>
</dependencies>
```

# IDE Setup

If you’ve never used Gradle or Maven before, you should take a look at the setup tutorial:

- [**IntelliJ**](/wiki/getting-started/intellij/) (recommended)
- [**Eclipse**](/wiki/getting-started/eclipse/)
- [**Netbeans**](/wiki/getting-started/netbeans/)

# Support

Glitch and Twitch API Discord's is an excellent place if you have questions about the library.

# Examples

- [Client](/wiki/basic-tutorials/client/)
- [Chat](/wiki/basic-tutorials/chat/)
- [PubSub](/wiki/basic-tutorials/pubsub/)
- [Kraken/Helix](/wiki/basic-tutorials/api/)