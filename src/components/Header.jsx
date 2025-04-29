import { useEffect, useState, useRef } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) setIsVisible(false);
      else setIsVisible(true);

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "0.3stransform 0.3s ease",
        zIndex: 1000,
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1>이서윤 & 오민석</h1>
      <p>2025년 9월 17일 오후 1시</p>
      <p>신라호텔 서울</p>
    </header>
  );
}

export default Header;
