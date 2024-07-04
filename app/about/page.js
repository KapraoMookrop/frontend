export default function About() {
  return (
    <>
    <div className='container'>
      <div class="d-lg-flex flex-row bg-primary rounded-3 mx-2 p-3 my-3" data-aos="flip-up"  data-aos-duration="1000">
        <div class="col">
            <p class="text-center fs-1 m-0 text-light">ABOUT US</p>
            <p class="text-start fs-3 text-center text-light">
                Our software services focus on developing and providing cutting-edge computer programs that meet the modern demands of businesses and individuals seeking efficient applications. With a team of experts who understand both business and technology, we ensure that your software becomes a tool that enhances work efficiency and reduces redundancy in your business processes. Chatcha Company is dedicated to delivering innovative solutions tailored to your needs.
            </p>
        </div>
      </div>
      <div class="bg-light m-0 rounded-3 mx-2">
          <p class="text-center fs-1 m-0 text-uppercase ">We adhere to our vision</p>
          <p class="text-center fs-1 m-0 text-uppercase ">Quality work, impressive service, punctual</p>
      </div>
      <div class="d-lg-flex flex-row bg-light rounded-3 mx-2 p-3 text-center">
        <div class="col">
            <img src="img/about1.png" class="img border-0 rounded-5 about" alt="..." width="300px" data-aos="flip-left" data-aos-duration="1200"></img>
            <p class="text-start fs-4 text-center" data-aos="flip-right" data-aos-duration="1200">
                21 years<br></br> Experience and reliability<br></br> (Established 2002)
            </p>
        </div>
        <div class="col">
            <img src="img/about2.png" class="img border-0 rounded-5 about" alt="..." width="300px" data-aos="flip-left" data-aos-duration="1200"></img>
            <p class="text-start fs-4 text-center" data-aos="flip-right" data-aos-duration="1200">
                80 people <br></br> The team is ready to serve you all the time. <br></br> (7 days 24 hours)
            </p>
        </div>
        <div class="col">
            <img src="img/about3.png" class="img border-0 rounded-5 about" alt="..." width="300px" data-aos="flip-left"  data-aos-duration="1200"></img>
            <p class="text-start fs-4 text-center" data-aos="flip-right" data-aos-duration="1200">
                4500 pieces <br></br> Receive services both inside <br></br> and outside the premises. <br></br> From 8:00 a.m. - 6:00 p.m.
            </p>
        </div>
      </div>
    </div>
    </>
  );
}
