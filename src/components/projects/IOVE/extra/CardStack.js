import React from "react";
import BigCard from "./BigCard";
import LittleCard from "./LittleCard";
import user from './testUser'

export default function CardStack (props) {
    const cardStack = (
        <div 
        className={`card-stack`}
        >
            <LittleCard 
                cardNum={user.smallCards.card_1.id}
                theme={user.smallCards.card_1.theme} 
                src='https://github.com/Collert/iove/blob/master/backend/iove/frontend/public/static/assets/game_covers/minecraft.jpg?raw=true'
            />
            <BigCard 
                editUser={props.editUser} 
                editable={props.editable} 
                purpose='hobby' 
                hobby={user.bigCards.favoriteHobby}
                user={user}
            />
            <LittleCard 
                cardNum={user.smallCards.card_2.id}
                theme={user.smallCards.card_2.theme} 
                src='https://github.com/Collert/iove/blob/master/backend/iove/frontend/public/static/assets/zodiac/sagittarius.gif?raw=true'
            />
            <BigCard 
                editUser={props.editUser} 
                editable={props.editable} 
                purpose='code' 
                codeObj={user.bigCards.code}
                user={user}
                viewport={props.viewport}
            />
            <LittleCard 
                cardNum={user.smallCards.card_3.id}
                theme={user.smallCards.card_3.theme} 
                src='https://github.com/Collert/iove/blob/master/backend/iove/frontend/public/static/assets/looking_for/friends.jpg?raw=true'
            />
            <BigCard 
                editUser={props.editUser} 
                editable={props.editable} 
                purpose='bio' 
                bioText={user.bigCards.bio} 
                backgroundInfo={user.bigCards.background} 
                lifestyleInfo={user.bigCards.lifestyle}
                user={user}
            />
            <LittleCard 
                cardNum={user.smallCards.card_4.id}
                theme={user.smallCards.card_4.theme} 
                src='https://github.com/Collert/iove/blob/master/backend/iove/frontend/public/static/assets/game_covers/minecraft.jpg?raw=true'
            />
            <BigCard 
                editUser={props.editUser} 
                editable={props.editable} 
                purpose='title' 
                name={user.name} 
                age={user.age}
                profilePic={user.bigCards.profilePicture}
                user={user}
            />
        </div>
    )
    return cardStack
}