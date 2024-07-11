import {Container, Accordion, AccordionBody, Button, Alert} from "react-bootstrap"

function Ajuda() {
  return (
    <main className="mt-3">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sobre nosso sistema</Accordion.Header>
            <AccordionBody>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil nemo alias et ad ipsum!</AccordionBody>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Sobre a empresa
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit quod atque id. Tenetur culpa nisi vitae cumque ullam exercitationem expedita voluptate non maxime sunt, amet quia illum provident rem!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className="mt-3">Entre em contato</Button>
        <Button>Clique aqui</Button>
        <Alert>Atenção! estamos em manutenção.</Alert>
      </Container>
    </main>
  )
}

export default Ajuda