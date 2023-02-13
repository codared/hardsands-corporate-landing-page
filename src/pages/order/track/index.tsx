import WithLayout from "components/WithLayout";
import TrackForm from "modules/track-order";
import React from "react";

function TrackPage() {
  return (
    <WithLayout pageTitle="Track Order - Hardsands">
      <TrackForm />
    </WithLayout>
  );
}

export default TrackPage;
