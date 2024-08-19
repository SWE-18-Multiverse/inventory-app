![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Inventory App

**This template is adapted from [MultiverseLearningProducts/inventory-app](https://github.com/MultiverseLearningProducts/inventory-app).**

You are a team of developers for an e-commerce company. The engineering team is rebuilding their inventory tracking app from the ground up. Your team has been tasked with creating a full-stack RESTful CRUD application to track the items.

## Getting Started

In one terminal window:

1. `cd server`
2. `npm install`
3. `npm run seed`
4. `npm run dev`

In another terminal window:

1. `cd client`
2. `npm install`
3. `npm run dev`

## Inventory App "Tiers"

The tiers describe different levels of functionality in your application with the difficulty becoming more complex as you advance through them.

Your team should strive to finish at least the first 4 tiers. You can attempt some of the bonus material if you have time.

### Tier 1: MVP Application

#### A user should be able to view all items.

On the back end, you'll need:

- A prepared statement to select all items from the `items` table (this has been **provided** for you in `server/db/db.js`).
- A `GET /items` route (this has been **provided** for you in `server/app.js`).

On the front end, you'll need:

- A view for all items (this has been **started** for you in `client/src/components/Inventory.jsx`).

#### A user should be able to view a single item.

On the back end, you'll need:

- A prepared statement to select an item from the `items` table by `id` (this has been **provided** for you in `server/db/db.js`).
- A `GET /items/:id` route (this has been **provided** for you in `server/app.js`).

On the front end, you'll need:

- A view for a single item (this has been **started** for you in `client/src/components/Item.jsx`).

### Tier 2: Adding an Item

On the back end, you'll need:

- A prepared statement to insert a row into the `items` table (this has been **provided** for you in `server/db/db.js`).
- A `POST /items` route.

On the front end, you'll need:

- A form that sends a `POST` request to `/items` on submit.

### Tier 3: Deleting an Item

On the back end, you'll need:

- A prepared statement to delete a row from the `items` table by `id`.
- A `DELETE /items/:id` route.

On the front end, you'll need:

- A button that sends a `DELETE` request to `/items/:id` on click.

### Tier 4: Updating an Item

On the back end, you'll need:

- A prepared statement to update an item in the `items` table.
- A `PATCH /items/:id` route.

On the front end, you'll need:

- A form that sends a `PATCH` request to `/items/:id` on submit.

### Tier 5: Bonus Stuff

On the back end, you could try:

- Adding server-side validation.
- Moving the `/items` routes into a router.

On the front end, you could try:

- Adding your own CSS.
- Adding a search input and filtering the inventory by search terms.
- Adding a select menu and filtering the inventory by category.
- Adding a basket page and letting users add items to their basket.

But don't limit yourself to these ideas!
