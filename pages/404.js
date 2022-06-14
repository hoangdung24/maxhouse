import { useIntl } from "react-intl";

import { Typography, Stack, Button } from "@mui/material";

import { OffsetTop, Container, Link, SEO } from "../components";

const _404Page = () => {
  const { messages } = useIntl();

  return (
    <OffsetTop>
      <Container>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          spacing={2}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
            }}
          >
            {messages["page.404.message"]?.[0]?.["value"]}
          </Typography>
          <Link
            href="/"
            sx={{
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            <Button variant="contained">
              {messages["page.404.backButton"]?.[0]?.["value"]}
            </Button>
          </Link>
        </Stack>
      </Container>
    </OffsetTop>
  );
};

export default _404Page;
