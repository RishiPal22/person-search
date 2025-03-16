# Person Search

## Description

Person Search is a Next.js application that demonstrates how to implement a search functionality using Next.js Server Actions and react-select's AsyncSelect component. Users can search for people from a pre-populated list and view detailed information about the selected person.

## Features

- Asynchronous search functionality
- Server-side filtering of user data
- Detailed user information display
- Responsive design using Tailwind CSS
- Accessibility-focused UI components from Radix UI
- Custom fonts (Geist Sans and Geist Mono)
- Dark mode support
- Single-file implementation for easy understanding and deployment

## Technologies Used

- Next.js 14.2.11 - React framework for building web applications
- React 18 - JavaScript library for building user interfaces
- TypeScript - Typed superset of JavaScript
- Tailwind CSS - Utility-first CSS framework
- Radix UI - Collection of accessible, unstyled UI components
- Lucide React - Library of open source icons
- React Hook Form - Performant, flexible forms library
- Zod - TypeScript-first schema declaration and validation library
- React Select - Flexible Select Input control for ReactJS
- Next Themes - Abstraction for themes in Next.js projects
- Recharts - Composable charting library built on React components
- date-fns - Modern JavaScript date utility library
- Embla Carousel - Lightweight carousel library
- Sonner - Opinionated toast component for React

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gocallum/person-search.git
cd person-search
```


2. Install the dependencies:

```bash 
npm install

```



3. Create a `.env.local` file in the root directory and add any necessary environment variables.

### Running the Development Server


```bash
npm run dev
```

person-search/
├── app/
│   └── page.tsx
├── public/
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json


## How It Works

1. The application uses a simulated server action to filter user data based on the input query.
2. The `AsyncSelect` component from react-select is used to provide an asynchronous search experience.
3. When a user is selected, their details are displayed in a `UserCard` component.
4. The UI is built using Radix UI components and styled with Tailwind CSS.
5. The application uses Next.js App Router for routing and layout management.
6. Dark mode is supported using the next-themes library.
7. All components (Navbar, Footer, UserSearch, and UserCard) are implemented in a single file for simplicity.

## Customization

- To modify the pre-populated user data, edit the `users` array in the `page.tsx` file.
- To change the styling, you can modify the Tailwind classes in the components.
- To add or remove fields from the user data, update the user objects in the `users` array and modify the `UserCard` component accordingly.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Next.js team for the excellent framework
- Vercel for the deployment platform
- Radix UI for the accessible UI components
- All contributors and supporters of the open-source libraries used in this project

## Contact

Callum Bir - [@callumbir](https://twitter.com/callumbir) 

Project Link: [https://github.com/gocallum/person-search](https://github.com/gocallum/person-search)
