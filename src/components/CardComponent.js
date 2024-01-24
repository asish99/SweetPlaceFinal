import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const CardComponent = ({ arraydata, isForm }) => {
  console.log("ArrayData", arraydata);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };
  return (
    <>
      {arraydata?.map((element) => {
        return (
          <React.Fragment key={element.id}>
            <Card
              key={element.id}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                {element.price ? (
                  <Card.Text key={element.price}>
                    Price: ₹ {element.price}
                  </Card.Text>
                ) : (
                  ""
                )}
                <Card.Text>
                  {isForm !== "home" && (
                    <div>
                      <strong>Address</strong>: {element.address}
                    </div>
                  )}

                  {isForm !== "home" && (
                    <div>
                      <strong>Contact</strong>: {element.contact}
                    </div>
                  )}
                </Card.Text>
                {isForm === "home" && (
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="danger"
                      onClick={() => send(element)}
                      className="col-sm-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Ending */}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CardComponent;
