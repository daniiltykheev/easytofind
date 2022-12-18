import React from "react";
import { getAbout } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";

const About = ({ about }) => {
    const content = about.fullText.json;

  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-20 sm:mt-32 mb-8 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-transparent pl-0 pb-8 sm:pb-16">
            <h1 className="text-left sm:mb-8 text-2xl sm:text-4xl font-bold text-slate-900 cursor-default">
              About
            </h1>
            <div className="mt-8 sm:mt-10 text-sm sm:text-lg space-y-6 leading-7 sm:leading-9">
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

export default About;

export async function getStaticProps() {
  const about = (await getAbout()) || [];

  return {
    props: { about },
  };
}