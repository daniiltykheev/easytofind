import React from "react";
import { getExperience } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";

const Experience = ({ experience }) => {
    const content = experience.fullText.json;

  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-20 sm:mt-32 mb-8 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-transparent pl-0 pb-8 sm:pb-16">
            <h1 className="text-left mb-8 text-4xl font-bold text-slate-900 cursor-default">
              Experience
            </h1>
            <div className="flex flex-start mt-10">
              <div className="w-14">
                <span className="text-2xl text-purple-700 font-bold">
                  tl;<br></br>dr
                </span>
              </div>
              <div className="space-y-6 ml-8 text-lg leading-9">
                {experience.tldr}
              </div>
            </div>
            <div className="mt-10 text-lg space-y-6 leading-9">
                <RichText
                    content={content}
                    renderers={{
                        a: ({ children, href }) => (
                          <a class="rt-link" href={href}>
                            {children}
                          </a>
                        ),
                      }}
                /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

export async function getStaticProps() {
  const experience = (await getExperience()) || [];

  return {
    props: { experience },
  };
}