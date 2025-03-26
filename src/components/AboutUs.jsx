import ustNanangPhoto from "../assets/image/photo/Frame 17.png";
import ustYanuar from "../assets/image/photo/Frame 22.png";

export default function AboutUs() {
  return (
    <div className="about-us" id="about-us">
      <div className="title">
        <h2><span className="dewan">Dewan</span> <span>Komisaris</span> dan <span>Direksi</span></h2>
      </div>
      <div className="row">
        <div className="content-left">
          <div className="image-main">
            <img src={ustNanangPhoto} alt="" />
          </div>
          <div className="text-absolute">
            <div className="title">
              <h3>Nanang Haerudin</h3>
              <h4>Komisaris Utama</h4>
            </div>
            <p>
              Pernah mengenyam pendidikan di Sekolah Tinggi Pariwisata Bogor dan
              Universitas Pendidikan Indonesia. Memiliki pengalaman yang
              mendalam pada bidang operasional bisnis hospitality.
            </p>
          </div>
        </div>
        <div className="content-right">
          <div className="image-main">
            <img src={ustYanuar} alt="" />
          </div>
          <div className="text-absolute">
            <div className="title">
              <h3>Yanuar Hadi Saputro</h3>
              <h4>Direktur Utama</h4>
            </div>
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
