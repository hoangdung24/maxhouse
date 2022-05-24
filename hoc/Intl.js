import { useMemo } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import English from "../locales/compiled-locales/en.json";
import Vietnamese from "../locales/compiled-locales/vi.json";

const Intl = ({ children }) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const messages = useMemo(() => {
    if (locale === "vi") {
      return Vietnamese;
    } else if (locale === "en") {
      return English;
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default Intl;
