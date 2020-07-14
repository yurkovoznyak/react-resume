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
    education: [
      {
        name: 'Lviv Polytechnic National University',
        duration: 'Sept 2018 - Dec 2019',
        degree: 'Master of Software Engineering',
      },
      {
        name: 'Lviv Polytechnic National University',
        duration: 'Sept 2014 - June 2018',
        degree: 'Bachelor of Software Engineering',
      },
    ],
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
        name: 'JavaScript',
        proficiency: 0.5,
      },
    ],
    databases: ['Google Firestore', 'BigQuery', 'Redis', 'PostgreSQL', 'Amazon Redshift', 'Apache Cassandra'],
    libraries: [
      'Django REST Framework',
      'Flask',
      'Fast API',
      'gRPC',
      'Gin',
      'React/Redux',
      'Locust',
    ],
    tools: [
      'AWS (Redshift, S3, Lambda, EC2, CloudFront, CloudWatch, Beanstalk)',
      'GCP (GKE, AppEngine BigQuery, Pub/Sub, SQL, Storage, Cloud [Scheduler, Functions], Firestore, Memorystore)',
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
      'I <b>love</b> watching movies, traveling and listening music.',
    ],
    links: [
      {
        name: 'Mobile',
        faClass: 'fa fa-phone',
        display: '+380509341081',
        link: 'tel:+380509341081',
      },
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'yurko.voznyak@gmail.com',
        link: 'mailto:yurko.voznyak@gmail.com',
      },
      {
        name: 'Linkedin',
        faClass: 'fa fa-linkedin',
        display: 'linkedin.com/in/yuriyvoznyak',
        link: 'https://www.linkedin.com/in/yuriyvoznyak',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/uraniun',
        link: 'https://github.com/uraniun',
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
    profileDescription: 'Talented software engineer with 4 years of professional experience building web applications. <br/>' +
      'Expertise in coding, troubleshooting and debugging in Python, Golang, JavaScript. <br/>' +
      'I\'m responsible, self-motivated, opened for new skills, active team player. ' +
      'Also, I have such skills as accuracy and attention to details, tolerant to stressed situations.',
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
        title: 'Software Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'January 2017 - now',
        location: 'Lviv, Ukraine',
        achievements: [
          'Support and new features development for advertising data reporting application written in <b>Golang</b> and <b>Python</b>',
          'Implementing web portal for IoT platform with main focus on energy consumption using <b>React/Redux</b> and <b>Django REST Framework</b>',
          'Implementing microservices in <b>Golang</b> for handling large amount (>800 events/sec) of analytics data',
          'Setting up infrastructure for microservices in <b>Joyent Cloud</b> using <b>Docker</b>, <b>Docker Compose</b>',
          'Load balancing, cluster management, monitoring services with <b>Openresty</b>, <b>Prometheus</b>, <b>Grafana</b>',
        ],
      },
    ],
    projects: [
      {
        name: 'Advertising data reporting tool',
        tools: ['Golang, Python 3, Kubernetes, Flask, GCP'],
        achievements: [
          'Adapt existing product to work with the new APIs',
          'Reduced performance issues and made applications more reliable and stable',
          'Moved project to <b>Python 3</b> implemented various improvements of existing codebase and bugfixing',
          'Completely rewritten old monolith application to event-based approach on <b>Pub/Sub + Cloud Functions</b>',
        ],
      },
      {
        name: 'Energy in Schools',
        tools: ['Python 3, DRF, Celery, PostgreSQL, React/Redux, React Material UI', 'AWS'],
        achievements: [
          'Implemented REST API using <b>Django REST Framework</b>',
          'Used <b>Celery</b> jobs to fetch energy consumption data from different energy providers',
          'Integrated with big IoT platform to control different smart devices at schools',
          'Implemented new features in a framework for creating programming experiences for beginners',
        ],
      },
      {
        name: 'Data Pipeline',
        tools: ['Golang, Gin, Ginkgo/Gomega, Glide, Docker', 'AWS'],
        achievements: [
          'Concurrent processing events received from client devices and publishing them in different BI tools',
          'Implemented service metrics for better monitoring',
          'Various improvements of existing codebase and bugfixing',
        ],
      },
      {
        name: 'CloudCMS',
        tools: ['Python 2, Openresty, Docker, Docker Compose, PHP 7.0, Lua', 'Joyent Cloud'],
        achievements: [
          'Split monolith application to smaller services, running in Docker',
          'Implemented logic for load balancing, cluster managing and monitoring',
          'Created custom <b>Laravel ORM</b> for <b>Cassandra</b>',
        ],
      },
    ],
  },
};

export default Resume;
