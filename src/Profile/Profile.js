const Profile = (props) => {
    return(
        <div>
            <img src ={props.children} alt = 'moi'/>
            <h5>{props.nom}</h5>
            <h5>{props.profession}</h5>
            <p>{props.bio}</p>
            <button onClick={ () => {props.handleName(props.nom)}}></button>
        </div>
    )

}
export default Profile;