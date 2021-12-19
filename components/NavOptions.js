import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function NavOptions({ Icon, text, href ,id}) {
  const [activeLink, setActiveLink] = useState(12);
  const router = useRouter();  

  const changePage = (e, href,id) => {
    e.preventDefault();
    router.push(href);
  };
  useEffect(() => {
      if(router.pathname === '/') {
          setActiveLink(12)
      }else if(router.pathname === '/projects') {
          setActiveLink(13)
      }else if(router.pathname === '/resume'){
          setActiveLink(14)
      }else if(router.pathname === '/contact'){
          setActiveLink(15)
      }
  }, [])

  return (
    <a
      className={`${activeLink == id ? "active" : "sidebar-options"}`}
      href={href}
      onClick={(e) => changePage(e, href, id)}
    >
      <span className="sidebar-text">{text}</span>
      <Icon className="sidebar-icons" />
    </a>
  );
}

export default NavOptions;
