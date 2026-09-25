import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://ramad-portfolio-backend.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true },
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem]
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px]
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt={user.fullName}
              className="bg-white p-2 sm:p-4 rotate-[15deg] h-[250px] sm:h-[250px] md:h-[350px] lg:h-[350px] w-auto"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I’m a self-taught software developer from Nepal with a Diploma in
              Information Technology. I’ve worked on real-world projects through
              internships and contract roles, building backend systems, APIs,
              and mobile applications using technologies like Node.js,
              PostgreSQL, and React Native.
            </p>
            <p>
              I care about writing clean, maintainable code and understanding
              the reasoning behind technical decisions—not just making things
              work, but making them reliable and scalable. Currently, I’m
              building in public, improving my skills, and looking for my next
              opportunity to grow as a developer.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
