/** @jsxImportSource theme-ui */
import Emoji from 'a11y-react-emoji';
import React from 'react';
import { Link, Text } from 'theme-ui';
import Article from './building-blocks/Article';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-10-28T08:00:00.000Z');

const CareerSection = () => (
  <Section updatedAt={updatedAt}>
    <Content sx={{ gap: 8 }}>
    <Article
        icon={<Emoji symbol="💻" label="Coding" />}
        title="Holberton School"
        subtitle="October 2023 to October 2024"
      >
        <Text>
          I studied software engineering at{' '}
          <Link
            href="https://intranet.alxswe.com/certificates/FzYNM5Jpse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Holberton School
          </Link>
          , where I gained a comprehensive understanding of programming languages and development tools ⚙️. 
          My coursework included practical applications of C, Python, JavaScript, and SQL, alongside DevOps practices and web development 🌐. 
          I engaged in collaborative projects 🚀, enhancing my problem-solving skills and ability to design efficient software solutions 💡.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="☁️🚀" label="Cloud ++" />}
        title="AWS Solutions Architect - Associate Certification"
        subtitle="November 2023 to February 2024"
      >
        <Text>
        In preparation for the{' '}
          <Link
            href="https://www.credly.com/badges/efbd5518-a52f-4da0-be15-6c8208792501/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
          AWS Solutions Architect - Associate certification,
          </Link>
          I deepened my understanding of architectural best practices for designing and deploying scalable,
           highly available, and fault-tolerant systems on AWS. My studies covered key AWS services,
            including compute, storage, networking, and security, along with strategies for cost optimization and architectural patterns,
             equipping me to effectively design cloud solutions that meet business needs.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="☁️" label="Cloud" />}
        title="AWS Cloud Practitioner Certification"
        subtitle="September 2023 to October 2023"
      >
        <Text>
        During my studies for the {' '}
          <Link
            href="https://www.credly.com/badges/8a5e000c-35e4-43a3-b482-4ddaae4ab31b/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
          AWS Cloud Practitioner certification,
          </Link>
           I gained foundational knowledge of Amazon Web Services, 
           focusing on key concepts such as cloud computing, AWS services, 
           architecture best practices, and basic security measures. 
           This program equipped me with the skills to understand cloud deployment, 
           management, and cost optimization, preparing me for further exploration in cloud technologies.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="🏫" label="university" />}
        title="FSJES Ain Chock "
        subtitle="September 2019 to June 2023"
      >
        <Text>
        I attended the {' '}
        <Link
            href="https://www.fdc.ma/FDC/"
            target="_blank"
            rel="noopener noreferrer"
          >
          University Hassan II
          </Link>
         as an undergraduate,
        where I received a Bachelor's Degree in Economics and Management,
        focusing on the principles of economics and management.
        This program provided an interdisciplinary foundation in economic theories,
        business management, and quantitative methods.
        </Text>
      </Article>
    </Content>
  </Section>
);

export default CareerSection;
