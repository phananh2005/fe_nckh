import facebook from "../assets/facebook.svg";
import instagram from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";
import spotify from "../assets/spotify.svg";

const socials = [
  {
    icon: facebook,
    url: "https://www.facebook.com",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com",
  },
  {
    icon: tiktok,
    url: "https://www.tiktok.com",
  },
  {
    icon: spotify,
    url: "https://www.spotify.com",
  },
  {
    icon: youtube,
    url: "https://www.youtube.com",
  },
];

function FooterSocial() {
  return (
    <div>
      <h3 className="font-semibold tracking-widest">SOCIAL ACCOUNT</h3>

      <div className="mt-7 flex gap-4">
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex h-5 w-5 items-center justify-center
              opacity-70
              transition
              hover:scale-110
              hover:opacity-100
            "
          >
            <img src={social.icon} alt="" className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterSocial;
