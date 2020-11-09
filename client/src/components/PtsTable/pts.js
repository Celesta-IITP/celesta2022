import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import "./pts.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1h17MmiTn0MFZXA9TLkEWoficQCb95nqngccKSUbwTN4",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <div className="sp-main">
        <ExamplesNavbar />

        <div style={{ height: "150px" }}></div>

        <div class="outer-container">
          <h1>POINTS TABLE</h1>
          <table>
            <thead>
              <tr>
                <th>Name of CA</th>
                <th>Name of College</th>
                <th>Points</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr class="pts-300">
                  <td class="name">{item.Name}</td>
                  <td class="collegeName">{item.CollegeName}</td>
                  <td class="pts">
                    <i class="fas fa-circle"></i>
                    {item.Points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ height: "150px" }}></div>

        <Footer />
      </div>
    </>
  );
}
