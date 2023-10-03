"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { sadFont as font } from "../util/fonts";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-gradient-to-r from-purple-300 via-green-300 to-red-300 p-10 rounded-2xl text-black">
      <div>
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/rusira-thamuditha-752230216/"
        />
        <span className={`text-lg ${font.className}`}>Connect me on</span>
      </div>
      <div>
        <SocialIcon network="github" url="https://github.com/it21294198" />
        <span className={`text-lg ${font.className}`}>See my works</span>
      </div>
      <div>
        <SocialIcon network="x" url="https://twitter.com/RusiraThamditha" />
        <span className={`text-lg ${font.className}`}>Thanks Elon</span>
      </div>
      <div>
        <SocialIcon
          network="reddit"
          url="https://twitter.com/RusiraThamditha"
        />
        <span className={`text-lg ${font.className}`}>Dig Deeper</span>
      </div>
      <div>
        <SocialIcon
          network="facebook"
          url="https://www.facebook.com/rusira.karunarathna"
        />
        <span className={`text-lg ${font.className}`}>Meet friends</span>
      </div>
      <div>
        <SocialIcon
          network="instagram"
          url="https://www.instagram.com/rusira_thamuditha/"
        />
        <span className={`text-lg ${font.className}`}>Have fun</span>
      </div>
    </div>
  );
};

export default SocialMedia;
