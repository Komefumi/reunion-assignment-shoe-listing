# Shoe Listing Assignment For Postion of Front-End Engineer at Reunion

This is the repository containing code for the assignment.

To run the project, install all dependencies and run

```bash
npm run dev
```

And visit `localhost:8181`

The assignment has cut some corners but has still overall been made to deliver on the requirements

Highlights include:

- Extensive use of TypeScript. As many entities as possible are strongly typed
- Extensive Code Organization
- Lightweight development server - utilizes live-server while webpack runs the compilation in dev mode
- SCSS
- CSS Modules (utilized in SCSS)
- Global CSS (Through SCSS) where necessary
- Dynamically generated mock data, that once generated is used from in-memory
- Home-made randomization functions (utilizing Math.random) to create random data
- Painless reducer code thanks to redux-toolkit (pseudo mutations utilized along with easy adding of reducer cases)

Some things that could have been improved:

- Animations
- Cleaner styling
- Responsive Design (currently breaks below a certain viewport width)
