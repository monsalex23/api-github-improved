import React from 'react'
import * as S from "./styled"

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/86568241?v=4" alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Alex Monsalve</h1>
                    <S.WrapperUserName>
                        <h3>UsrerName: </h3>
                        <a href="https://github.com/monsalex23" target="_blank" rel="noreferrer">monsalex23</a>
                    </S.WrapperUserName>

                </div>


                <S.WrapperStatusCount>
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
                </S.WrapperStatusCount>

                
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile