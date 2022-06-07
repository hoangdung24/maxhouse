import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input/input";
import { Box, Typography, useTheme, Grid, Alert, Stack, Fade } from "@mui/material";

import { CONTACTS } from "../../api";
import axios from "../../axios.config";
import {
  OffsetTop,
  Container,
  Input,
  LoadingButton,
  InputPhoneNumber,
} from "../../components";
import { useMedia, useSetting } from "../../hooks";
import { schema, defaultValues } from "../../libs/yupRegister";

export default function Contact({ initData }) {
  const setting = useSetting();
  const { messages } = useIntl();
  const { google_map_location_embed_src } = setting;

  const [message, setMessage] = useState({
    severity: "success",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const data = initData[0].items[0];
  const theme = useTheme();
  const { isMdUp, isSmDown } = useMedia();

  const {
    handleSubmit,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    let timer;

    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  const onSubmit = useCallback(async (data) => {
    const { phone_number } = data;

    try {
      if (!isValidPhoneNumber(phone_number)) {
        setError("phone_number", {
          type: "validate",
        });
        return;
      }

      setLoading(true);

      await axios.post(`${CONTACTS}/`, data);

      reset(defaultValues, {
        keepDirty: false,
      });

      setIsSuccess(true);

      setMessage({
        severity: "success",
        content: messages["form.message.success"][0]["value"],
      });
    } catch (err) {
      setIsSuccess(true);

      // setMessage({
      //   severity: "error",
      //   content: err.response.data.message,
      // });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <OffsetTop>
      <Container>
        <Grid container justifyContent="space-between" columnSpacing={10}>
          <Grid item xs={12}>
            <Typography
              variant={isMdUp ? "h1" : "h5"}
              sx={[
                {
                  textAlign: "center",
                  marginBottom: 8,
                },
                isMdUp && {
                  marginBottom: 10,
                },
              ]}
            >
              {data.title}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={[
              isSmDown && {
                marginBottom: 5,
              },
            ]}
          >
            {google_map_location_embed_src && (
              <Box
                sx={[
                  {
                    width: "100%",
                    height: "100%",
                  },
                ]}
              >
                <iframe
                  src={google_map_location_embed_src}
                  width={"100%"}
                  height={isMdUp ? 500 : 300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="body_large"
                sx={{ fontSize: theme.typography.h6, textAlign: "justify" }}
              >
                {data.description}
              </Typography>

              <Box
                component={"form"}
                sx={{ width: "100%", mt: "2rem" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  control={control}
                  name="name"
                  InputProps={{
                    placeholder: messages["form.placeholder.name"][0]["value"],
                  }}
                  FormLabelProps={{
                    children: messages["form.label.name"][0]["value"],
                  }}
                />

                <Input
                  control={control}
                  name="email"
                  InputProps={{
                    placeholder: messages["form.placeholder.email"][0]["value"],
                  }}
                  FormLabelProps={{
                    children: messages["form.label.email"][0]["value"],
                  }}
                />

                <InputPhoneNumber
                  control={control}
                  name="phone_number"
                  InputProps={{
                    placeholder: messages["form.placeholder.phone_number"][0]["value"],
                  }}
                  FormLabelProps={{
                    children: messages["form.label.phone_number"][0]["value"],
                  }}
                />

                <Input
                  control={control}
                  name="body"
                  InputProps={{
                    placeholder: messages["form.placeholder.body"][0]["value"],
                    multiline: true,
                    rows: 10,
                  }}
                  FormLabelProps={{
                    children: messages["form.label.body"][0]["value"],
                  }}
                />

                <Stack flexDirection="row" justifyContent="space-between">
                  <Fade
                    in={isSuccess}
                    timeout={{
                      enter: 500,
                      exit: 500,
                    }}
                    onExited={() => {
                      setMessage("");
                    }}
                  >
                    <Alert
                      severity={message.severity}
                      icon={false}
                      sx={{
                        "& .MuiAlert-message": {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                      }}
                    >
                      {message.content}
                    </Alert>
                  </Fade>

                  <LoadingButton
                    children={messages["button.contact"][0]["value"]}
                    loading={loading}
                    disabled={loading}
                  />
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </OffsetTop>
  );
}
