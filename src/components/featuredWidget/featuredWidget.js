import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../../stores/reducers/favorites';
import { setCurrentIndex, setCurrentTrack, setTracks } from '../../stores/reducers/play';

export default function FeaturedWidget({item, index}) {
    const artistlist = (temp) => {
        const artists = [];
        temp?.forEach(element => {
            artists.push(element.name)
        })
        return <p className='artists' >{artists?.join(' | ')}</p> ;
      };
     
      const dispatch = useDispatch();
      const featuredPlaylistItems = useSelector((state) => state.featuredPlaylist.featuredPlaylistItems)
    
      const handleFeaturedPlaylist = () => {
        dispatch(setPlayer({player:true}));
        dispatch(setTracks({tracks:featuredPlaylistItems}));
        dispatch(setCurrentTrack({currentTrack:item.track}));
        dispatch(setCurrentIndex({currentIndex:index}));
      }

  return (
    <div className='widget-body flex' onClick={()=>handleFeaturedPlaylist()}>
      <div className='img-box'><img src={item?.track?.album?.images[2].url} alt='album-art' className='widget-image'/></div>        
      <div className='widget-info  flex'>
        <p className='songName'>{item?.track?.name}</p>
        {artistlist(item?.track?.artists)}
      </div>
      <div className='widget-box flex'><p>{item?.track?.album?.name}</p></div>
      <div className='widget-box flex'><p>{item?.added_at?.split('T')[0]}</p></div>       
    </div>
  )
}
