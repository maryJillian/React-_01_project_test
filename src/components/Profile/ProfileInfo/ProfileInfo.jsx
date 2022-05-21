import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      {/*    src='https://vjoy.cc/wp-content/uploads/2020/11/101936693_658774578304411_2081139384632201579_n.jpg'/>*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status}/>
      </div>
    </div>
  )
}

export default ProfileInfo;