## Intro
I initialised an expo managed app (blank, typescript) and wrote the rest myself.

A few things I just took from other sources to save time etc.. Particularly from the boilerplate I've been using.

Below is the project's structure, with any "outsourced" code labelled. 
There is a brief explanation of structure at the bottom.


## Project Structure
Key of "recycled" code:
[1] ignite, infinite red's boilerplate https://github.com/infinitered/ignite
[1#] hooks from ignite reused and put into their own files

App
├── components
│   ├── auto-image------------[1] makes images easy to deal with
│   ├── screen------------[1] simplifies scrolling behaviour
│   ├── button
│   └── index.ts
├── models
│   ├── monkey
│   │   ├── monkey.test.ts
│   │   ├── monkey.ts
│   ├── troop
│   │   ├── troop.test.ts
│   │   └── troop.ts
├── navigators
│   ├── monkey-navigator.tsx
│   ├── navigation-utilities.tsx------------[1#] 
│   └── index.ts
├── hooks
│   ├── index.ts
│   └── useBackButtonHandler.ts------------[1#] allows use of back button on android
├── screens
│   ├── error
│   │   ├── error-boundary.tsx------------[1] helps with errors
│   │   └── error-component.tsx------------[1] " " "
│   ├── monkey-screen.tsx
│   ├── troop-screen.tsx
│   ├── index.ts
├── services/api
│   └── monkey-api.ts
├── theme------------[1] layout pinched from ignite
│   ├── fonts
│   │   ├── index.ts
│   │   ├── manrope.ttf------------the closest free font I could find to CarbonCode's, I didn't choose it for the name
│   │   └── selection.json
│   ├── color.ts
│   ├── index.ts
│   ├── palette.ts
│   ├── spacing.ts
│   ├── timing.ts
│   └── typography.ts
└── index

**components**
Where the React components live. 
Each component has a directory containing the `.tsx` file, and optionally `.presets`, and `.props` files for larger components.

**models**
Where the app's models live. 

**navigators**
Where the `react-navigation` navigators live.

**screens**
Where the screen components live. 
A screen takes up the entire screen and is part of the navigation hierarchy. 
Each screen has a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world live here (in this case the monkey API).

**theme**
Where the theme of the application lives (spacing, colors, and typography).