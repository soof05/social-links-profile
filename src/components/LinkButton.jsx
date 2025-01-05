export default function LinkButton({ socialLink }) {
  return (
    <a
      href={socialLink.link}
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-grey700 mb-4 w-full h-[45px] rounded-md font-bold flex items-center justify-center hover:bg-customGreen hover:text-grey800"
    >
      {socialLink.name}
    </a>
  );
}
