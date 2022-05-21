import React from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i === 10) break;
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto}
                       className={styles.usersPhoto}/>
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.toggleFollowingProgress
                    .some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                  }}>
                    Unfollow</button>
                  : <button disabled={props.toggleFollowingProgress
                    .some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                  }}>
                    Follow</button>}

              </div>
            </span>
          <span>
              <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
              </span>
               <span>
                 <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
               </span>
              </span>
        </div>)
      }
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPages}
                       onClick={(event) => {
                         props.onPageChanged(p);
                       }}>{p}</span>
        })}
      </div>
    </div>
  )
}

export default Users;