import React from 'react';
import ShopItemList from './components/ShopItemList';
import SearchBar from '../../shared/components/UIElements/SearchBar';

import './Shop.css';

export default function Shop() {
  return (
    <div className='shopContainer'>
      <div className='searchBarContainer'>
        <SearchBar />
      </div>
      <div className='itemContainer'>
        <ShopItemList />
      </div>
    </div>
  );
}
