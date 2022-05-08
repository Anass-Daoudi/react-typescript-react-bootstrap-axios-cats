import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { getCats } from '../services/getCats';
import { ICat } from '../models/ICat';
import { Cats } from './Cats';
import { CatsPaginationHandlers } from './CatsPaginationHandlers';

const App = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [startingPage, setStartingPage] = useState(0);
  const [sayWord, setSayWord] = useState<string>('Hello');
  const [environment, setEnvironment] = useState<string | undefined>(undefined);

  useEffect(() => {
    const setCatsData = async (): Promise<void> => {
      const catsData = await getCats(startingPage);
      setCats(catsData);
    };

    setCatsData();
  }, [startingPage]);

  useEffect(() => {
    setEnvironment(process.env.REACT_APP_ENV);
  }, []);

  const displayPrev10Cats = () => {
    if (startingPage - 10 >= 0) {
      setStartingPage(startingPage => startingPage - 10);
    } else {
      alert('No previous cats found!');
    }
  };

  const displayNext10Cats = () => {
    setStartingPage(startingPage => startingPage + 10);
  };

  const onWordChanging: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setSayWord(value.trim());
  };

  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success" style={{ color: 'black' }}>
            <Alert.Heading>
              Hey, welcome in my React.js demo application
            </Alert.Heading>

            <div className='my-4'>
              My goal from this demo is to integrate multiple libraries to work on different needs that occur
              commonly for most of production level applications.
            </div>

            <div className='my-4'>
              <b>For example:</b>
              <ul>
                <li>
                  I used
                  {' '}
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://create-react-app.dev/docs/adding-typescript/#installation'
                  >
                    create react app with TypeScript template
                  </a>
                  {' '}
                  so as to start as fast as possible
                  implementing and delivering features. Other approach could be configuring Webpack from scratch.
                  I prefer to start with the first approach and in need eject the Webpack configuration and customize
                  it depending on the need.
                </li>

                <li>
                  TypeScript help teams work together by for example having shared models
                  using interfaces or classes...etc, have IDE or editor auto completion, prevent
                  bugs related to typings...
                </li>

                <li>
                  I used <a target='_blank' rel="noreferrer" href='https://react-bootstrap.github.io/'>React Bootstrap</a> (with Bootstrap of course as a dependency)
                  to easily build UI using React component style instead of css classes.
                </li>

                <li>
                  I used Axios for API calls.
                </li>

                <li>
                  I didn't have a direct need to use a state management tool for this demo,
                  but I'm thinking to add <b>Redux</b> and <b>React Redux</b> for a demo purpose.
                </li>

                <li>
                  Finally I used <b>.env.production</b> and <b>.env.development</b> to demonstrate
                  how we could customize configuration per environment. For example change API base url
                  depending on the running environment.
                </li>
              </ul>
            </div>
            <hr />
            <div className="mb-0">
              This demo is made by <a
                href='https://www.linkedin.com/in/anass-daoudi-4675b6141/'
                target='_blank'
                rel='noreferrer'
              >
                Anass DAOUDI
              </a>
              <br />
              Email: <b>anass1995daoudi@gmail.com</b>
              <br />
              Personal website:
              {' '}
              <a
                href='https://www.anass-daoudi.com/'
                target='_blank'
                rel='noreferrer'
              >
                https://www.anass-daoudi.com/
              </a>
              <br />
              <a
                href='https://github.com/Anass-Daoudi/react-typescript-react-bootstrap-axios-cats'
                target='_blank'
                rel='noreferrer'
              >
                Application source code on GitHub
              </a>
            </div>
          </Alert>
          <div className='mb-5'>
            <b>Just to demonstrate environment variables:</b> this app is running in the <b>{environment}</b> environment!
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='mt-3'>Say a word!</h1>
          <Row className='mb-4'>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter a word to be rendered inside a cat image"
                onChange={onWordChanging}
                style={{ width: 400 }}
                value={sayWord}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {
                sayWord && (
                  <Image
                    src={`https://cataas.com/cat/says/${sayWord}`}
                    style={{ maxWidth: 400 }}
                  />
                )
              }
            </Col>
          </Row>
        </Col>
        <Col>
          <h1 className='mt-3'>Cats</h1>
          <CatsPaginationHandlers
            displayPrev10Cats={displayPrev10Cats}
            displayNext10Cats={displayNext10Cats}
          />
          <Cats cats={cats} />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
