
# Cutshort frontend assignment - Eden onboarding UI

This project demonstrates / Illustrates the UI onboarding flow for a 
product - Eden.


## Design Reference

[Onboarding #Exploration by Eren Türkmen](https://dribbble.com/shots/15669113-Onboarding-Exploration)


## Tech Stack

**Client:** React, Typescript

**Server:** N / A


## Documentation

### Styles

    1. variables.css
    2. classes.css
    3. index.css

**variable.css** - contains css variables based on the design system \
**classes.css** - contains typography classes based on the design system

The font **Inter** is added using the link tag in the `public/index.html`

### Design Components
Built using the native web APIs - **No libraries used**

    1. Button
    2. Input
    3. Steps

### Business Logic
The onboarding flow consists of four stages

    1. Welcome
    2. Workspace
    3. Planning
    4. Completed

These stages are abstracted into its own separate components.

### BLOC - Business logic component
Takes care of the core business logic

    1. getOnBoardingStage(moveStage, state) => state

### Components

    1. <OnBoarding />
    
    Takes care of all the stages and renders the desired stage accordingly
## Run Locally

Clone the project

```bash
  git clone https://github.com/yadhus/cutshort-frontend-assignment.git
```

Go to the project directory

```bash
  cd cutshort-frontend-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

