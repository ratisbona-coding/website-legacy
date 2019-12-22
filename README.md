# ratisbona coding e.V. website

This repository contains the code of the ratisbona coding e.V. website. It's built ontop of [Gatsby](https://gatsbyjs.org), [TypeScript](https://typescriptlang.org) and [emotion](https://emotion.sh/).

## Usage

Once you have all dependencies installed via `yarn install`, you should be able to start a dev server using `yarn start`. The website will be running on [localhost:8000](http://localhost:8000), and Gatsby's default GraphiQL instance will be reachable under [/__graphql](http://localhost:8000/__graphql). By running `yarn build`, you can build the website, and using `yarn clean`, the built site will be removed.

## Contributing

Before you dive right the code, please consider the following rough guidelines:

- Currently, we strip all Gatsby JavaScript, since we don't need any interactive elements except for links and maybe videos.
- Try to keep style local to components, don't create global styles. If you really need to create page-wide styles, use [page.css](src/components/page.css).
- Use [`<Link />`](src/components/link.tsx) and [`<Image />`](src/components/image.tsx), since they enforce basic a11y, and work with Gatsby's GraphQL filesystem.
- Images need to be referenced relative to the `src` directory, so if you want to include `src/images/happy-people.png`, use something like `<Image label="A group of happy people" src="images/happy-people.png" >`.
- Blog posts are located in the `src/blog` directory, and require a "frontmatter", which includes the title, date and the posts later url. Similarly to above, images need to be referenced relative to the `src` directory.

## License

The code in this repository is licensed under the [MIT license](LICENSE).
