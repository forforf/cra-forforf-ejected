# CRA-Forforf

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## cra-forforf

[cra-forforf](https://github.com/forforf/cra-forforf) is almost a clone of the base Create React App. The only difference is that the CRA Landing Page 
was moved to its own component and organized how I prefer to organize my components.

## Installation

Using `cra-forforf` to create a new project called `my-new-project`

1. Clone repo
```
git clone https://github.com/forforf/cra-forforf.git my-new-project
cd my-new-project
```

2. Update package.json

edit `package.json` name field to `my-new-project`
```
{
  "name": "my-new-project",
  "version": "0.1.0",
  ...

```

3. Install dependencies and start
```
npm install
npm start
```

## Github Workflow Testing

### Local

* Install [act](https://github.com/nektos/act), if not already installed
* On the command line, run `act` which runs the default workflow: `on: push`.
* Follow along as the workflow runs.

Note: `act` is not guaranteed to be identical to the github workflows, so use it as a general guide, not gospel.

Worflows are found in `github/workflows`

### Remote

The github workflows should run automatically when the given github event occurs (i.e., `push' or `pull request`).

## More info

see the [CRA README](README-CRA.md) for more!