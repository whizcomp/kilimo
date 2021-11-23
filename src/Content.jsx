import React from "react";
import Card from "./Card";
import CardRight from "./CardRight";
export default function Content({ tomato }) {
  const maizeintro =
    "Maize is the staple food for most households.It is the basis for the Traditional Ugali. However the temperature are increasing rainfall patterns might change";
  const tomatointro =
    "Tomato is one of the key crop in Kenya. In Jkuat,Juja tomatoes are usually grown in hot and dry conditions.However Climate change could exacerbate droughts,flood and heat stress";
  const tomatoline =
    "Rising temperature can impact tomato production.Tomatoes cannot deal very well with tomatoes above 25 deg celsius. In the current climate,temperatures can exceed the harmful threshold from it's growing season. the growing season starts in march and harvested in July";
  const maizeline =
    "Rising temperature can impact maize production.Maize cannot deal very well with tomatoes above 30 deg celsius. In the current climate,temperatures rarely exceed the harmful threshold from it's growing season. the growing season starts in march and harvested in July";
  const maizefuture =
    "However, as a result of climate change, maximum temperatures will increase. Around 2050, maximum temperatures will exceed the harmful threshold for maize on a regular basis.";
  return (
    <div className="bg-secondary p-5">
      <Card
        title="Introduction"
        text={tomato ? tomatointro : maizeintro}
        id="intro"
      />
      <CardRight
        title="Storyline"
        text={tomato ? tomatoline : maizeline}
        id="line"
      />
    </div>
  );
}
