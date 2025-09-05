import React from "react";
import "./home.css";
// import { useNavigate } from "react-router-dom";

function Home() {
// const navigate = useNavigate();  

  //  const handleLogout =()=>{
  //       localStorage.removeItem("token");
  //       navigate('/login');
  //   };

  return (
    <div>
      
      <section
        className="hero"
      // style={{ backgroundImage: "url('/background.png' )", maxHeight:"850px",  width:"100%", backgroundSize:"cover", backgroundPosition:"center", display:"flex", alignItems:"center", justifyContent:"space-around", flexWrap:"wrap", padding:"20px"}}
      >
      {/* <div><button  onClick={handleLogout}  className="btn btn-secondary">LOGOUT</button></div> */}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge bg-light text-dark mb-3">
            קארין אותנה - דיאטנית מנטלית
          </span>
          <h1 className="display-5 fw-bold text">שיפור מערכת יחסים, עם אוכל.</h1>
          <div className="mt-4"></div>
        </div>
        <img src="/banner-img.png" alt="banner-img" style={{ width: "503px" }} className="banner-img" />
      </section>


      <section className="rectangle1 services-section " style={{ padding: "120px 0 120px 0" }}>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-md-3 col-sm-6 text-center mb-4">
              <div className="service-card">
                <div className="circle">
                  <img src="/4.png" alt="ליווי אישי" className="img-fluid" />
                  <div className="circle-decoration">
                    <img
                      src="/4im.png"
                      alt="חוברת מתכונים"
                      className="img-fluid"
                    />
                    <h5>ליווי אישי</h5>
                    <p>אונליין שירותי ייעוץ מקצועיים המותאמים אישית</p>
                  </div>
                  <button className="arrow-btn">←</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center mb-4">
              <div className="service-card">
                <div className="circle">
                  <img src="/3.png" alt="קורס דיגיטלי" className="img-fluid" />
                  <div className="circle-decoration">
                    <h5>קורס דיגיטלי</h5>
                    <img
                      src="/3im.png"
                      alt="חוברת מתכונים"
                      className="img-fluid"
                    />
                    <p>הרצאה כוללת בנושא אכילה רגשית</p>
                  </div>
                  <button className="arrow-btn">←</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center mb-4">
              <div className="service-card">
                <div className="circle">
                  <img src="/2.png" alt="חבילת כלים" className="img-fluid" />
                  <div className="circle-decoration">
                    <img
                      src="/2im.png"
                      alt="חוברת מתכונים"
                      className="img-fluid"
                    />
                    <h5>חבילת כלים</h5>
                    <p>כל מה שנשאר בחוץ, מתחילים מבפנים</p>
                  </div>
                  <button className="arrow-btn">←</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center mb-4">
              <div className="service-card">
                <div className="circle">
                  <img src="/1.png" alt="חוברת מתכונים" className="img-fluid" />
                  <div className="circle-decoration">
                    <img
                      src="/1im.png"
                      alt="חוברת מתכונים"
                      className="img-fluid"
                    />
                    <h5>חוברת מתכונים</h5>
                    <p>הצורך בגיוון מנות, מימוש בתהליך השונה</p>
                  </div>
                  <button className="arrow-btn">←</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="rectangle2 nutrition-section">
        <div className="container">
          <div className="row">

            {/* LEFT: Text Content */}
            <div className="col-md-6 about-section">
              <div className="text-content">
                <p className="subtitle">עלינו</p>
                <h2 className="title">מדריך הדרך לחיים מאוזנים</h2>
                <p className="description">
                  בלב חיים בריאים נמצאת תזונה חכמה. אנו מציעים ליווי מקצועי,
                  תכניות מותאמות אישית ונשארים אתכם שיעזרו לכם לאכול נכון,
                  להרגיש חזקים יותר ולחיות טוב – כל יום מחדש.
                </p>
                <p className="description secondary">
                  טקסט זה הוא טקסט דמה שממשמש להצגת תוכן לדוגמה. כאן מופיע מידע
                  על שירותי ייעוץ תזונתי מותאמים אישית, ליווי מקצועי, בניית
                  תפריטים בריאים והכוונה לאורח חיים מאוזן ובריא.
                </p>
                <button className="btn-read-more">קרא עוד</button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="col-md-6 image-section">
              <img
                src="/nutrition.png"
                alt="Nutrition"
                className="img-fluid nutrition-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="rectangle3">
        <div className="container-fluid">
          <div className="row g-0 align-items-stretch">

            {/* Left big girl image */}
            <div className="col-lg-4 d-flex">
              <div className="girlimg w-100 h-100">
                <img src="/9.png" alt="girl" />
              </div>
            </div>

            {/* Right content area */}
            <div className="col-lg-8 d-flex flex-column">

              {/* Top text */}
              <div className="txtwrap2 w-100">
                <h2>אסטרטגיית כושר</h2>
                <h4>המקום שבו הגוף והנפש מוצאים הרמוניה דרך הכושר</h4>
                <p>
                  טקסט זה הוא טקסט דמה המשמש להצגת תוכן לדוגמה. כאן יופיע מידע על שירותי ייעוץ תזונתי מותאמים אישית
                </p>
              </div>


              <div className="row g-0 flex-grow-1">
                <div className="col-lg-6 d-flex">
                  <div className="txtwrap3 w-100 h-100">
                    {/* Row 1 */}
                    <div className="info-item">
                      <div className="info-icon">
                        <img src="/fingerprint.png" alt="icon" />
                      </div>
                      <div className="info-text">
                        <h4>למה בוחרים בנו</h4>
                        <p>
                          טקסט זה הוא טקסט דמה המשמש להצגת תוכן לדוגמה.
                          כאן יופיע מידע על שירותי ייעוץ תזונתי טקסט זה הוא טקסט דמה ייעוץ תזונתי
                        </p>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="info-item">
                      <div className="info-icon">
                        <img src="/thumb.png" alt="icon" />
                      </div>
                      <div className="info-text">
                        <h4>היתרונות שלנו</h4>
                        <p>
                          טקסט זה הוא טקסט דמה המשמש להצגת תוכן לדוגמה.
                          כאן יופיע מידע על שירותי ייעוץ תזונתי טקסט זה הוא טקסט דמה ייעוץ תזונתי
                        </p>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="info-item">
                      <div className="info-icon">
                        <img src="/fingerprint.png" alt="icon" />
                      </div>
                      <div className="info-text">
                        <h4>מה התהליך</h4>
                        <p>
                          טקסט זה הוא טקסט דמה המשמש להצגת תוכן לדוגמה.
                          כאן יופיע מידע על שירותי ייעוץ תזונתי טקסט זה הוא טקסט דמה ייעוץ תזונתי
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="btn-group-custom">
                      <button className="btn btn-dark">קבעו פגישה</button>
                      <button className="btn btn-outline-dark">המוצרים שלנו</button>
                    </div>
                  </div>
                </div>


                {/* Right small girl image */}
                <div className="col-lg-6 d-flex">
                  <div className="girlimg2 w-100 h-100">
                    <img src="/8.png" alt="girl2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section py-5" style={{ backgroundColor: "#F7FBF5" }}>
        <div className="container">
          <div className="row text-center justify-content-center flex-row-reverse">

            {/* Item 1 */}

            <div className="col-lg-3 col-6 mb-4 mb-lg-0">
              <h2>10.5K</h2>
              <p>עוקבים מרוצים</p>
            </div>

            {/* Item 2 */}
            <div className="col-lg-3 col-6 mb-4 mb-lg-0 border-start">
              <h2>+149</h2>
              <p>ק״ג פחות ללקוחותינו</p>
            </div>
            {/* Item 3 */}
            <div className="col-lg-3 col-6 mb-4 mb-lg-0 border-start">
              <h2>+99</h2>
              <p>מתכונים מוצלחים</p>
            </div>

            {/* Item 4 */}
            <div className="col-lg-3 col-6 mb-4 mb-lg-0 border-start">
              <h2>10+</h2>
              <p>שנות ניסיון</p>
            </div>
          </div>
        </div>
      </section>





    </div>
  );
}
export default Home;
