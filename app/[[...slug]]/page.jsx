"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import { TitleCardImage } from "../../components/Home/TitleCardImage";
import { RegionalHome } from "../../components/Home/RegionalHome";
import { StatsHome } from "../../components/Home/StatsHome";
import { Footer } from "../../components/Home/Footer";
import Header from "../../components/Header";
import NotFound from "../../components/NotFound";
import { WelcomeBanner } from "../../components/common/WelcomeBanner";
import ThreeImagesAndCards from "../../components/OurCommitment/ThreeImagesAndCards";
import DynamicImageAndCard from "../../components/OurCommitment/DynamicImageAndCard";
import { getLocale } from "../../utils";

const componentMap = {
  headerSection: Header,
  home: WelcomeBanner,
  brandSection: TitleCardImage,
  statsSection: StatsHome,
  regionalSection: RegionalHome,
  footerSection: Footer,
  threeImagesAndCards: ThreeImagesAndCards,
  dynamicImageAndCard: DynamicImageAndCard,
};

export default function ComposablePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { locale = "en-US" } = getLocale(params?.slug);
      const slug = "/" + (params?.slug ?? [""]).join("/");
      const page = await getPageFromSlug(slug, locale);
      setData(page);
    })();
  }, [params?.slug]);

  return (
    <div>
      {data?.sections?.map((section, idx) => {
        const Component = componentMap[section.type];
        if (!Component)
          return (
            <div key={idx} className="text-red-500 text-center">
              Component is missing
            </div>
          );
        return <Component key={idx} {...section} />;
      })}
      {data.error && <NotFound />}
    </div>
  );
}
