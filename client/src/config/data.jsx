import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import {RiUser3Fill} from "react-icons/ri"
import { SiBuymeacoffee } from "react-icons/si";
export const data = {
  name: "Utsav",
  links: {
    github: {
      name: "github",
      url: "https://github.com/utsavbhattarai007",
      label: "github.com/",
    },
    linkedin: {
      name: "linkedin",
      url: "https://www.linkedin.com/in/utsavbhattarai007/",
      label: "linkedin.com/in/",
    },
    twitter: {
      name: "twitter",
      url: "https://twitter.com/utsavbhattarai7",
      label: "twitter.com/",
    },
    instagram: {
      name: "instagram",
      url: "https://www.instagram.com/utsavbhattarai007/",
      label: "instagram.com/",
    },
    youtube: {
      name: "youtube",
      url: "",
      label: "youtube.com/",
    },
    portfolio: {
      name: "portfolio",
      url: "https://utsavbhattarai.info.np",
      label: "Portfolio",
    },
    buymeacoffee: {
      name: "buymeacoffee",
      url: "https://www.buymeacoffee.com/utsavbhattarai",
      label: "buymeacoffee.com/",
    },
    blog: {
      name: "blog",
      url: "https://blog.utsavbhattarai.info.np",
      label: "Blog",
    },
  },
  customization: {
    layout:"",
    loading: "",
    transition: "",
  },
};

export const link = {
  github: {
    color: "#22D2C2D",
    icon: <AiFillGithub />,
  },
  linkedin: {
    color: "#0A66C2",
    icon: <AiFillLinkedin />,
  },
  twitter: {
    color: "#1DA1F2",
    icon: <AiFillTwitterCircle />,
  },
  instagram: {
    color: "#E4405F",
    icon: <AiFillInstagram />,
  },
  youtube: {
    color: "#FF0000",
    icon: <AiFillYoutube />,
  },
  portfolio: {
    color: "#F15412",
    icon: <RiUser3Fill />,
  },
  buymeacoffee: {
    color: "#FF813F",
    icon: <SiBuymeacoffee />,
  },
  blog: {
    color: "#2962FF",
    icon: <FaBloggerB />,
  },
};

