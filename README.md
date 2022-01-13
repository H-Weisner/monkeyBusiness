## Intro
I initialised an expo managed app (blank, typescript) and wrote the rest myself.

A few things I just took from other sources to save time etc.. Particularly from the boilerplate I've been using.

Below is the project's structure, with any "recycled" code labelled. 
There is a brief explanation of structure at the bottom.

The structure is only viewable in an IDE on github it'll look horrible.

## Project Structure
Key of "recycled" code:
[1] near identical from ignite, infinite red's boilerplate https://github.com/infinitered/ignite
[1#] stuff I refactored from ignite into my own

App
├── components
│   ├── auto-image-----------[1] makes images easy to deal with
│   ├── button---------------[1#] nice button where you can feed in children
│   ├── wallpaper------------[1] easy background image tool
│   └── index.ts
├── models
│   └── monkey.ts
├── navigators
│   ├── monkey-navigator.tsx
│   ├── navigation-utilities.tsx------------[1#] few nice little utils
│   └── index.ts
├── hooks
│   ├── index.ts
│   ├── useBackButtonHandler.ts------------[1#] allows use of back button on android
│   └── useMonkeyApi.ts
├── screens
│   ├── monkey-screen.tsx
│   ├── troop-screen.tsx
│   ├── index.ts
├── theme
│   ├── color.ts
│   ├── index.ts
│   ├── palette.ts
│   ├── spacing.ts
└── index

**components**
Where the React components live. 
Each component has a directory containing the `.tsx` file, and optionally `.presets`, and `.props` files for larger components.

**models**
Where the app's models live. Would be a bigger deal if I was using Mobx-state-tree. I haven't used redux so I don't know if this is what you;d have.

**navigators**
Where the `react-navigation` navigators live.

**screens**
Where the screen components live. 
A screen takes up the entire screen and is part of the navigation hierarchy. 
Each screen has a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world live here (in this case the monkey API).

**theme**
Where the theme of the application lives.