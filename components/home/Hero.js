const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.664)),
                  url('assets/img/gallery/exterior-photo.jpeg') no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h1 className="animate__animated animate__fadeInDown">Osmanlı Kebap</h1>
                  <p className="animate__animated animate__fadeInUp">
                  Hoş geldiniz! Lezzetin adresi burada başlıyor. Kebap ustalarımızın elinden çıkan enfes lezzetlerle dolu bir lezzet yolculuğuna hazır olun. Eşsiz kebap çeşitlerimiz, her damak tadına hitap eden seçenekler sunuyor. Taze ve doğal malzemelerle hazırlanan kebaplarımız, enfes aromalarıyla sizi büyüleyecek. Şehrin en popüler kebapçısı olarak, misafirlerimize kaliteli hizmet sunmanın gururunu yaşıyoruz. Siz de bizimle bu lezzet dolu yolculuğa katılın ve gerçek kebap deneyimini keşfedin!
                  </p>
                  <p style={{ display: "none" }}>
                    katsu sushi offers good sushi casablanca prix. it is a sushi club. it delivers also to casablanca
                    maarif.
                  </p>
                  <div>
                    <a href="#menu" className="btn-prim-outline btn-menu  animate__animated animate__fadeInUp scrollto">
                      Menü İçin Tıklayınız
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
