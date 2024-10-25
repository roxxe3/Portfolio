/** @jsxImportSource theme-ui */
import Emoji from 'a11y-react-emoji';
import React from 'react';
import { Image, Text } from 'theme-ui';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-05-20T08:00:00.000Z');

const HomeSection = () => (
  <Section updatedAt={updatedAt}>
    <Content>
      <Text>
      Welcome to My Domain! {' '}
        <Emoji symbol="🐱" label="Meow" />
      </Text>
      <Text>
      I’m glad you’re here! Whether you stumbled upon this site as a curious friend, 
      a recruiter exploring my work, or simply someone browsing the web, I appreciate your visit. 
      This is my personal space to showcase my journey, skills, and projects. Feel free to explore, 
      and don’t hesitate to reach out if you’d like to connect!
      </Text>
      <Text>
        This site is a simple space, take your time clicking around,
        and please do reach out!
      </Text>
      <Text>- Hamza</Text>
      <Image
        src="/Cat-Stronaut_orbit.gif"
        alt="Persona 5 Take Your Time gif"
        sx={{ width: '10em', height: '10em', objectFit: 'cover' }}
      />
    </Content>
  </Section>
);

export default HomeSection;
