---
title: A privacy tool that never phones home
description: Why ClauseGuard reads Terms of Service entirely in your browser, and what that ruled out.
date: 2026-11-24
---

Most of us have scrolled past thousands of words of legal text and clicked "I agree" without reading a line. Buried in those Terms of Service and privacy policies are clauses that matter: binding arbitration, waived class-action rights, permission to sell your data, subscriptions that renew quietly.

I built [ClauseGuard](https://chromewebstore.google.com/detail/clauseguard-terms-privacy/hobknhfcdglmcoognfmgmdclkofljhfi), a Chrome extension that finds and highlights those clauses so you can decide in seconds instead of hours.

## What it does

It scans the page for 40+ clause patterns across seven risk categories, highlights each match in place, and scores it by severity. You can adjust how sensitive it is, and it supports dark mode.

## The constraint I started with

Legal documents are written for lawyers. I wanted something that leveled that a little for everyone else.

But a privacy tool that collects your data would undercut its own point. So the rule from the start was: nothing leaves the browser. ClauseGuard has no server, calls no external APIs, and has no analytics or telemetry. It works offline.

That rule shaped everything else. There's no remote model to send text to and no service to improve the detection after release. Every pattern ships with the extension and runs on your machine.

## Don't take my word for it

Open your browser's developer tools, go to the Network tab, and use the extension on any Terms of Service page. You'll see no requests from ClauseGuard. That's the whole design.

If you've ever wondered what you actually agreed to, [try it](https://chromewebstore.google.com/detail/clauseguard-terms-privacy/hobknhfcdglmcoognfmgmdclkofljhfi). The code is on [GitHub](https://github.com/amoddhopavkar2/clauseguard).
