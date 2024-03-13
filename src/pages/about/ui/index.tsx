import type { FC } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/shared/ui/PageLayout";
import { Tab } from "@/features/Tab.ts";

export const AboutPage: FC = () => {
  return (
    <PageLayout>
      <Link to={"/tickers"}>К котировкам</Link>
      <Link to={`/tickers?tab=${Tab.A}`}>
        <button>Таб A</button>
      </Link>
      <Link to={`/tickers?tab=${Tab.B}`}>
        <button>Таб B</button>
      </Link>
    </PageLayout>
  );
};
