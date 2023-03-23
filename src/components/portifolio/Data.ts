import { Chigoz1, Ebus, Seyi } from "../../images/team-img";

type mine = {
  skill_type: string;
  skill_level: string;
};
type know = {
  skill_main: string;
  skill_level: Array<mine>;
};
export type Tester = {
  id: number;
  name: string;
  skills: Array<know>;
  text: string;
  image: any;
  github_link: string;
  linkdln_link: string;
  twitter_link: string;
  fb_link: string;
  instagram_link: string;
  years_experience: number;
  projects: number;
  about: string;
  cv: any;
};

export const data: Array<Tester> = [
  {
    id: 1,
    name: "Nwokoye Christopher",
    skills: [
      {
        skill_main: "FrontEnd Development",
        skill_level: [
          {
            skill_type: "HTMl",
            skill_level: "Expert",
          },
        ],
      },
      {
        skill_main: "BackEnd Development",
        skill_level: [
          {
            skill_type: "PHP",
            skill_level: "Expert",
          },
          {
            skill_type: "Laravel",
            skill_level: "Intermediate",
          },
          {
            skill_type: "Node.js",
            skill_level: "Intermediates",
          },
        ],
      },
    ],
    text: "I am a good developer",
    image: Ebus,
    github_link: "github.com/lordscoba",
    linkdln_link: "linkdln.com/lordscoba",
    twitter_link: "twitter.com/lordscoba",
    fb_link: "facebook.com/lordscoba",
    instagram_link: "instagram.com/lordscoba",
    years_experience: 5,
    projects: 30,
    about: "I am a good deveoper",
    cv: Ebus,
  },
  {
    id: 2,
    name: "Nwokoye Chigozie",
    skills: [
      {
        skill_main: "FrontEnd Development",
        skill_level: [
          {
            skill_type: "HTMl",
            skill_level: "Expert",
          },
        ],
      },
      {
        skill_main: "BackEnd Development",
        skill_level: [
          {
            skill_type: "PHP",
            skill_level: "Expert",
          },
          {
            skill_type: "Laravel",
            skill_level: "Intermediate",
          },
          {
            skill_type: "Node.js",
            skill_level: "Intermediates",
          },
        ],
      },
      {
        skill_main: "Devops",
        skill_level: [
          {
            skill_type: "Linux",
            skill_level: "Expert",
          },
          {
            skill_type: "AWS",
            skill_level: "Intermediate",
          },
          {
            skill_type: "Azure",
            skill_level: "Intermediates",
          },
        ],
      },
    ],
    text: "I am a good developer",
    image: Chigoz1,
    github_link: "github.com/greg",
    linkdln_link: "linkdln.com/greg",
    twitter_link: "twitter.com/greg",
    fb_link: "facebook.com/greg",
    instagram_link: "instagram.com/greg",
    years_experience: 4,
    projects: 30,
    about: "I am a good deveoper",
    cv: Chigoz1,
  },
  {
    id: 3,
    name: "John Akande",
    skills: [
      {
        skill_main: "Graphics Designer",
        skill_level: [
          {
            skill_type: "Photoshop",
            skill_level: "Expert",
          },
          {
            skill_type: "Corel Draw",
            skill_level: "Intermediate",
          },
        ],
      },
      {
        skill_main: "Wordpress",
        skill_level: [
          {
            skill_type: "Blog",
            skill_level: "Expert",
          },
          {
            skill_type: "E-commerce",
            skill_level: "Intermediate",
          },
        ],
      },
    ],
    text: "I am a good developer",
    image: Seyi,
    github_link: "github.com/seyi",
    linkdln_link: "linkdln.com/seyi",
    twitter_link: "twitter.com/seyi",
    fb_link: "facebook.com/seyi",
    instagram_link: "instagram.com/seyi",
    years_experience: 3,
    projects: 30,
    about: "I am a good deveoper",
    cv: Seyi,
  },
];
