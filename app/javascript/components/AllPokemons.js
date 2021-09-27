import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./img/loader.gif";
import { Card, Col, Row, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState(0);

  useEffect(() => {
    axios.get("api/v1/pokemons/index").then((res) => {
      setPokemons(res.data.pokemons);
    });
  }, []);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  console.log(pokemons);

  return (
    <div>
      <Container>
        <div className="jumbotron">
          <h1 className="display-4">Pokedex</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
        </div>
        <Row>
          {pokemons.length > 0 && !load ? (
            pokemons.map((poke) => (
              <Col xs={4} key={poke.id}>
                <Card style={{ borderRadius: 25, marginTop: 30 }}>
                  {poke.sprites ? (
                    <div>
                      <Card.Img
                        variant="top"
                        src={poke.sprites.front_default}
                        alt={poke.name}
                        style={{ width: "50%" }}
                      />
                      <Card.Img
                        variant="top"
                        src={poke.sprites.back_default}
                        alt={poke.name}
                        style={{ width: "50%" }}
                      />
                    </div>
                  ) : (
                    " "
                  )}
                  <Card.Body>
                    <Card.Title>{poke.name}</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={poke.name}>Detalle del Pokemon</Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <div>
              <img src={Loader} />
              <Spinner animation="grow" variant="primary" />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AllPokemons;
