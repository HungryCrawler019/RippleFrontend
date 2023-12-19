import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  color: #fff;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NotFoundPage = () => {
  const [message, setMessage] = useState('The page you are looking for does not exist.');

  return (
    <Container>
      <Title>404 Not Found</Title>
      <Message>{message}</Message>
      <Button onClick={() => setMessage('A different message')}>Change Message</Button>
    </Container>
  );
};

export default NotFoundPage;