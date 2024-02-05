import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="#hero">
            <figure>
              {/* <Image
                src="/assets/img/logo-white.png"
                width={115}
                height={70}
                layout="fixed"
                priority
                alt="katsu logo"
                className="img-fluid"
              /> */}
              <h1>Osmanlı Kebap</h1>
            </figure>
          </a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#menu">
                Menü
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Hakkımızda
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                İletişim
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Galeri
              </a>
            </li>
          </ul>
          <i className="fas fa-bars mobile-nav-toggle"></i>
        </nav>

        <a href="tel:+5345148991" className="btn-prim d-none d-lg-block">
          İletişime Geç
        </a>
      </div>
    </header>
  );
};

export default Header;
