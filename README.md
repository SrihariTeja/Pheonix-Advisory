# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Consultation form email delivery

The consultation form sends submissions to the address in `VITE_MAIL_TO` using
[FormSubmit](https://formsubmit.co/). Copy `.env.example` to `.env` for local
development and set `VITE_MAIL_TO` to the receiving inbox. Set the same variable
in your deployment environment before building.

On the first submission, FormSubmit sends an activation email to that inbox.
Open it and confirm the address to enable delivery. Submitted details include
the person's name, email, phone, company, requested service, and message.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
