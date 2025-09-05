
import { useEffect, useState } from "react";
import "./footer.css";

function Footer() {
  return (

    <footer className="footer">
      <div className="container">
        <div className="foot-section">
          <div className="row align-items-center">

            <div className="col-lg-6 text-center text-lg-end text-right">
              <div className="text-wrap">
                <h2 className="fw-bold display-5 mb-3">האם אתם מוכנים להתחיל?</h2>
                <p className="lead mb-4">
                  טקסט זה הוא טקסט דמה המשמש להצגת תוכן לדוגמא. כאן יוצג מידע על
                  אודות ייעוץ, תוכן והצעות אישיות.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start foot-btn pl-3">
                  <button className="btn btn-outline-light btn-black input-gray px-4">רישום באתר</button>
                  <button className="btn btn-green  px-4">קבעו פגישה</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center  mb-lg-0">
              <div className="footgirl">
                <img
                  src="/footgirl.png"
                  alt="Hero"
                  className="img-fluid" s
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="last section">
        <div className="container">
          <div className="gray">
            <div className="row">

              <div className="col-lg-3 col-md-4 text-md-end text-center">
                <div className="fbox4">
                  <img src="/logo.png" alt="Logo" className="mb-3" width="180px" height="52px" />
                  <p className="small">
                    בלב חיים בריאים נמצאת תזונה נכונה. אנו מציעים ליווי מקצועי,
                    תפריט מותאם אישית ומשאבים אחרים שיעזרו לכם לאכול נכון,
                    להרגיש חזקים יותר ולחיות טוב – כל יום מחדש.
                  </p>
                  <p className=" green small fw-bold mt-2">
                    המשך קריאה
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-5 text-end">
                <div className="fbox3">
                  <h6 className="fw-bold mb-3">קישורים מהירים</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-decoration-none text-light">דף הבית</a></li>
                    <li><a href="#" className="text-decoration-none text-light">אודות</a></li>
                    <li><a href="#" className="text-decoration-none text-light">שירותים</a></li>
                    <li><a href="#" className="text-decoration-none text-light">מוצרים</a></li>
                    <li><a href="#" className="text-decoration-none text-light">בלוג</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-2  col-7 wtl text-end">
                <div className="fbox2">
                  <h6 className="fw-bold mb-3">מידע נוסף</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-center gap-2">
                      <img src="/phn.png" alt="Phone" width="18" />
                      054-811-4088
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <img src="/insta.png" alt="Instagram" width="18" />
                      Karin_ohana
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <img src="/what.png" alt="WhatsApp" width="18" />
                      054-811-4088
                    </li>
                    <li className="mb-0 d-flex align-items-center gap-2">
                      <img src="/mail.png" alt="Email" width="18" />
                      karin17896@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 text-end">
                <div className="fbox1 br-end">
                  <h6 className="fw-bold mb-3">הצטרפו לרשימת התפוצה</h6>
                  <p className="small">הכניסו את כתובת האימייל שלכם ואנו ניצור אתכם קשר!</p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control text-end input-gray"
                        placeholder="אימייל"
                      />
                    </div>
                    <button type="submit" className="btn w-100 btn-greens">
                      הירשמו לניוזלטר
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="foot-last d-flex justify-content-center align-items-center flex-wrap py-3">


                <div className="d-flex flex-wrap align-items-center text-white-50 small">
                  <a href="#" className="text-white text-decoration-none mx-2">הצהרת נגישות</a>
                  <span>|</span>
                  <a href="#" className="text-white text-decoration-none mx-2">תקנון</a>
                  <span>|</span>
                  <a href="#" className="text-white text-decoration-none mx-2">מדיניות שימוש</a>
                  <span>|</span>
                  <a href="#" className="text-white text-decoration-none  wtl mx-2">© כל הזכויות שמורות – קארין אוחנה 2025 </a>
                  <span>|</span>
                  <a href="#" className="text-white text-decoration-none  wtl mx-2">  עיצוב ופיתוח:</a>
                </div>
                <img
                  src="/creativo.png"
                  alt="CREATIVO"
                  className="footer-logo" />

              </div>
            </div>
          </div>

        </div >
      </div>

    </footer >

  );
}
export default Footer;