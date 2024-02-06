const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h4>
            <span> Iletisim Bilgileri</span>
          </h4>
        </div>
      </div>

      <div className="container map">
        <iframe
          title="Map"
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.225144770998!2d28.974792076077318!3d41.06407101598749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac63be6611355%3A0xaf7b8f94ef9dce2f!2sGaziantep%20Osmanl%C4%B1%20Kebap!5e0!3m2!1str!2str!4v1707136857049!5m2!1str!2str"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="fa fa-map-marker-alt"></i>
              <h5>Lokasyon:</h5>
              <p>
              Halide Edip Adıvar, Alaattin Elmas Sokağı No:4, <br />
              34856 Şişli/İstanbul
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="fa fa-clock"></i>
              <h5>Çalışma Saatleri:</h5>
              <p>
                09.00 - 23.00
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="fa fa-phone"></i>
              <h5>İletişim Bilgisi:</h5>
              <p>
                (0212) 320 01 01 <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="fab fa-instagram"></i>
              <h5>İnstagram:</h5>
              <p>
                <a
                  aria-label="instagram"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/canakca__"
                  className="instagram"
                >
                  @canakca__
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
