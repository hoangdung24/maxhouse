import { NextSeo } from "next-seo";

const SEO = ({ data = {} }) => {
  const { seo_title, search_description } = data;

  return (
    <NextSeo
      title={seo_title || "Trinix"}
      description={search_description || "Trinix"}
      openGraph={{
        url: "https://www.url.ie/a",
        title: seo_title || "Trinix",
        description: search_description || "Trinix",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        site_name: "Trinix",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SEO;
