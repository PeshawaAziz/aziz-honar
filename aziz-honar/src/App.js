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
  return (
    <div className="App">
      <Card className="p-1 m-1 main-card" style={{ borderRadius: "0.8rem" }}>
        <CardImg
          className="no-select"
          src="images/calligraphy-2.jpg"
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
                className="text rounded-lg mb-2"
                type="textarea"
                color="primary"
                style={{ height: "10rem", resize: "none" }}
                placeholder="شعر یا متن"
              />
            </InputGroup>
            <InputGroup className="float-right" style={{ width: "49%" }} >
              <Input placeholder="زبان" className="text" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="text-addon">#</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="float-left" style={{ width: "49%" }} >
              <Input placeholder="شاعر یا نویسنده" className="text" />
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
            >
              تولید پست
            </Button>
            <FormGroup className="mb-0">
              <Input
                className="text rounded-lg mt-3"
                type="textarea"
                color="primary"
                style={{ height: "10rem", resize: "none" }}
                placeholder="خروجی"
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
