import  React from 'react';
import  icon from './images/icon.png'
import  comment from "./images/comment.png"
import  repost from './images/repost.png'
import  loader from './images/uploader.png'
import  like from './images/like.png'
const Post = (props) => {

    return (
        <div className={"cont"}>
            <div>
            <img className={"logo"} src={props.author.photo}  alt={"logo"}/>
            </div>
            <div className={"content1"}>
                <label className={"name"}>{props.author.name} <img className={"icon"} src={icon} alt={"icon"}/> </label>
                <label className={"nickname"}>{props.author.nickname} · {props.date}</label><br/>
            <label className={"content"}>{props.content}</label>

            <img className={"post_image"} src={props.image} alt={"post_image"}/>
            <div className={"icon_panel"}>
                <img src={comment} alt={"comment"}/><label>{props.statistic.coment}</label>
                <img src={repost} alt={"repost"}/><label>{props.statistic.repost}</label>
                <img src={like} alt={"like"}/><label>{props.statistic.like}</label>
                <img src={loader} alt={"loader"}/>
            </div>
        </div>
        </div>
    );
}
export default Post;