import WithLayout from "components/WithLayout";
import EngageConnections from "modules/hardsands/EngageConnections";
import React from "react";
import { useTranslation } from "react-i18next";

function EngageConnectionsPage() {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t(
        "pages:engage-connections-with-an-emmersive-experience",
        "Engage connections with an immersive experience - Hardsands Business cards"
      )}
      pageDescription={t(
        "pages:engage-connections-with-an-emmersive-experience.desc",
        "It may seem like a simple way to share your contact information. But with a little creativity, you can create an immersive experience that will engage your connections and leave a lasting impression."
      )}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A67802_-_low.jpg?v=1670370869"
    >
      <EngageConnections />
    </WithLayout>
  );
}

export default EngageConnectionsPage;
