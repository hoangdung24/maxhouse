import { PREVIEW } from "../api";
import { transformUrl, prefetchData } from "../libs";
import { OffsetTop, Container, DetailBlog } from "../components";

const PreviewPage = ({ initData = {} }) => {
  const [previewPostData] = initData;

  return (
    <OffsetTop>
      <Container>
        <DetailBlog
          {...{
            data: previewPostData,
          }}
        />
      </Container>
    </OffsetTop>
  );

  // return (
  //   <Box
  //     sx={{
  //       marginTop: `${context?.state?.headerHeight}px`,
  //       paddingY: 3,
  //     }}
  //   >
  //     {body?.map((el, idx) => {
  //       const { block_type, value } = el;

  //       if (block_type === "richtext") {
  //         const { content, text_color, text_alignment } = value;

  //         return (
  //           <GridContainer
  //             key={idx}
  //             OuterProps={{
  //               ...(isMobile && {
  //                 sx: {
  //                   maxWidth: 1,
  //                   paddingX: 0,
  //                 },
  //               }),
  //             }}
  //           >
  //             <Box
  //               sx={{
  //                 color: text_color,
  //                 textAlign: text_alignment,
  //                 wordWrap: "break-word",
  //                 ["& iframe"]: {
  //                   width: "100%",
  //                 },
  //               }}
  //               dangerouslySetInnerHTML={{
  //                 __html: DOMPurify.sanitize(content, {
  //                   ADD_TAGS: ["iframe"],
  //                   ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
  //                 }),
  //               }}
  //             ></Box>
  //           </GridContainer>
  //         );
  //       } else if (block_type === "images") {
  //         return (
  //           <Stack key={idx} direction="row">
  //             {value.map((el, idx) => {
  //               return (
  //                 <img
  //                   key={idx}
  //                   src={el}
  //                   style={{
  //                     width: `${100 / value.length}%`,
  //                     objectFit: "contain",
  //                   }}
  //                 />
  //               );
  //             })}
  //           </Stack>
  //         );
  //       } else {
  //         return null;
  //       }
  //     })}
  //   </Box>
  // );
};

export default PreviewPage;

export async function getServerSideProps({ query, locale }) {
  try {
    const urls = [
      transformUrl(PREVIEW, {
        ...query,
        fields: "*",
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      props: {},
    };

    // return {
    //   redirect: {
    //     destination: "/404",
    //     permanent: false,
    //   },
    // };
  }
}
