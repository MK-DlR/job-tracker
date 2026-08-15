<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MK-DlR/job_tracker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Job Application Tracker</h3>

  <p align="center">
    Full-stack TypeScript job application tracker with follow-up reminders, status dashboard, and filtering/sorting built for tracking a real job search.
    <br />
    <a href="https://github.com/MK-DlR/job_tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="demo_link">View Demo</a>
    &middot;
    <a href="https://github.com/MK-DlR/job_tracker/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/MK-DlR/job_tracker/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#notes">Notes</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#how-to-use-the-app">How to Use the App</a></li>
        <li><a href="#default-setup-behavior">Default Setup Behavior</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Job application Tracker Screen Shot][product-screenshot]](demo_link)

Here's a blank template to get started. To avoid retyping too much info, do a search and replace with your text editor for the following: `job_tracker`, `Job Application Tracker`, `project_description`, `demo_link`, `project_license`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Express]][Express-url]
- [![Javascript][Javascript]][Javascript-url]
- [![Node.js]][Node-url]
- [![Postgres]][Postgres-url]
- [![Prisma]][Prisma-url]
- [![React][React.js]][React-url]
- [![React-router][React-router]][React-router-url]
- [![TypeScript]][TypeScript-url]
- [![Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Node.js (recommended v22+)
- npm
- PostgreSQL (local instance, or a [Neon](https://neon.com/) account - free tier works)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MK-DlR/job_tracker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up environment variables
   Create .env files in both apps/api and packages/database, each containing:

   ```text
   DATABASE_URL=postgresql://username:password@localhost:5432/job_tracker
   ```

   (swap in your local Postgres credentials, or a Neon connection string)

   Create apps/web/.env:

   ```js
   VITE_API_URL=http://localhost:3000
   ```

4. Set up the database
   ```sh
   cd packages/database
   npx prisma migrate dev
   npx prisma generate
   cd ../..
   ```
5. Start the application
   ```sh
   npm run dev
   ```
   This starts the API server along with watch-mode builds for the shared packages.
6. In a separate terminal, start the frontend
   ```sh
   npm run dev -w apps/web
   ```
7. Open the app at `http://localhost:5173`

### Notes

- Backend: Express + TypeScript, Prisma 7 (driver-adapter based) + PostgreSQL
- Frontend: React + TypeScript + Vite, React Router
- Monorepo: npm workspaces, with packages/shared-types and packages/database shared across apps/api and apps/web
- CORS is configured for local development

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

A personal job application tracker built to learn TypeScript hands-on, applied across a full stack rather than in isolation. Tracks every application from first submission through offer/rejection, including company/role details, resume and cover letter versions, and a 3-day / 1-week / 2-week follow-up reminder schedule based on job-search best practices.

Applications can be logged with company, role, status, resume/cover letter links, and notes. The dashboard shows a live count per status, and each application card automatically calculates whether a 3-day, 1-week, or 2-week follow-up is due based on its applied date.

### How to Use the App

1. Open the app at http://localhost:5173 or visit the [live demo](demo_link)
2. Click "Add New Application" to log a new application
3. Use the filter/sort panel to view applications by status, follow-up due, date, or status order
4. Click "Edit" on any application to update its status or details, or "Delete" to remove it

### Default Setup Behavior

- Tracker starts empty and is meant to be populated with real applications
- Public demo deployment is seeded separately with fictional sample data, kept independent from any personal-use instance

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/MK-DlR/job_tracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/MK-DlR/job_tracker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MK-DlR/job_tracker" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Adrien Newman - [@MK_DlR](https://twitter.com/MK_DlR) - adriennewman92@gmail.com

Project Link: [Repository](https://github.com/MK-DlR/job_tracker) & [Live Demo](demo_link)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Font Awesome](https://fontawesome.com/)
- [Home Office Icon](https://icons8.com/icon/qpWwjSfQST18/home-office) by [Icons8](https://icons8.com/)
- [Favicon Converter](https://favicon.io/favicon-converter/)
- [Othneil Drew's Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center"><img src="images/bow.gif" alt="Majima bowing while wearing a tuxedo"></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MK-DlR/job_tracker.svg?style=for-the-badge
[contributors-url]: https://github.com/MK-DlR/job_tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MK-DlR/job_tracker.svg?style=for-the-badge
[forks-url]: https://github.com/MK-DlR/job_tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/MK-DlR/job_tracker.svg?style=for-the-badge
[stars-url]: https://github.com/MK-DlR/job_tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/MK-DlR/job_tracker.svg?style=for-the-badge
[issues-url]: https://github.com/MK-DlR/job_tracker/issues
[license-shield]: https://img.shields.io/github/license/MK-DlR/job_tracker.svg?style=for-the-badge
[license-url]: https://github.com/MK-DlR/job_tracker/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adrien-newman
[product-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[EJS]: https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=fff
[EJS-url]: https://ejs.co/
[Express]: https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/en/
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Postgres]: https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff
[Vite-url]: https://vite.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
