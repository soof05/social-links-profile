export default function LinkButton({ socialLink }) {
  return (
    <button className="bg-grey700 mb-4 w-full h-[45px] rounded-md font-bold">
      <a href={socialLink.link} target="_blank">{socialLink.name}</a>
    </button>
  );
}
