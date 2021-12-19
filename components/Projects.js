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
} = require("react-icons/si");
const { AiFillHtml5 } = require("react-icons/ai");

const projectsList = [
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



