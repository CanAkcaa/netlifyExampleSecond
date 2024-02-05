import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Can Akça",
      profession: "Müşteri",
      quote: "Kebapları gerçekten harika! Lezzetli etleri ve özel baharatlarıyla beni mest ettiler. Kesinlikle tekrar geleceğim!",
    },
    {
      name: "Yunus Yıldırım",
      profession: "Müşteri",
      quote: "Personel çok cana yakın ve hızlı hizmetleriyle beni etkilediler. Kebapları da muhteşemdi, kesinlikle tavsiye ederim!",
    },
    {
      name: "Can Akça",
      profession: "Müşteri",
      quote: "Burada yediğim en iyi kebapları buldum! Etler o kadar yumuşak ve lezzetliydi ki, her ısırıkta mutluluk yaşadım.",
    },
    {
      name: "Yunus Yıldırım",
      profession: "Müşteri",
      quote: "Kebapları gerçekten geleneksel tarifle pişiriyorlar ve bu da tadı mükemmel kılıyor. Mekanın atmosferi de harika, kesinlikle favori mekanımızdan biri oldu!",
    },
    {
      name: "Can Akça",
      profession: "Müşteri",
      quote: "Bugüne kadar denediğim en lezzetli kebaplar burada! Servisleri hızlı ve personel çok kibar. Kesinlikle tekrar geleceğim.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <div className="testimonial-item">
                    <Image
                      src={`/assets/img/testimonials/testimonials-6.png`}
                      layout="fixed"
                      width={105}
                      height={105}
                      className="testimonial-img"
                      alt={testimonial.name}
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.profession}</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
