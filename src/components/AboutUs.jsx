import ustNanangPhoto from "../assets/image/photo/1.png";
import ustYanuar from "../assets/image/photo/2.png";

export default function AboutUs() {
  return (
    <div className="about-us" id="about-us">
      <div className="row">
        <div className="content-left">
          <div className="title">
            <h3>Nanang Haerudin</h3>
            <h4>Komisaris Utama</h4>
          </div>
          <div className="image-main">
            <img src={ustNanangPhoto} alt="" />
          </div>
          <div className="text-absolute">
            <p>
              Pernah mengenyam pendidikan di Sekolah Tinggi Pariwisata Bogor dan
              Universitas Pendidikan Indonesia. Memiliki pengalaman yang
              mendalam pada bidang operasional bisnis hospitality.
            </p>
          </div>
        </div>
        <div className="content-center">
          <div className="title">
            <h2>
              Dewan Komisaris
              <br />
              <span>&</span>
              <br /> Direksi Utama
            </h2>
          </div>
        </div>
        <div className="content-right">
          <div className="title">
            <h3>Yanuar Hadi Saputro</h3>
            <h4>Direktur Utama</h4>
          </div>
          <div className="image-main">
            <img src={ustYanuar} alt="" />
          </div>
          <div className="text-absolute">
            <p>
              Berpengalaman dalam menyelenggarakan kegiatan perjalanan dan event
              olahraga seperti Perak (Pekan Raya Universitas Pakuan 2013),
              Pakuan Cup 2014, Pakuan Cup 2015, dan kegiatan Rihlah bil Barkah
              di Yayasan Pendidikan Insan Kamil Bogor dari 2017-2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
