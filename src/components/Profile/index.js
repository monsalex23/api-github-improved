import React from 'react'
import * as S from "./styled"

const Profile = () => {
    return (
        <S.Wrapper>
            <img src="https://avatars.githubusercontent.com/u/86568241?v=4" alt="Avatar of user" />
            <div>
                <div>
                    <h1>Alex Monsalve</h1>
                    <S.Wrapper>
                        <h3>UsrerName: </h3>
                        <span>monsalex23</span>
                    </S.Wrapper>

                </div>


                <S.Wrapper>
                    <div>
                        <h4>Follower</h4>
                        <span>6</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>6</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>6</span>
                    </div>
                </S.Wrapper>

                <div>User</div>
            </div>
        </S.Wrapper>
    )
}

export default Profile