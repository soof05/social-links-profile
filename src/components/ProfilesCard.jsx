import avatar from "../assets/images/avatar-jessica.jpeg";

export function ProfilesCard() {
  return (
    <div className="flex flex-col items-center b">
      <div className="flex flex-col items-center text-center bg-grey800">
        <img src={avatar} className="w-32 h-32 rounded-full mb-10" />
        <div className="mb-6">
          <h1>Jessica Randal</h1>
          <h4 className="text-customGreen">London, United Kingdom</h4>
        </div>
        <div>
          <p>"Front-end developer and avid reader."</p>
        </div>
      </div>
    </div>
  );
}
