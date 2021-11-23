import React from "react";
import Card from "./Card";
import CardRight from "./CardRight";
export default function Next() {
  const maizefuture =
    "However, as a result of climate change, maximum temperatures will increase. Around 2050, maximum temperatures will exceed the harmful threshold for maize on a regular basis.";
  const next =
    " Measures to Reduce Temperature at th farm level include agroforestry shade nets and irrigation. " +
    "However,Looking at temperature through out the year,it would be interesting to explore  the option of growing maize during the cooler mark";

  return (
    <div>
      <h1 className="text-center text-dark lead pt-3 display-6">
        {" "}
        What's Next
      </h1>
      <Card
        title="Future Prediction"
        text={maizefuture}
        id="pred"
        color="text-dark"
      />
      <CardRight title="Solution" text={next} id="sol" color="text-dark" />
    </div>
  );
}
