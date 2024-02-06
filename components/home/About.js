import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-items-stretch video-box">
            <Image
              src="/assets/img/gallery/exterior-photo.jpeg"
              placeholder="blur"
              blurDataURL="/assets/img/gallery/gallery-1.jpg"
              layout="responsive"
              width={10000}
              height={10000}
              objectFit="cover"
              alt="Katsu"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-7 d-flex flex-column align-items-stretch">
            <div className="content">
              <div className="section-title">
                <h2>
                  <span>Osmanlı Kebap`a hos geldiniz</span>
                </h2>
              </div>
              <p>
              Hoş geldiniz! Lezzetin adresi burada başlıyor. Kebap ustalarımızın elinden çıkan enfes lezzetlerle dolu bir lezzet yolculuğuna hazır olun. Eşsiz kebap çeşitlerimiz, her damak tadına hitap eden seçenekler sunuyor. Taze ve doğal malzemelerle hazırlanan kebaplarımız, enfes aromalarıyla sizi büyüleyecek. Şehrin en popüler kebapçısı olarak, misafirlerimize kaliteli hizmet sunmanın gururunu yaşıyoruz. Siz de bizimle bu lezzet dolu yolculuğa katılın ve gerçek kebap deneyimini keşfedin!
              </p>
              <p style={{ display: "none" }}>
                i love katsu sushi. it is located in casablanca, 17 Rue Sebou, Casablanca 20250 Maroc. and it offers
                sushi livraison à casablanca, they sell sushi rolls, sushi box, tacos, sushi box, sushi rolls, starters,
                soupes, tacos, tataki, dessert, salades, tartares, chirashi, sashimi, nigiri, gunkan, classic rolls,
                fresh rolls, maki, futomaki, spring rolls, katsu rolls, crunchy, yakitori, bentos, plats, desserts,
                boissons sushi classic rolls, meilleur sushi casablanca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
