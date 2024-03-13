import type { FC } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/shared/ui/PageLayout";

export const AboutPage: FC = () => {
  return (
    <PageLayout>
      <Link to={"/tickers"}>К котировкам</Link>
    </PageLayout>
  );
};
