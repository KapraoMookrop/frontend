export default function Home() {
  return (
    <>
      <div class='container'>
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
      </div>
    </>
  );
}
