---
title: IntelliJ Setup
layout: wiki_base
weight: -100
---
# Before Starting

Before start we need a download some tools to using our IDE.

### Download

#### Java Development Kit (JDK)

Install it and configure environmental variables: `JAVA_HOME` if not exist, create and adding to `PATH` - `$JAVA_HOME/bin`.

- [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
- [JDK10](https://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html).
- [JDK11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html).

#### Integrated Development Environment (IDE)

**IntelliJ IDEA** is a special programming environment or **Integrated Development Environment** (IDE) largely meant for **Java**. This environment is used especially for the development of programs. It is developed by a company called **JetBrains**, which was formally called **IntelliJ**. It is available in two editions: the Community Edition which is licensed by Apache 2.0, and a commercial edition known as the Ultimate Edition. Both of them can be used for creating software which can be sold. What makes **IntelliJ IDEA** so different from its counterparts is its ease of use, flexibility and its solid design.

- [Editions Comparison](https://www.jetbrains.com/idea/#edition)
- [Download](https://www.jetbrains.com/idea/download/)

# Setup

1. Launch IDE
2. Create New Project [`File` > `New` > `Project`]
3. Select `Gradle`
4. Make sure if you select `Project SDK` to `1.8` or greater
5. Click `Next`
6. Enter a `GroupId` (e.g. `com.github.yourname`)

    > You can choose whatever you want

7. Enter a `ArtifactId` (e.g. `bot`)

    > You can choose whatever you want