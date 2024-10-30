import React from "react";
import SpotifyCard from "./SpotifyCard";
import Hr from "../ui/hr";
import Link from "next/link";
import {
  Bell,
  GitPullRequestIcon,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { GithubIcon } from "../Icons";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <>
      <Hr />
      <footer className="container p-10 flex justify-center items-center flex-col overflow-x-hidden">
        <div className="w-screen md:w-full mb-8 flex md:space-x-10 justify-evenly items-center text-foreground/60 text-xs md:text-base">
          <Link
            href="mailto:contact@ajesh.dev"
            className="font-bold flex items-center space-x-2 hover:underline"
          >
            <Bell strokeWidth={1} /> <p>Subscribe</p>
          </Link>
          <Link
            href="mailto:contact@ajesh.dev"
            className="font-bold flex items-center space-x-2 hover:underline"
          >
            <Mail strokeWidth={1} /> <p>Drop an Email</p>
          </Link>
          <Link
            href="https://github.com/thekillingspree"
            className="font-bold flex items-center space-x-2 hover:underline"
          >
            <GitPullRequestIcon strokeWidth={1} /> <p>Source</p>
          </Link>
        </div>
        <SpotifyCard />
        <div className="w-full mt-8 flex space-x-10 justify-center items-center text-foreground/60 font-semibold">
          <div className="flex-1">
            <p>Ajesh DS © 2024</p>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </>
  );
};

export default Footer;
