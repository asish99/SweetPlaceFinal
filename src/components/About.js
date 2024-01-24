import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "./images/about.jpg";
import "./style.css";

export default function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <div className="w-75 m-auto">
              <h2 className="text-danger">About Us</h2>
              <p>
                Sweet Place Private Limited is a well-recognized name in the
                hospitality industry in Northern India. Currently, we are
                present in New Delhi, Gurgaon, and Faridabad. Sweet Place
                Private Limited is very popular among its customers, and we owe
                this success to our relentless drive to maintain high quality,
                and our passion for customer satisfaction. Sweet Place Private
                Limited is synonymous with the sweet, Dhoda, which is made using
                a special benchmarked recipe that has been passed down
                generations.
              </p>
              <h2 className="text-danger">Our Legacy</h2>
              <p>
                It was in the early 1960s, when Sh. Om Prakash Kathuria started
                the journey towards a brighter future. The then small sweet shop
                has now flourished into a family owned enterprise with a total
                of 19 outlets across NCR which consists 13 outlets in Gurgaon, 4
                outlets in Faridabad, 1 Outlet in Sohna and 1 Outlet in Delhi.
                These outlets serve Sweets, and cuisines spanning Indian,
                Continental, Chinese, South Indian & Regional foods. Om Sweets
                Private Limited follows the casual dining concept and provides a
                warm and hospitable ambiance in the outlets. Today, Sweet Place
                Private Limited is a food business group with special ventures
                focused on Sweets, Multi cuisine Restaurants and Bakery. Sweet
                Place Private Limited is very popular among its customers, and
                we owe this success to our relentless drive to maintain high
                quality, and our passion for customer satisfaction. Om Sweets
                Private Limited is synonymous with the sweet, Dhoda, which is
                made using a special bench marked recipe that has been passed
                down generations. Om Sweets Private Limited has major expansion
                plans and will find presence across the country through express
                retail outlets, takeaways, casual dining retail outlets for
                family dining. The group plans to enter the export market of
                ready-to-eat packed snacks and namkeens. This will start with
                exports to the United States, Europe and Middle East markets.
              </p>
              <div className="about__section_third_container">
                <div className="col-md-6">
                  <img
                    src={about}
                    alt="sweet"
                    className="about__section3"
                  ></img>
                </div>
                <div className="col-md-6">
                  <h2 className="text-danger">Our Motto</h2>
                  <p>
                    We strive to impress our customers by giving them the
                    highest degree of service possible and by providing them
                    with the freshest, finest & good quality food at reasonable
                    prices, in a soothing and comfortable environment. Om Sweets
                    Private Limited has major expansion plans to open retail
                    outlets across India to sell sweets, snacks and ready-to-eat
                    titbits and fast food products in different formats. Om
                    Sweets Private Limited will find presence across the country
                    through express retail outlets, takeaways, casual dining
                    retail outlets for family dining.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
