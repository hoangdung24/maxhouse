import { NextSeo } from "next-seo";
import { useSetting } from "../hooks";

const SEO = ({ data = {} }) => {
  const setting = useSetting();

  const {
    favicon,
    og_image: originalImage,
    seo_title: originalTitle,
    search_description: originalSearchDescription,
  } = setting;

  let { seo_title, search_description, og_image } = data;

  if (!seo_title) {
    seo_title = originalTitle || "Max House";
  }

  if (!search_description) {
    search_description = originalSearchDescription || "Max House Description";
  }

  if (!og_image) {
    og_image = originalImage;
  }

  if (!setting) {
    return null;
  }

  return (
    <NextSeo
      title={seo_title}
      description={search_description}
      openGraph={{
        url: "https://www.url.ie/",
        title: seo_title,
        description: search_description,
        images: [
          {
            url: og_image,
            width: 800,
            height: 600,
            alt: "Max House",
            type: "image/jpeg",
          },
        ],
        site_name: seo_title,
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: favicon,
        },
        {
          rel: "apple-touch-icon",
          href: favicon,
        },
      ]}
    />
  );
};

export default SEO;
