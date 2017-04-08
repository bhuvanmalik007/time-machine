import React from 'react'
import { Container, Header } from 'semantic-ui-react'


const ES6 = ()=>
(
  <Container text style={{color:'white'}}>
    <Header as='h2'>Header</Header>
    <p>ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009.</p>
    <p>Click <a style={{color:'grey'}} href="http://es6-features.org/#Constants">here </a> for an overview and comparison of all the new feature of ECMAScript 6.</p>
    <h3>BABEL : The compiler for writing next generation JavaScript.</h3>
    <p>Babel is essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.</p>
  </Container>
)





export default ES6;
