import { useSetting } from "../../hooks";

import { Box, useTheme } from "@mui/material";
import Link from "../Link";
import Image from "../Image";

const FABContact = () => {
  const setting = useSetting();
  const theme = useTheme();

  const { contact_links } = setting;

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: "0",
        zIndex: 999,
        padding: 1,
        backgroundColor: theme.palette.common.white,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      }}
    >
      {contact_links.map((el, i) => {
        const { block_type, value } = el;

        let newValue;

        if (block_type === "telephone") {
          newValue = value.phone;
        } else if (block_type === "hyperlink") {
          newValue = value.link;
        }

        return (
          <Box key={i} marginBottom={0.5}>
            <Link href={newValue} target="_blank">
              <Image src={value.image} width="2rem" height="2rem" />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default FABContact;
