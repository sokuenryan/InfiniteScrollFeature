import React from "react";
import profilePicture from "../../../static/assets/images/about/headshot.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
      style={{
        background: "url(" + profilePicture + " ) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}/>
      <div className="right-column">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae pariatur 
      dolorem reiciendis quia fugit quis suscipit error non aperiam accusantium, nisi 
      repellat ratione asperiores! Enim odio voluptatibus blanditiis vitae.
      Repellendus cupiditate illo dignissimos corporis perspiciatis et libero quo suscipit
      fugiat officia autem officiis perferendis expedita aut ratione itaque soluta unde 
      dolores ipsa sequi porro quod, incidunt sit. Eaque, sequi? Perferendis quae qui
      sapiente ratione ea nostrum dicta vitae voluptatem voluptatibus deleniti
      aspernatur ad illum repellat odio rem reprehenderit incidunt, alias optio
      accusamus quidem nihil iusto magnam fugiat non? Eum! Aspernatur earum sapiente
      id corporis atque quo iusto ipsum? Doloremque repellat incidunt quibusdam aperiam 
      asperiores odio amet natus delectus, aliquam non pariatur officiis aut possimus 
      culpa unde, optio vitae quae! Corporis,fuga qui facilis cupiditate nihil quam
      quod sequi. Minus velit sapiente quae labore id quia quam illum. Iste quia 
      molestias in cupiditate ad voluptas, quo corporis voluptatem illo ratione!
      </div>
      </div>
  );
}