# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A Hebrew alphabet learning app for children ("האלף בית שלי" — "My Aleph Bet"). Pure vanilla HTML/CSS/JS — no build step, no framework, no dependencies beyond Google Fonts.

## Running the App

Open `index.html` directly in a browser (no server required). There is no build, lint, or test tooling.

## Architecture

Single-page app with four tabs, all in three files:

- **[app.js](app.js)** — All logic. Structured in sections: `LETTERS` data array → Speech Synthesis → Tab Navigation → Gallery → Quiz → Match → Write → Utils → Init
- **[index.html](index.html)** — Static shell with tab nav and empty containers that JS populates. RTL Hebrew layout (`dir="rtl"`).
- **[style.css](style.css)** — CSS custom properties in `:root` define the color palette (`--c1`–`--c8`, `--primary`, etc.). Color classes `color-0` through `color-6` cycle on gallery cards.

## Key Data Structure

Each entry in `LETTERS` (app.js:7–30) has:
- `char` — the Hebrew character
- `name` / `display` — name with/without nikud (vowel marks)
- `speech` — alternative text for TTS to avoid mispronunciation of common Hebrew words
- `words` — array of `{word, emoji}` example words

## Tab Initialization Pattern

Tabs are lazy-initialized: clicking a tab calls `initQuiz()`, `initMatch()`, or `initWrite()`. Gallery is built once at startup via `buildGallery()`. Each `init*` function resets all state for that tab.

## Speech Synthesis

`speak(text)` (app.js:47) uses the Web Speech API with `he-IL` locale. The `speech` field on each letter overrides TTS text when the letter name is a common Hebrew word that TTS would mispronounce.
