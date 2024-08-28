# Next.js with NextAuth.js Boilerplate

This is a boilerplate project for setting up Next.js with NextAuth.js for authentication.

## Features

- Next.js for server-side rendering and routing
- NextAuth.js for authentication

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ws-schultze/next-auth-nextjs.git
   ```

2. Install dependencies:

   ```bash
   cd next-auth-nextjs
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory
   - Add the following variables:

   ```bash
   AUTH_SECRET= # Added by `npx auth`. Read more: https://cli.authjs.dev
   AUTH_GOOGLE_ID=your-google-client-id
   AUTH_GOOGLE_SECRET=your-google-client-secret
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.
