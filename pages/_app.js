import '../styles/globals.css'
import "animate.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 6,
  color: "#F77316",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.error);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
