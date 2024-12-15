import React, { useState } from 'react';
import { Grid } from '@mui/material';
import IconCard from './IconCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const IconList = ({ icons }) => {
  const [visibleIcons, setVisibleIcons] = useState(icons.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (visibleIcons.length >= icons.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleIcons(visibleIcons.concat(icons.slice(visibleIcons.length, visibleIcons.length + 20)));
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={visibleIcons.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Завантаження...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Всі ікони завантажено</b>
        </p>
      }
    >
      <Grid container spacing={2}>
        {visibleIcons.map((icon) => (
          <Grid item key={icon.id} xs={12} sm={6} md={4} lg={3}>
            <IconCard icon={icon} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default IconList;
