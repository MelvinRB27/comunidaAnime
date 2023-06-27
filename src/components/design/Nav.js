// import * as reactComponent from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import { GetAnimeByParamas } from "../../api/apiAxios";
import "../../css/design/Nav.css";

const Nav = () => {
  const [result, setResult] = useState("");
  GetAnimeByParamas("https://kitsu.io/api/edge/anime", result);

  let valueInput;
  const handleInputChange = async (event) => {
    const value = event.target.value;
    if (event.target.value.length > 0) {
      setResult(value);
      valueInput = value;
    } else setResult("empty");
    valueInput = "";
  };

  return (
    <div className="navBar">
      <div className="navBar-children">
        <Link to="/">
          <svg
            className="component-logo"
            viewBox="0 0 382 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M191 363C296.486 363 382 281.74 382 181.5C382 81.2603 296.486 0 191 0C85.5136 0 0 81.2603 0 181.5C0 281.74 85.5136 363 191 363ZM76 188C103.614 188 126 165.614 126 138C126 110.386 103.614 88 76 88C48.3858 88 26 110.386 26 138C26 165.614 48.3858 188 76 188ZM354 132C354 159.614 331.614 182 304 182C276.386 182 254 159.614 254 132C254 104.386 276.386 82 304 82C331.614 82 354 104.386 354 132ZM110.19 298H118.428L121.126 289.708H134.255L136.947 298H145.186L132.651 261.636H122.743L110.19 298ZM132.307 283.707L127.839 269.946H127.555L123.078 283.707H132.307ZM179.978 298V261.636H172.326V284.506H172.006L156.31 261.636H149.563V298H157.251V275.113H157.517L173.338 298H179.978ZM218.956 261.636H209.475V298H216.932V274.243H217.234L226.645 297.822H231.723L241.133 274.332H241.435V298H248.893V261.636H239.411L229.397 286.068H228.971L218.956 261.636ZM255.227 261.636V298H279.801V291.661H262.915V282.979H278.469V276.64H262.915V267.975H279.73V261.636H255.227ZM268.579 250.042L264.815 258.121H270.159L275.575 250.042H268.579ZM191 333V152H201V333H191Z"
              fill="#282c34"
            />
          </svg>

          <h3 className="text-logo">Comunidad Animé</h3>
        </Link>

        <div className="container-search">
          <input
            className="input-search"
            type="text"
            value={valueInput}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// <reactComponent.Button
//   variant='contained'
// >Melvin
// </reactComponent.Button>
