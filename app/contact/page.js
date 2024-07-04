import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div class="container p-5 pt-2 mb-4 bg-primary-light">
        <footer class="pt-5" id="footer">
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="text-uppercase fs-3">contact us</h5>
                        <p>Chiang mai technical college <br></br> 9 Wiang Kaew Road, Si Phum Subdistrict, Mueang Chiang Mai District, Chiang Mai 50200</p>
                    </div>
                    <div class="col-md-6">
                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.117924878401!2d98.98134974046643!3d18.792897282427738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1703473599077!5m2!1sth!2sth" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </form>
        </footer>
      </div>
    </>
  );
}
