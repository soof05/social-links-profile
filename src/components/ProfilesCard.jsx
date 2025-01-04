import avatar from "../assets/images/avatar-jessica.jpeg";
import LinkButton from "./LinkButton";

const socialLinks = [
  { name: "Github", link: "https://github.com/" },
  { name: "Frontend Mentor", link: "https://www.frontendmentor.io/home" },
  { name: "Linkedin", link: "https://www.linkedin.com/" },
  { name: "Twitter", link: "https://x.com/" },
  { name: "Instagram", link: "https://www.instagram.com/" },
];

export function ProfilesCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center bg-grey800 rounded-lg">
        <div className="flex flex-col items-center text-center m-5">
          <img src={avatar} className="w-24 h-24 rounded-full mb-10" />
          <div className="mb-6">
            <h1>Jessica Randal</h1>
            <h4 className="text-customGreen">London, United Kingdom</h4>
          </div>
          <div className="mb-6">
            <p>"Front-end developer and avid reader."</p>
          </div>

          {socialLinks &&
            socialLinks.map((socialLink) => (
              <LinkButton socialLink={socialLink} key={socialLink.link} />
            ))}
        </div>
      </div>
    </div>
  );
}
