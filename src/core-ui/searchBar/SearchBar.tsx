import {Text} from '../text/Text';
import {Button} from '../button/Button';

export function SearchBar() {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <g id="Rounded">
        <path d="M21.586,19.586L16,14h-2v2l5.586,5.586c0.552,0.552,1.448,0.552,2,0h0C22.138,21.034,22.138,20.138,21.586,19.586z" />
        <circle
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeWidth: 2,
            strokeMiterlimit: 10,
          }}
          cx="9"
          cy="9"
          r="6"
        />
        <line
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeMiterlimit: 10,
          }}
          x1="13"
          y1="13"
          x2="15.5"
          y2="15.5"
        />
      </g>
    </svg>
  );

  return (
    <div className="search-wrap">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Search" />
        <Button
          type="primary"
          content=""
          icon={searchIcon}
          className="search-button"
          style={{padding: '4px'}}
        />
      </div>
    </div>
  );
}
