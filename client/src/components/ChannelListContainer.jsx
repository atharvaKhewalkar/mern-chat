import React from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import{ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

function SideBar(){
    return(
   
    <div className='channel-list__sidebar'> 
        <div className='channel-list__sidebar_icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt='chat' width="30"/>
            </div>

        </div>
        <div className='channel-list__sidebar_icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt='Logout' width="30"/>
            </div>

        </div>
    </div>
    )
}

function CompanyHeader(){
    return(
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Mern Chat</p>
        </div>
    )
}



const ChannelListContainer = () => {
    return (
      <>
          <SideBar/>
          <div className='channel-list__list__wrapper'>
              <CompanyHeader/>
              <ChannelSearch/>
              <ChannelList
                  filters={{}}
                  channelRenderFilterFn={()=>{}}
                  List={(listProps) => (
                      <TeamChannelList
                          {...listProps}
                          type="team"
                      />
                  )}
                  Preview={(previewprops)=>(
                      <TeamChannelPreview
                          {... previewprops}
                          type='team'
                      />
                  )}
              />

                <ChannelList
                  filters={{}}
                  channelRenderFilterFn={()=>{}}
                  List={(listProps) => (
                      <TeamChannelList
                          {...listProps}
                          type="messaging"
                      />
                  )}
                  Preview={(previewprops)=>(
                      <TeamChannelPreview
                          {... previewprops}
                          type='messaging'
                      />
                  )}
              />
          </div>
      </>
    )
}
  
  

export default ChannelListContainer;
