import React from "react";
import { getSidebar } from "../services";

const Sidebar = ({ sidebar }) => {
    const content = sidebar.topTracks;

    return (
        <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-12 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    <div className="bg-transparent pl-0 pb-12 mb-16">
                        <h1 className="text-left text-xl sm:text-3xl mb-8 font-bold text-slate-900 cursor-default">
                            Sidebar
                        </h1>
                        <div className="mt-16 sm:text-lg space-y-6 sm:leading-9">
                            {sidebar.map(sidebar => <div>{sidebar.topTracks}</div>)}
                            {sidebar.topArtistName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

export async function getStaticProps() {
  const sidebar = (await getSidebar()) || [];

  return {
    props: { sidebar },
  };
}