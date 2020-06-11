# Composite Product Component

This is a React App that show the basic CRUD operations and is integrated to a NodeJS server which hosts the APIs.

This also demonstrates recursive React Components which have unlimited depth.

![screenshot-1](https://github.com/mrmunar/project-resources/blob/master/composite-products-component/composite-products-component-screenshot-1.png?raw=true)


## Installation

Clone this repo

```bash
git clone https://github.com/mrmunar/composite-products-component.git
```

Install the NodeJS Server

```bash
cd api_server/
npm install
```

Install the React App

```bash
cd webapp/
npm install
```

## Usage

Run the React Dev Server and NodeJS server at the same time (using `concurrently`). The NodeJS server will use port 3000, while the React App will use the port 4000

```bash
cd webapp/
npm run dev
```

Your browser will automatically open and land in `http://localhost:4000`

## Unit Tests

Run the React Unit Tests (built on Jest and React Testing Library)

```bash
cd webapp/
npm test
```
![unit-tests](https://github.com/mrmunar/project-resources/blob/master/composite-products-component/composite-products-component-screenshot-5.png?raw=true)

## Sample Screenshots

**Composite Products List**

![composite-products-list](https://github.com/mrmunar/project-resources/blob/master/composite-products-component/composite-products-component-screenshot-2.png?raw=true)

**Create Composite Product Page**

![composite-products-list](https://github.com/mrmunar/project-resources/blob/master/composite-products-component/composite-products-component-screenshot-3.png?raw=true)

**Edit Composite Product Page**

![composite-products-list](https://github.com/mrmunar/project-resources/blob/master/composite-products-component/composite-products-component-screenshot-4.png?raw=true)