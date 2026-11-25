# Pothos, a demo app for pr-clip

A made-up plant-watering app with fake data. It exists to show [pr-clip](https://github.com/jeltehomminga/pr-clip), a Claude Code skill that films a pull request as a before/after clip. `main` is the before, and the open pull request is the after.

## Run it

Needs macOS with Xcode, Node 24 and an iOS simulator.

```bash
npm ci
npx expo run:ios        # builds the dev client once, then starts Metro
```

- Theme follows the simulator: `xcrun simctl ui booted appearance dark`.
- Dutch: `xcrun simctl launch booted dev.stellarweb.pothos -AppleLanguages "(nl)"`.

## Make the clip yourself

Install pr-clip (its README), open Claude Code in this folder and ask for "a PR clip of jeltehomminga/pr-clip-demo#1".
