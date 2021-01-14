import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Perfect way to start a year", "Top News - 9958 readers")}
      {newsArticle("Coronavirus: India updates", "Top News - 6005 readers")}
      {newsArticle(
        "React - The Trending technology",
        "Top News - 9958 readers"
      )}
      {newsArticle("Happy New Year", "Top News - 10055 readers")}
      {newsArticle("Why use redux?", "Top News - 4564 readers")}
    </div>
  );
}

export default Widget;
