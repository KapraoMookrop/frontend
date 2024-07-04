import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div class="container p-5 pt-2 bg-primary-light">
        <footer class="pt-5" id="footer">
          <div class="row">
            <div class="col-4">
              <h5>About</h5>
              <p class="fw-light">Chatcha Technology Co., Ltd. repairs tech since 2002: computers, printers, notebooks, MacBooks, iMacs, UPS, and more. We inspect, pick up, drop off in Bangkok, offer free usage consultations</p>
            </div>
      
            <div class="col-2">
              <h5>Partner</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://www.facebook.com/JmcComputer/" class="nav-link p-0 text-muted">JMC Computer</a></li>
                <li class="nav-item mb-2"><a href="https://www.goodspeedcomputer.com" class="nav-link p-0 text-muted">Goodspeed</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/ChiangmaiCDR/?locale=th_TH" class="nav-link p-0 text-muted">Chiangmai CDR</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/pssupply.cnx" class="nav-link p-0 text-muted">PS Supply</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/p/AK-Computer-100083038396856/?paipv=0&eav=AfYSZax2GXPyiygytk5d5V1Ayvn9lrWhYJUzT7BIe_gM-IW1q1BEidUqD7UGGRN-kM8&_rdr" class="nav-link p-0 text-muted">A.K. Computer</a></li>
              </ul>
            </div>
      
            <div class="col-2">
                <h5>Chatcha</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><Link href="/" class="nav-link p-0 text-muted">Home</Link></li>
                  <li class="nav-item mb-2"><Link href="/service" class="nav-link p-0 text-muted">Service</Link></li>
                  <li class="nav-item mb-2"><Link href="/about" class="nav-link p-0 text-muted">About</Link></li>
                  <li class="nav-item mb-2"><Link href="/contact" class="nav-link p-0 text-muted">Contact</Link></li>
                </ul>
              </div>
      
            <div class="col-4">
              <form>
                <h5 class="text-uppercase">contact us</h5>
                <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
                <div class="">
                  <input id="newsletter1" type="text" class="form-control my-2" placeholder="Name"></input>
                  <input id="newsletter2" type="text" class="form-control my-2" placeholder="Email address"></input>
                  <textarea class="form-control my-2 " id="exampleFormControlTextarea1" rows="3" placeholder="Report a problem"></textarea>
                  <button class="btn btn-primary" type="button">Report</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="d-flex flex-column flex-sm-row justify-content-between pt-3 mt-3 border-top border-dark border-3">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><Link class="link-dark" href="https://twitter.com/home?lang=th"><i class="bi bi-twitter fs-3"></i></Link></li>
              <li class="ms-3"><Link class="link-dark" href="https://www.instagram.com"><i class="bi bi-instagram fs-3"></i></Link></li>
              <li class="ms-3"><Link class="link-dark" href="https://www.facebook.com"><i class="bi bi-facebook fs-3"></i></Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
