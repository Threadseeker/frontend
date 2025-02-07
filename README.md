# Threadseeker Frontend

This is the frontend repo for the [Threadseeker project](https://threadseeker.app), the activity level lookup tool for Threads. You can easily modify it to create your own lookup service.

## Tech Stack

- Nuxt 3
- Tailwind CSS
- Typescript
- Nuxt Content
- Nuxt i18n
- [Shadcn Vue](https://shadcn-vue.com/)
- [Supabase](https://supabase.nuxtjs.org/)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

Copy the `.env.example` file to `.env` and set the appropriate environment variables.
```bash
cp .env.example .env
```

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

## Use Your Own API
This project has only frontend code, you can use your own API to get the data.

To start building your own API to integrate with this frontend, you can follow the [API documentation](/docs/api.md) as a reference.

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.





