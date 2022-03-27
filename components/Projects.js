const { FaReact, FaVuejs, FaJava, FaGitAlt } = require("react-icons/fa");
const { DiJavascript1, DiCss3 } = require("react-icons/di");
const {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiGooglecloud,
  SiCplusplus,
  SiSpring,
  SiHibernate,
  SiApachemaven,
  SiStripe,
  SiJavascript,
  SiMysql,
  SiJunit5,
  SiAmazonaws,
  SiTypescript,
  SiReact,
} = require("react-icons/si");
const { AiFillHtml5 } = require("react-icons/ai");

const projectsList = [
  {
    id: 12,
    name: "Covid Trakr",
    description:
      "A Covid-19 data visualiser using the OpenData RESTAPI in combination with various AWS(Amazon Web Services) to provide serverless functionality such as ApiGateway,lambda function as well as machine learning services such as sagemaker to perform future predictions on covid cases along with sentiment analysis on twitter posts using twitter api",
    techStack: [
      { name: "Typescript", Icon: SiTypescript },
      { name: "Reactjs", Icon: SiReact },
      { name: "Tailwindcss", Icon: SiTailwindcss },
      { name: "AWS", Icon: SiAmazonaws },
    ],
    livesite: "https://cst3130-cw2.s3.amazonaws.com/index.html",
    demo: false,
    githubRepo: "https://github.com/SohailMG/covid-tracker",
    image: "/images/CovidTrakr.png",
  },
  {
    id: 4,
    name: "Price Finder",
    description:
      "This is a university project where I implemented a price comparison website on Yeezys,  using Java with Jsoup and Selenium to scrape the data from each website. Selenium was used for some scrapers in cases . I used Spring framework with annotations to manage classes. The data scraped was stored in an SQL database using Hibernate. Threads were used for each scraper to help run scraper simultaneously without interruptions where each would run in a separate thread. I used REACTJS with TailwindCss to display the data from a backend RESTAPI.",
    techStack: [
      { name: "Reactjs", Icon: FaReact },
      { name: "TailwindCss", Icon: SiTailwindcss },
      ,
      { name: "Java", Icon: FaJava },
      { name: "Spring", Icon: SiSpring },
      ,
      { name: "Hibernate", Icon: SiHibernate },
      { name: "Maven", Icon: SiApachemaven },
      { name: "MySQL", Icon: SiMysql },
      { name: "JUNIT", Icon: SiJunit5 },
    ],
    livesite: false,
    demo: "/videos/priceFinderDemo.mp4",
    githubRepo: "https://github.com/SohailMG/price-finder",
    image: "/images/priceFinder.png",
  },
  {
    id: 1,
    name: "Uber Clone",
    description:
      "An Uber app clone using expo , react native with Redux and tailwindcss, Google cloud services are also used for map and directions",
    techStack: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Reactjs", Icon: FaReact },
      { name: "Redux", Icon: SiRedux },
      { name: "Google Cloud", Icon: SiGooglecloud },
    ],
    livesite: false,
    demo: "videos/UberClone.mp4",
    githubRepo: "https://github.com/SohailMG/uber-clone",
    image: "/images/UberClone.png",
  },
  {
    id: 2,
    name: "Amazon Clone",
    description:
      "Full stack amazon clone using nextjs for server side rendering of products,orders and basket items, tailwindcss for responsive design, redux for shopping basket functionality, NextAuth authentication with google and stripe for payment and webhooks",
    techStack: [
      { name: "Nextjs", Icon: SiNextdotjs },
      { name: "Reactjs", Icon: FaReact },
      { name: "Redux", Icon: SiRedux },
      { name: "Google Cloud", Icon: SiGooglecloud },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Stripe", Icon: SiStripe },
      { name: "Tailwindcss", Icon: SiTailwindcss },
    ],
    livesite: "https://amazon-clone-iota-liart.vercel.app/",
    demo: false,
    githubRepo: "https://github.com/SohailMG/amazon-clone",
    image: "/images/AmazonClone.png",
  },
  {
    id: 3,
    name: "Path Finder",
    description:
      "An algorithm visualiser for finding the shortest path using Breath First Search on a 2D Grid",
    techStack: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Vuejs", Icon: FaVuejs },
      { name: "Tailwindcss", Icon: SiTailwindcss },
    ],
    livesite: "https://sohail-pathfinder.netlify.app/",
    demo: false,
    githubRepo: "https://github.com/SohailMG/bfs-visualiser",
    image: "/images/PathFinder.png",
  },
];
module.exports = projectsList;
