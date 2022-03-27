import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://vjoy.cc/wp-content/uploads/2020/11/101936693_658774578304411_2081139384632201579_n.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;