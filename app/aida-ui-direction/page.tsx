import type { Metadata } from "next";
import { AidaUiDirection } from "../../components/aida-ui-direction/AidaUiDirection";

export const metadata: Metadata = {
  title: "Aida System — UI Direction Preview",
  description:
    "Premium café-tech UI direction for Aida Café @ City U: customer app, staff POS, and admin dashboard.",
};

export default function AidaUiDirectionPage() {
  return <AidaUiDirection />;
}
