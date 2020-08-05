import React from "react";
import { Card, Form, Label, Button, Input } from "reactstrap";
import './About.css'

function About() {
  return (
    <div className="card">
      <div className="container">
      <h2 className="title">Send us a message</h2>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <Form>
            <div className="form-group">
              <Label for="exampleInputEmail1">Your Name</Label>
              <Input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              >
                {" "}
              </Input>
            </div>
            <div className="form-group">
              <Label for="exampleInputEmail1">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></Input>
            </div>
            <div className="form-group">
              <Label for="exampleInputEmail1">Phone no</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter phone no "
              ></Input>
            </div>
            <div className="form-group">
              <Label for="exampleFormControlTextarea1">your Message</Label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <Button type="submit" className="btn">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-12 col-md-4 col-content">
          <div className="right-side">
            <div className="icon-class">
              <i className="fa fa-cloud"></i>
            </div>
            <div className="description">
              <h5>find us at office </h5>
              <p>
                Bld Mihail Kogalniceanu, nr. 8,{"\n"}
                7652 Bucharest,{"\n"}
                Romania
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="icon-class">
              <i className="fa fa-cloud"></i>
            </div>
            <div className="description">
              <h5>Give us a ring </h5>
              <p>
                Michael Jordan{"\n"}
                +40 762 321 762{"\n"}
                Mon - Fri, 8:00-22:00
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="icon-class">
              <i className="fa fa-cloud"></i>
            </div>
            <div className="description">
              <h5>legal information </h5>
              <p>
                Creative Tim Ltd.{"\n"}
                VAT · EN2341241{"\n"}
                IBAN · EN8732ENGB2300099123{"\n"}
                Bank · Great Britain Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
