import React from 'react';
import bin from '../../assets/vectors/bin.svg';
import folder from '../../assets/vectors/folder.svg';
import family from '../../assets/vectors/family.svg';
import filter from '../../assets/vectors/filter.svg';
import BlueButton from '../BlueButton/BlueButton';
import SearchBar from '../SearchBar/SearchBar';

import './AppBarMenu.css';

const AppBarMenu = () => {

  const submitHandler = () => {

  }

  return (
    <div className="AppBarMenu">
      <div className={"search-section"}>
        <SearchBar />
      </div>
      <div className={"tools-section"}>
        <div className={"iconSection"}>
          <img src={bin} alt={"bin"} />
        </div>
        <div className={"iconSection"}>
          <img src={folder} alt={"folder"} />
        </div>
        <div className={"iconSection"}>
          <img src={family} alt={"filter"} />
        </div>
        <div className={"iconSection"}>
          <img src={filter} alt={"filter"} />
        </div>
        <BlueButton text={"Ավելացնել Բնակիչ"} onClick={submitHandler}/>
      </div>
    </div>
  )
}

export default AppBarMenu;
