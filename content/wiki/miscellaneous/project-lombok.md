---
title: Project Lombok
layout: wiki_base
weight: -100
---

# What is this?

**Project Lombok** is a java library that automatically plugs into your editor and build tools, spicing up your java. Never write another getter or equals method again. Early access to future java features such as `val`, and much more.

# Why Project Lombok?

**Project Lombok** is used to reduce boilerplate code for model/data objects, e.g., it can generate getters and setters for those object automatically by using **Lombok annotations**.

# Installing Project Lombok

## Intellij

Community provides a `Lombok Plugin` into all of IntelliJ platform. [Click Here](https://plugins.jetbrains.com/plugin/6317-lombok-plugin) to download them.
Or install using [Plugins Manager](https://www.jetbrains.com/help/idea/managing-plugins.html).

> Go to **File** > **Settings** and **Plugins** tab. Type in marketplace `Lombok Plugin`. Install it and restart IDE.

## Eclipse

Install it using installer. [Click to download](https://projectlombok.org/download)

The JAR file is launchable, so just only dobule-clicking them to open it.
	
> Follow the instructions on the screen. Add JVM args into `eclipse.ini` (this file is in installed source directory) file if you have possibilities. If it is exist you can proceed to next step, when it is a importing our project.
> Sometimes it is not necessarily because Lombok installer adding them into the `eclipse.ini` file. It's up to you.
> ```
> -vmargs -javaagent:lombok.jar
> ```

## Netbeans

The **Netbeans** editor is compatible with lombok.

1. Add `Lombok` to the project libraries.
2. In the project properties, in the section **Build** > **Compiling**, check the `Enable Annotation Processing in Editor` checkbox.