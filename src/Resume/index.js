import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'Lviv Polytechnic National University',
      duration: 'Sept 2014 - June 2018',
      degree: 'Bachelor of Software Engineering',
    },
    languages: [
      {
        name: 'Python',
        proficiency: 0.8,
      },
      {
        name: 'Golang',
        proficiency: 0.6,
      },
      {
        name: 'JavaScript/Node.js',
        proficiency: 0.5,
      },
      {
        name: 'C#',
        proficiency: 0.5,
      },
      {
        name: 'Lua',
        proficiency: 0.5,
      },
      {
        name: 'BASH',
        proficiency: 0.5,
      },
    ],
    databases: ['Apache Cassandra', 'Redshift/PostgreSQL', 'MySQL'],
    libraries: [
      'Gin',
      'Ginkgo/Gomega',
      'Flask',
      'Falcon',
      'Django',
      'Locust',
      'React',
      'Redux',
      'Socket.io',
    ],
    tools: [
      'AWS (Redshift, S3, Lambda, EC2, SQS, CloudFront, CloudWatch)',
      'Joyent Cloud (Joyent Docker, Manta)',
      'Docker',
      'Docker Compose',
      'Grafana',
      'Prometheus',
      'Nginx (Openresty)',
      'JIRA',
      'UML',
      'Unix',
      'Git',
    ],
    interests: [
      'I <b>learn</b> about web and new technologies.',
      'I <b>dominate</b> in ping pong.',
      'I <b>love</b> watching films, traveling and listening music.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'yurko.voznyak@gmail.com',
        link: 'mailto:yurko.voznyak@gmail.com',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/uraniun',
        link: 'https://github.com/uraniun',
      },
      {
        name: 'Linkedin',
        faClass: 'fa fa-linkedin',
        display: 'linkedin.com/in/yuriyvoznyak',
        link: 'https://www.linkedin.com/in/yuriyvoznyak',
      },
      {
        name: 'Facebook',
        faClass: 'fa fa-facebook',
        display: 'facebook.com/yurko.voznyak',
        link: 'https://www.facebook.com/yurko.voznyak',
      },
    ],
  },
  footerLinks: [],
  main: {
    firstName: 'Yuriy',
    lastName: 'Voznyak',
    program: {
      term: '',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: '',
      link: '',
    },
    companies: [
      {
        name: 'GlobalLogic',
        title: 'Junior Software Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'since January 2017',
        location: 'Lviv, Ukraine',
        achievements: [
          'Setting up infrastructure for microservices in <b>Joyent Cloud</b> using <b>Docker</b>, <b>Docker Compose</b>',
          'Load balancing, cluster management, monitoring services with <b>Openresty</b>, <b>Prometheus</b>, <b>Grafana</b>',
          'Setting up <b>Apache Cassandra</b> cluster',
          'Implementing microservices for handling large amount (>800 events/sec) of analytics data using <b>Gin</b>',
          'Load testing existing services with <b>Locust</b> framework',
          'Implementing web portal for IoT platform with main focus on energy consumption using <b>React/Redux</b>',
        ],
      },
      {
        name: 'Freelance',
        color: 'rgb(77, 100, 141)',
        title: 'Software Engineer',
        date: 'June 2016',
        location: 'Lviv, Ukraine',
        achievements: [
          'Web scrapping data from stores and saving into CSV using Python <b>Selenium</b> and <b>BeautifulSoup</b>',
        ],
      },
    ],
    projects: [
      {
        name: 'MusicHub',
        tools: ['Python 3.6, Falcon, Elassandra, React/Redux, React Material UI, Docker'],
        achievements: [
          'Implemented REST API using <b>Falcon</b> for web application to fetch songs from different streaming services for better songs/playlists sharing experience.',
          'Created <b>Telegram</b> messenger bot with inline song search mode.',
          'Has small experience with <b>Elasticsearch</b> for songs search',
          'Developed web application using <b>React/Redux</b> and <b>React Material UI</b> components library',
        ],
      },
      {
        name: 'CloudCMS',
        tools: ['Python 2.7, Openresty, Docker, Docker Compose, PHP 7.0, Lua'],
        achievements: [
          'Dockerized all services',
          'Implemented logic for load balancing, cluster managing and monitoring',
          'Created custom <b>Laravel ORM</b> for <b>Cassandra</b>',
        ],
      },
      {
        name: 'Data Pipeline',
        tools: ['Golang, Gin, Ginkgo/Gomega, Glide, Docker'],
        achievements: [
          'Concurrent processing events received from client devices and publishing them in different BI tools',
          'Implemented service metrics for better monitoring',
          'Load testing using <b>Locust</b> framework',
          'Various improvements of existing codebase and bugfixing',
        ],
      },
      {
        name: 'Various Hacks',
        tools: [],
        achievements: [
          '<b><a href="https://github.com/uraniun/tax-calculator">TaxCalculator</a></b> - learning project to get familiar with <b>React Native</b>. Mobile application for Android to calculate amount of taxes you need to pay.',
          '<b><a href="https://github.com/uraniun/vk-google-play-migrator">VK.com to Google Music Migrator</a></b> - tool for migrating music library from VK.com to Google Play Music',
        ],
      },
    ],
  },
};

export default Resume;
