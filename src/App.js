import MyButton from "./components/button";
import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";

export default function App() {
  const name = "김선명";
  const description = "(신입) 프론트엔드 React / Flutter";
  const gitLink = "https://github.com/BGM-109";
  const projectLink =
    "https://scrawny-mimosa-c8c.notion.site/09a8d4c4a0fd4acf84491b75f57fc483";
  const tellLink = "tel:+0821076740008";
  const iconClassName = "hover:animate-spin w-10 h-10";
  const goToLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("링크가 없습니다.");
    }
  };

  const stackClassName = `flex space-x-5 p-4 transition ease-in-out duration-350 `;
  return (
    <div className="w-full xl:bg-lg_poster bg-no-repeat bg-cover">
      <div
        className="mx-auto w-full h-screen flex flex-col items-center justify-center space-y-4 px-10 text-white bg-no-repeat max-w-xl bg-sm_poster xl:bg-none"
        // style={{ backgroundImage: `url("img/poster.jpeg")` }}
      >
        <div className="">
          <img
            src="img/avatar.jpg"
            alt="profile_img"
            className="rounded-full w-24 h-24 border-2 border-[#FE53BB]"
          />
        </div>
        <div className="text-center">
          <h2 className="font-semibold">@ {name}</h2>
          <p className="text-sm"> {description}</p>
          <div className={stackClassName}>
            <FaReact className={iconClassName} />

            <RiFlutterFill className={iconClassName} />

            <FaPython className={iconClassName} />
          </div>
        </div>

        <MyButton
          text="Github"
          subText="깃허브 보러가기"
          onClick={() => goToLink(gitLink)}
        />

        <MyButton
          text="Projects"
          subText="프로젝트들"
          onClick={() => goToLink(projectLink)}
        />
        <MyButton
          text="Contact"
          subText="연락하기"
          onClick={() => goToLink(tellLink)}
        />
      </div>
    </div>
  );
}
