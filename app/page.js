import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../app/component/nav.js"

export default function Home() {
  return (
    <>
      <div class='container'>
        <Nav/>
        <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
              <img src="img/CMTC.jpg" class="d-block w-100 img-fluid " alt="..."></img>
              </div>
              <div class="carousel-item">
              <img src="img/slide 1.png" class="d-block w-100 img-fluid " alt="..."></img>
              </div>
              <div class="carousel-item">
              <img src="img/slide 2.png" class="d-block w-100 img-fluid" alt="..."></img>
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="d-md-flex flex-row my-5">
            <div class="col mb-2" data-aos="fade-right">
                <div class="card">
                    <img src="img/fix1.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">Repair Hardware</h5>
                      <p class="card-text">Repair, maintenance and warranty services for IT Infrastructure equipment for the corporate business sector To ensure that the IT system can work continuously without interruption.</p>
                      <a href="#" class="btn btn-success btn-sm">Read More...</a>
                    </div>
                </div>
            </div>
            <div class="col mb-2 mx-2"  data-aos="fade-up">
                <div class="card">
                    <img src="img/fix2.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">Remove malware</h5>
                      <p class="card-text">Scan and remove malware and other threats. protection against current and future infections. Secure your devices with the award-winning, malware-fighting software trusted by experts</p>
                      <a href="#" class="btn btn-success btn-sm">Read More...</a>
                    </div>
                </div>
            </div>
            <div class="col mb-2" data-aos="fade-left">
                <div class="card">
                    <img src="img/fix3.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title" >Network security</h5>
                      <p class="card-text">Network security involves a variety of technologies, policies, and practices designed to prevent or mitigate the risks associated with cyber attacks, malware, and other security threats.</p>
                      <a href="#" class="btn btn-success btn-sm" id="hardware">Read More...</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-5 bg-primary-subtle">
        <footer class="py-5" id="footer">
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
                  <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-muted">Home</a></li>
                  <li class="nav-item mb-2"><a href="#hardware" class="nav-link p-0 text-muted">Service</a></li>
                  <li class="nav-item mb-2"><a href="#about" class="nav-link p-0 text-muted">About</a></li>
                  <li class="nav-item mb-2"><a href="#contact" class="nav-link p-0 text-muted">Contact</a></li>
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
      
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-dark border-3">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="https://twitter.com/home?lang=th"><i class="bi bi-twitter fs-3"></i></a></li>
              <li class="ms-3"><a class="link-dark" href="https://www.instagram.com"><i class="bi bi-instagram fs-3"></i></a></li>
              <li class="ms-3"><a class="link-dark" href="https://www.facebook.com"><i class="bi bi-facebook fs-3"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
     </div>
    </>
  );
}
