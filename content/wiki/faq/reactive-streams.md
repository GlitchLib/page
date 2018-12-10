---
title: Reactive Streams
layout: wiki_base
weight: -200
---

# What is it?

**Reactive Streams** is an initiative to provide a standard for asynchronous stream processing with **non-blocking** back pressure. This encompasses efforts aimed at runtime environments (JVM and JavaScript) as well as network protocols.

**Reactive programming** is a declarative programming paradigm concerned with data streams and the propagation of change. With this paradigm it is possible to express static (e.g., arrays) or dynamic (e.g., event emitters) data streams with ease, and also communicate that an inferred dependency within the associated execution model exists, which facilitates the automatic propagation of the changed data flow.

# Why Project Reactor?

**Project Reactor** is a fully non-blocking reactive programming foundation for the JVM, with efficient demand management (in the form of managing "backpressure"). It integrates directly with the Java 8 functional APIs, notably `CompletableFuture`, `Stream`, and `Duration`. It offers composable asynchronous sequence APIs `Flux` (for [N] elements) and `Mono` (for [0|1] elements), extensively implementing the [Reactive Streams](http://www.reactive-streams.org/) specification.

# How to use it?

The solutions helps provide non-blocking I/O operations for `Request` and `Response`. Using `OkHttpClient` we can now operate quering using **Project Reactor**. here is example for booth solutions. Anything is on [documentation](https://projectreactor.io/docs/core/release/reference/#core-features) of thsi project.