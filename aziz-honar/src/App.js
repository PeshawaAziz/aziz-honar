import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  console.log(text);
  console.log(lang);
  console.log(name);

  function print(txt, lng, nme) {
    setResult(
      `${txt}\n\n#${lng} #${nme}\n\n🆔@aziz_honar\n🆔instagram.com/aziz.honar`
    );
  }

  return (
    <div className="App">
      <Card className="p-1 m-1 main-card" style={{ borderRadius: "0.8rem" }}>
        <CardImg
          className="no-select"
          src="https://s17.picofile.com/file/8416500342/calligraphy_2.jpg"
          alt="Calligraphy"
          style={{ borderRadius: "0.6rem" }}
        />
        <CardBody>
          <CardTitle tag="h5" className="title" style={{ fontSize: "1.4rem" }}>
            پست ساز هنرکده آزیز
          </CardTitle>
          <Form>
            <InputGroup>
              <Input
                id="data1"
                className="text rounded-lg mb-2"
                type="textarea"
                color="primary"
                style={{ height: "10rem", resize: "none" }}
                placeholder="شعر یا متن"
                onChange={(val) => setText(val.target.value)}
              />
            </InputGroup>
            <InputGroup className="float-right" style={{ width: "49%" }}>
              <Input
                id="data2"
                className="text"
                placeholder="زبان"
                onChange={(val) => setLang(val.target.value)}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText className="text-addon">#</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="float-left" style={{ width: "49%" }}>
              <Input
                id="data3"
                className="text"
                placeholder="شاعر یا نویسنده"
                onChange={(val) => setName(val.target.value)}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText className="text-addon">#</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FormGroup className="mb-0">
              <Label className="mt-3">🆔@aziz_honar</Label>
              <br />
              <Label>🆔instagram.com/aziz.honar</Label>
            </FormGroup>
            <Button
              className="btn btn-sm rounded-lg mt-2"
              color="success"
              style={{ fontSize: "1.2rem" }}
              onClick={() => print(text, lang, name)}
            >
              تولید پست
            </Button>
            <FormGroup className="mb-0">
              <Input
                id="output"
                className="text rounded-lg mt-3"
                type="textarea"
                color="primary"
                style={{ height: "10rem", resize: "none" }}
                placeholder="خروجی"
                value={result}
                onChange={(val) => setResult(val.target.value)}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
