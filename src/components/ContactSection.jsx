/** @jsxImportSource theme-ui */
import React from 'react';
import {
  TbAt,
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from 'react-icons/tb';
import { Link, Text } from 'theme-ui';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-10-28T08:00:00.000Z');

const ContactSection = () => (
  <Section updatedAt={updatedAt}>
    <Content>
      <Text>I would love to talk with you!</Text>
      <Text>
        <TbMail
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        I prefer you reach out by email at{' '}
        <Link href="mailto:hamzafarissi@gmail.com">hamzafarissi@gmail.com.</Link>
      </Text>
      <Text>
        <TbBrandDiscord
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        Naturally, I&apos;m on Discord every day - you can add me at <Link
          href="https://discord.com/users/farissihamza1"
          target="_blank"
          rel="noopener noreferrer"
        >farissihamza1
        </Link>
      </Text>
      <Text>
        <TbBrandLinkedin
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        Alternatively, feel free to connect with me on{' '}
        <Link
          href="https://www.linkedin.com/in/hamza-farissi212001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        .
      </Text>
      <Text>
        <TbBrandGithub
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        For a more technical portfolio, visit my{' '}
        <Link
          href="https://github.com/roxxe34"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        (Temporarily Restricted)
        .
      </Text>
    </Content>
  </Section>
);

export default ContactSection;
