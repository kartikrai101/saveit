import {React, useEffect, useState, useRef} from 'react';
import './PagesStyles.css';
import {Link, useLocation} from 'react-router-dom';

const dummy_data = [
    {title: 'TITLE', artist: 'ARTIST(S)', link: 'LINK', date: 'DATE ADDED'},
    {title: 'Escapism', artist: 'RAYE, Lil NasX', link: 'https://www.youtube.com/watch?v=Dll6VJ2C7wo', date: '04/03/2023'},
    {title: 'Phero Na Najariya - Qala', artist: 'Amit Trivedi, Kausar Munir,Sireesha', link: 'https://www.youtube.com/watch?v=1_WaSnOnu1Q', date: '04/03/2023'},
    {title: 'Elevated', artist: 'Shubh', link: 'https://www.youtube.com/watch?v=I1nX5EuvwzE', date: '05/03/2023'},
    {title: 'I Wanna Be Yours', artist: 'Arctic Monkeys', link: 'https://www.youtube.com/watch?v=nyuo9-OjNNg', date: '05/03/2023'},
    {title: 'Drivers License', artist: 'Olivia Rodrigo', link: 'https://www.youtube.com/watch?v=ZmDBbnmKpqQ', date: '05/03/2023'},
    {title: 'Pehli Baar', artist: 'Sukriti Kakkar, Siddharth Mahadevan', link: 'https://www.youtube.com/watch?v=VkJlv0m6els', date: '06/03/2023'},
];

const PopPage = (props) => {

    const [songList, setSongList] = useState([]);

    const songNameRef = useRef('');
    const songArtistRef = useRef('');
    const songLinkRef = useRef('');

    const songSubmitHandler = () => {
        const date = new Date();

        const data = {
            title: songNameRef.current.value,
            artist: songArtistRef.current.value,
            link: songLinkRef.current.value,
            date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        }

        setSongList([...songList, data]);
    }

    return (
        <div className='pop-page-master-container'>
            <div className='pop-page-cover-image-container'>
                <img src="https://images.unsplash.com/photo-1530889927395-8a6a32ebd244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" className='pop-page-cover-image' />
                <div className='pop-page-song-input-master-container'>
                    <div className='pop-page-song-input-container'>
                        <div>
                            <input ref={songNameRef} type="text" className='pop-song-input-box' placeholder="Song name" required />
                        </div>
                        <div>
                            <input ref={songArtistRef} type="text" className='pop-song-input-box' placeholder="Artist(s)" required />
                        </div>
                        <div>
                            <input ref={songLinkRef} type="text" className='pop-song-input-box' placeholder="Link" required />
                        </div>
                        <div className='pop-song-form-button'>
                            <div onClick={() => songSubmitHandler()}>Add Song</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pop-page-song-list-master-container'>
                <div className='indie-page-song-list-header-container'>

                    <div className='pop-page-song-list-header-container-text'>Pop Playlist</div>
                    <div className='pop-page-song-list-features-container'>
                        <div className='pop-page-song-list-feature-item-container'>Song Count: {songList.length}</div>
                        <div className='pop-page-song-list-feature-item-container'>Listening Minutes: 88</div>
                        <div className='pop-page-song-list-feature-item-container'>Last updated: {songList.length > 0 ? songList[songList.length-1].date :0} </div>
                    </div>  
                </div>
                <div className='indie-page-song-list-master-container-2'>
                    <div>
                        {
                            songList.map((item, index) => {
                                if(index === 0){
                                    return (
                                        <div>
                                            <div className='pop-page-song-list-column-container-2-headings'>
                                                <div className='pop-page-song-list-column-heading-text'>TITLE</div>
                                                <div className='pop-page-song-list-column-heading-text'>ARTIST</div>
                                                <div className='pop-page-song-list-column-heading-text'>LINK</div>
                                                <div className='pop-page-song-list-column-heading-text'>DATE MODIFIED</div>
                                            </div>
                                            <div>
                                                <hr/>
                                            </div>
                                        </div>
                                    );
                                }else{
                                    return (
                                        <Link to={item.link} target="_blank" className="remove-link-style">
                                            <div className='pop-page-song-list-column-container-2'>
                                                <div className='pop-page-song-list-column-text'>{item.title}</div>
                                                <div className='pop-page-song-list-column-text'>{item.artist}</div>
                                                <div className='pop-page-song-list-column-text'>{item.link}</div>
                                                <div className='pop-page-song-list-column-text'>{item.date}</div>
                                            </div>
                                        </Link>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopPage;