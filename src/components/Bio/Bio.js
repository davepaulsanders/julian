import React from "react";
import "./Bio.css";
const bio = require("../../assets/bio.jpg");

export const Bio = () => {
  return (
    <div id="bio" className="p-10 bg-gray-200 w-full flex justify-center">
      <div className="bio-container w-full lg:w-8/12">
        <img className="bioImage" src={bio} alt="Julian Berkowitz" />
        <p className="bioPara">
          Julian Berkowitz is a drummer and educator residing in Washington, DC.
          Rooted in the deep tradition of American jazz, fusion, funk, and the
          rhythms of Brazil, Julian has quickly become one of the DC area’s most
          in-demand drummers. The son of a Jewish-American father and Brazilian
          mother, Julian was born and raised in the small town of Easton,
          Connecticut. His first experience with the drums began at the age of
          5, when he discovered the pots and pans in the kitchen doubled as a
          makeshift drum kit. In sixth grade, middle school band director and
          drummer Robert LaValle noticed Julian’s talent on the drums and became
          his first drum instructor, introducing him to funk and jazz music for
          the first time.
        </p>
        <br />
        <p className="bioPara">
          Upon moving to Washington, DC in 2013 to attend The George Washington
          University, Julian was fortunate to study jazz with virtuoso Brazilian
          drummer Alejandro Lucini. Lucini/’s mentorship was crucial in Julian’s
          development in both the straight-ahead jazz and Brazilian/Latin jazz
          spheres. Julian graduated from GWU in 2017 and began to explore the
          D.C. jazz scene.
        </p>
        <br />
        <p className="bioPara">
          Julian has performed and/or recorded with musicians such as Benny
          Benack III, Kris Funn, Chuck Redd, Michael Bowie, Corcoran Holt, Mike
          Pope, Bill Heid, Tedd Baker, Herman Burney, Thad Wilson, Herb Scott,
          Alex Tremblay, and José André. Additionally, Julian played with
          international artist Michel Nirenberg on his 2017 and 2018 U.S. tours
          and accompanied smooth Latin jazz artist Debora Galan on her 2019 East
          Coast tour.{" "}
        </p>
        <br />
        <p className="bioPara">
          Julian has performed at a number of venues in the DC metro area and
          beyond, including Blues Alley, Westminster Jazz Night in DC, Mr.
          Henry’s, Sharp 9 Gallery, Rams Head on Stage, Alice’s Jazz and
          Cultural Society, Twins Jazz, An Die Musik Live, Avalon Theatre, Jojo,
          and 49 West. He’s also performed at festivals such as the DC Jazz
          Festival and the West Virginia Jazz & Wine Festival.
        </p>
        <br />
        <p className="bioPara">
          As a bandleader, Julian frequently leads his own groups in trio,
          quartet, and quintet configurations at various music venues in the DMV
          area. Currently, Julian has a weekly Friday night residency with his
          trio at Right Proper Brewing’s Brookland Production House. He also
          leads a jazz jam session at Library Tavern every Sunday night.{" "}
        </p>
        <br />
        <p className="bioPara">
          As an educator, Julian teaches private drum lesson in DC. He’s also on
          staff as the drum instructor at Capitol Hill Day School.{" "}
        </p>
      </div>
    </div>
  );
};
